const ProdutoService = require("../services/ProdutoService");
// const database = require("../database/models/index");

const controller = {
  index: async (req, res) => {
    const list = await ProdutoService.getProdutoList();
    const produto1 = list[Math.floor(Math.random() * list.length)];
    const produto2 = list[Math.floor(Math.random() * list.length)];
    const produto3 = list[Math.floor(Math.random() * list.length)];
    return res.render("index", {
      produto1: produto1,
      produto2: produto2,
      produto3: produto3,
    });
    //lista com os produtos do banco de dados, passando pra view
  },
  create: async (req, res) => {
    const { name, description, type, price, link } = req.body;

    const produto = await ProdutoService.createProduto(
      name,
      description,
      type,
      price,
      link
    );

    return res.json(produto);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const destroyedProduto = await ProdutoService.destroyProduto(id);
    return res.json(destroyedProduto);
  },
};

module.exports = controller;
