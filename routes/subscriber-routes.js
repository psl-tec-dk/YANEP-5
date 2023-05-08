const express = require("express");
const { getAll } = require("../dataservice/subscriber-dataservice");
const router = express.Router();


/**
 * @description All subscribers
 * @route       GET /subscriber
 */
router.get("/", async (req, res) => {
    const data = await getAll(req, res);
    // console.log(data);
    res.render("subscriber", {data});
    // res.send(` ${req.method} | ${req.path}`);
});

// /**
//  * @description Subscribers by ID
//  * @route       GET /subscriber/:id
//  */
// router.get("/:id", (req, res, next) => {
//     if(!Number(req.params.id)) return next()
//     res.send(` ${req.method} | ${req.path} | ID: ${req.params.id}`);
// });

/**
 * @description Form for adding subscriber
 * @route       GET /subscriber/add
 */
router.get("/add", (req, res) => {
    res.render("subscriber-add");
    // res.send("Add subscriber");
})

/**
 * @description Create subscribers
 * @route       POST /subscriber
 */
router.post("/", (req, res) => {
    res.send(` ${req.method} | ${req.path}`);
});

/**
 * @description Update subscribers
 * @route       PUT /subscriber/:id
 */
router.put("/:id", (req, res) => {
    res.send(` ${req.method} | ${req.path} | ${req.params.id}`);
});

/**
 * @description Delete subscriber
 * @route       DELETE /subscriber/:id
 */
router.delete("/:id", (req, res) => {
    res.send(` ${req.method} | ${req.path} | ${req.params.id}`);
});

module.exports = router;