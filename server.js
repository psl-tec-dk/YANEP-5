const express = require("express");
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "production";

const app = express();

app.use(require("./middleware/logger"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.use("/", require("./routes/miscellaneous-routes"));

app.use("/subscriber", require("./routes/subscriber-routes"));

app.listen(PORT, () => {
    let msg = "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
    msg += new Date().toLocaleTimeString("da-DK");
    msg += ` Server started in ${NODE_ENV} mode.\nGo to http://localhost:${PORT}`;
    msg += "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    console.log(msg);
});
