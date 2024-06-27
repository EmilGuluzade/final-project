const express = require("express");
const user_router = express.Router();
const controller = require("../controllers/index");
const upload = require("../middlewares/user.register.middleware");
const passport = require("../passport");

// authenticateToken can be added here

user_router.get("/api/users", controller.user.getAll);
user_router.get("/api/users/:id", controller.user.getOne);
user_router.delete("/api/users/:id", controller.user.delete);
user_router.patch("/api/users/:id", controller.user.update);
user_router.post("/api/users", upload.single("src"), controller.user.register);
user_router.post("/api/login", controller.user.user_login);
user_router.get("/api/verify/:token", controller.user.verify);
user_router.post("/api/addToBasket/:userId", controller.user.addTobasket);
user_router.delete(
  "/api/removeFromBasket/:userId/:productId",
  controller.user.removeFrombasket
);
user_router.get("/api/basket/:userId", controller.user.basket);
user_router.patch(
  "/api/updateBasketItem/:userId/:productId",
  controller.user.updateBasketItem
);

// Google OAuth
user_router.get("/api/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});
user_router.get("/api/login/success", (req, res) => {
  if (req.user) {
    res.status(401).json({
      success: true,
      message: "success",
      user: res.user,
    });
  }
});

user_router.get("/api/logout", (req, res) => {
 req.logOut()
 res.redirect("http://localhost:5173/login")
});

user_router.get(
  "/api/users/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

user_router.get(
  "/api/users/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "/api/login/failed",
  })
);

module.exports = user_router;
