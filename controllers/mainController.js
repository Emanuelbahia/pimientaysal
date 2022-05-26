const about = {
  title: "Bienvenido",
  description: "prueba",
  history: "cualquier info",
  menu: "otro menu disponible",
};

const menuDelDia = [
  {
    id: 1,
    title: "capaccio fresco",
    description: "entrada carpaccio de salmon con citricos",
    price: "$65.50",
  },
  {
    id: 2,
    title: "cangrejo fresco",
    description: "entrada de ensalada con citricos",
    price: "$85.50",
  },
  {
    id: 3,
    title: "conejo fresco",
    description: "entrada de empanadas",
    price: "$285.50",
  },
  {
    id: 4,
    title: "hamburguesa",
    description: "salchicha con pure",
    price: "$185.50",
  },
];

const mainController = {
  index: (req, res) => {
    res.render("index", { about: about, menu: menuDelDia });
  },
  detail: (req, res) => {
    let plato = menuDelDia.find((plato) => plato.id == req.params.menuId);
    console.log(plato);
    res.render("detalleMenu", { plato: plato });
  },
};

module.exports = mainController;
