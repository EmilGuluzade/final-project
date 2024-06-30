const generateAccessToken = require("../helpers/generateAccessToken");
const sendVerifyEmail = require("../helpers/sendMail");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const user_controller = {
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find();
      if (users.length > 0) {
        res.status(200).json({
          message: "success",
          data: users,
        });
      } else {
        res.status(204).json({
          message: "not found",
          data: [],
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findById(id);
      if (user) {
        res.status(200).json({
          message: "success",
          data: user,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await UserModel.findByIdAndDelete(id);
      if (response) {
        res.status(200).json({
          message: "deleted",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;

    try {
      // Check for duplicate username and email, excluding the current user
      const [duplicateUserName, duplicateUserEmail] = await Promise.all([
        UserModel.findOne({ username, _id: { $ne: id } }),
        UserModel.findOne({ email, _id: { $ne: id } }),
      ]);

      let message = "";

      if (duplicateUserName) {
        message = "username already exists";
      }

      if (duplicateUserEmail) {
        message = "email already exists";
      }

      if (message) {
        return res.status(400).json({
          message: message,
          error: true,
        });
      }

      // Prepare the update object
      const updateData = {
        username,
        email,
      };

      if (req.file) {
        updateData.src = `http://localhost:8080/api/uploads/${req.file.filename}`;
      }

      // Update user and return the new user object
      const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, { new: true });

      if (updatedUser) {
        res.status(200).json({
          message: "updated",
          data: updatedUser,
        });
      } else {
        res.status(404).json({
          message: "not found",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error: error.message,
      });
    }
  },
   changePassword: async (req, res) => {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    try {
      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(currentPassword, user.password);

      if (!isMatch) {
        return res.status(400).send({ message: "Current password is incorrect" });
      }

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      await user.save();

      res.status(200).send({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Change password error:", error);
      res.status(500).send({ message: "An error occurred while changing password" });
    }
  },
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Check for duplicate username and email
      const [duplicateUserName, duplicateUserEmail] = await Promise.all([
        UserModel.findOne({ username }),
        UserModel.findOne({ email }),
      ]);

      let message = "";

      if (duplicateUserName) {
        message = "username already exists";
      }

      if (duplicateUserEmail) {
        message = "email already exists";
      }

      if (message) {
        return res.status(400).json({
          message: message,
          error: true,
        });
      }

      // Hash the password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Construct new user object
      const newUser = {
        username,
        email,
        password: hashedPassword,
        src: req.file
          ? `http://localhost:8080/api/uploads/${req.file.filename}`
          : null,
      };

      const user = new UserModel(newUser);

      // Generate JWT token
      const token = jwt.sign(
        { email: newUser.email },
        process.env.PRIVATE_KEY,
        { expiresIn: "1d" }
      );

      // Send verification email
      sendVerifyEmail(newUser.email, token);

      // Save the new user
      await user.save();

      res.status(201).json({
        message: "User registered successfully",
        error: false,
        data: user,
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({
        message: "An error occurred during registration",
        error: true,
      });
    }
  },
  user_login: async (req, res) => {
    const user = await UserModel.findOne({
      email: req.body.email,
    });
    if (user) {
      bcrypt.compare(
        req.body.password,
        user.password,
        function (err, response) {
          if (response) {
            if (user.isVerified == true) {
              //generate token
              const token = generateAccessToken(user);
              res.send({
                message: "signed in successfully",
                auth: true,
                user: user,
                token: token,
              });
            } else {
              res.send({
                message: "verify your email",
                auth: false,
              });
            }
          } else {
            res.send({
              message: "email or password incorrect",
              auth: false,
            });
          }
        }
      );
    } else {
      res.send({
        message: "no such user",
        auth: false,
      });
    }
  },
  verify: async (req, res) => {
    const { token } = req.params;
    const validToken = jwt.verify(token, process.env.PRIVATE_KEY);

    if (validToken) {
      const { email } = validToken;
      const user = await UserModel.findOne({ email: email });

      if (user) {
        await UserModel.findByIdAndUpdate(user._id, { isVerified: true });
        res.redirect("http://localhost:5173/login");
        return;
      } else {
        return res.send({ message: "no such user" });
      }
    } else {
      return res.send({ message: "invalid token", auth: false });
    }
  },
  addTobasket: async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    try {
      let user = await UserModel.findById(userId);
      user.basket.push({ product: productId, quantity: quantity });
      await user.save();
      res
        .status(200)
        .json({ success: true, message: "Product added to basket." });
    } catch (error) {
      console.error("Some error while adding basket:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Some error while adding basket." });
    }
  },
  removeFrombasket: async (req, res) => {
    const { userId, productId } = req.params;

    try {
      let user = await UserModel.findById(userId);
      user.basket = user.basket.filter((item) => item.product != productId);
      await user.save();

      res.status(200).json({ success: true, message: "item removed basket." });
    } catch (error) {
      console.error(
        "Some error while removing item from basket:",
        error.message
      );
      res
        .status(500)
        .json({
          success: false,
          message: "Some error while removing item from basket.",
        });
    }
  },
  basket: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await UserModel.findById(userId).populate("basket.product");
      res.status(200).json(user.basket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBasketItem: async (req, res) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body;
  
   
  
    try {
      const user = await UserModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const basketItem = user.basket.find(item => item.product.toString() === productId);
  
      if (!basketItem) {
        return res.status(404).json({ error: 'Basket item not found' });
      }
  
      basketItem.quantity = quantity;
      await user.save();
  
      res.status(200).json({ message: 'Basket item updated successfully', updatedItem: basketItem });
    } catch (error) {
      console.error('Error updating basket item:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  
};

module.exports = user_controller;
