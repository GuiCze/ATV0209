const express = require("express")
const router = express.Router()

const mercados = require("../controllers/mercados.js")
const cep_endereco = require("../middlewares/cep_endereco.js");
const nomezator = require("../middlewares/nomezator.js")

router.post("/",cep_endereco,nomezator, (req, res) => {
    const body = req.body;
    const code = mercados.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = mercados.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = mercados.show(req.params.id);
    res.json(code);
});

router.put("/:id", (req, res) => {
    const body = req.body;
    const code = mercados.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    mercados.destroy(req.params.id);
    res.json();
})

module.exports = router;