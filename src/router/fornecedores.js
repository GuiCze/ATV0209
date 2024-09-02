const express = require("express")
const router = express.Router()

const fornecedores = require("../controllers/fornecedores.js")

router.post("/", (req, res) => {
    const body = req.body;
    const code = fornecedores.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = fornecedores.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = fornecedores.show(req.params.id);
    res.json(code);
});

router.put("/:id", (req, res) => {
    const body = req.body;
    const code = fornecedores.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    fornecedores.destroy(req.params.id);
    res.json();
})

module.exports = router;