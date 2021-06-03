const ProdutoService = require("../services/ProdutoService");

const controller = {
  index: async (req, res) => {
    const list = await ProdutoService.getProdutoList();
    return res.render("index", { title: "DT3", list });
  },
  create: async (req, res) => {
    const { name, description, type, price } = req.body;

    const produto = await ProdutoService.createProduto(
      name,
      description,
      type,
      price
      //link de imagem aqui, pra n usar o multer
    );

    return res.json(produto);
  },
};

module.exports = controller;
