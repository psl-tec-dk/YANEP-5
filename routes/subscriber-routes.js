const express = require("express");
const dbh = require("../dataservice/subscriber-dataservice");
const router = express.Router();


/**
 * @description All subscribers
 * @route       GET /subscriber
 */
router.get("/", async (req, res) => {
    const data = await dbh.getAll(req, res);
    res.render("subscriber", {data});
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
});

/**
 * @description Create subscribers
 * @route       POST /subscriber/add
 */
router.post("/add", async (req, res) => {
    const data = await dbh.create(req, res)
    console.log(data);
    res.redirect("/subscriber");
    // res.send(` ${req.method} | ${req.path}`);
});

/**
 * @description Form for editing subscriber
 * @route       GET /subscriber/edit
 */
router.get("/edit/:id", async (req, res) => {
    const data = await dbh.getByID(req, res);
    res.render("subscriber-edit", {data});
});

/**
 * @description Form for editing subscriber
 * @route       GET /subscriber/edit
 */
router.post("/edit/:id", async (req, res) => {
    const data = await dbh.update(req, res);
    res.redirect("/subscriber")
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
 * @route       GET /subscriber/:id
 */
router.get("/delete/:id", async (req, res) => {
    const data = await dbh.remove(req, res);
    res.redirect("/subscriber")
});

module.exports = router;