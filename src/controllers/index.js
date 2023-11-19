const { Socio } = require("../models/sociosModel");
// Controllers
const handlerController = async (req, res) => {
  try {
    const { nombre, id, categoria, page } = req.query;
    const query = {}

    if(nombre) query.name = new RegExp(nombre, "i")
    if(id) query.id = id
    if(categoria) query.pills = {$in:categoria}

    const options = {limit: 9, page: 1}
    if(page) options.page = page
    const socioList = await Socio.paginate(query, options);
    console.log(query);
    res.status(200).json({ data: socioList });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { handlerController };
