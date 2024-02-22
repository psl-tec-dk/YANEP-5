const fs = require("fs");
const { join } = require("path");

const writeToLogFile = logStr => {
    const stream = fs.createWriteStream(join(__dirname, "../logs/log.txt"), { flags: "a" });
    stream.write(logStr + "\n");
    stream.close();
}

const logger = options => {
    return (req, res, next) => {
        if (!options) return next();
        let logStr = new Date().toLocaleString("da-DK");
        logStr += ` ${req.method} '${req.path}'`;
        res.on("finish", () => {
            logStr += ` ${res.statusCode} '${res.statusMessage}'`;
            if (options.split(" ").includes("console")) {
                console.log(logStr);
            }
            
            if (options.split(" ").includes("file")) {
                writeToLogFile(logStr);
            }
        });
        next();
    };
}

module.exports = {logger, writeToLogFile};