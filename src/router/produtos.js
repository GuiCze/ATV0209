const express = require("express")
const router = express.Router()

const produtos = require("../controllers/produtos.js")
const nomezator = require("../middlewares/nomezator.js");


router.post("/", nomezator,  (req, res) => {
    const body = req.body;
    const code = produtos.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = produtos.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = produtos.show(req.params.id);
    res.json(code);
});

router.put("/:id",nomezator, (req, res) => {
    const body = req.body;
    const code = produtos.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    produtos.destroy(req.params.id);
    res.json();
})

module.exports = router;