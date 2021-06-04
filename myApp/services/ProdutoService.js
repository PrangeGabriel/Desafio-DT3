const database = require("../database/models/index");

const ProdutoService = {
  getProdutoList: async () => {
    const resultados = await database.Produto.findAll();

    return resultados;
  },
  createProduto: async (name, description, type, price, link) => {
    const newProduto = await database.Produto.create({
      name,
      description,
      type,
      price,
      link,
    });
    return newProduto;
  },
  destroyProduto: async (id) => {
    const destroyedProduto = await database.Produto.destroy({
      where: {
        id,
      },
    });
    return destroyedProduto;
  },
};

module.exports = ProdutoService;
