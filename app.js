require("dotenv").config();
const express = require("express");
const app = express();

const loginRouter = require("./api/router/login.router");
const userRouter = require("./api/router/user.router");
const barangRouter = require("./api/router/barang.router");
const transaksiRouter = require("./api/router/transaksi.router");
app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);
app.use("/api/transaksi", transaksiRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running PORT : ", process.env.APP_PORT);
});