
    const app = require("./config/dbConnect")
    const cors = require("cors");
    const bodyParser = require("body-parser");
    const router = require("./routes/index")
    
    const session = require('express-session');
    const passport = require('./passport'); 



    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());


    app.use(session({ 
        secret: 'SECRET', 
        resave: false, 
        saveUninitialized: true 
      }));
      app.use(passport.initialize());
      app.use(passport.session());

      app.get('/api/profile', (req, res) => {
        if (!req.isAuthenticated()) {
          return res.redirect('/');
        }
        res.send(`Merhaba ${req.user.username}`);
      });

    app.use(router.blog)
    app.use(router.product)
    app.use(router.user)
    app.use(router.tag)

   