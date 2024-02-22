const express = require("express");
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "production";
const LOG = process.env.LOG || false;
const {logger, writeToLogFile} = require("./middleware/logger");

const app = express();

app.use(require("./middleware/no-cache"));

app.use(logger(LOG));


app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

app.use("/", require("./routes/miscellaneous-routes"));

app.use("/subscriber", require("./routes/subscriber-routes"));

app.listen(PORT, () => {
    let msg = "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
    msg += new Date().toLocaleString("da-DK");
    msg += ` Server running in ${NODE_ENV} mode. Listening at http://localhost:${PORT}`;
    // msg += "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
    console.log(msg);
    if (LOG.split(" ").includes("file")) writeToLogFile(msg);
})