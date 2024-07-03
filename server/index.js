const app = require("./config/dbConnect");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/index");

const session = require("express-session");
const passport = require("./passport");

const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());



io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('sendMessage', (message) => {
    console.log('New message:', message);
    io.emit('chatMessage', message);
  });
});




app.get("/api/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(req.user);
});

app.use(router.blog);
app.use(router.product);
app.use(router.user);
app.use(router.tag);
