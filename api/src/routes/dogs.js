const { Router } = require("express");
const { Temper } = require("../db");
const router = Router();
const { Op } = require("sequelize");
const { GetDogs, GetId, PostDog, DeleteDog, UpdateDog } = require("../controllers/Route");

//-----------------GET-----------------//

router.get('/', async (req, res) => {  
  try {
      
      const { name } = req.query;

      const dogie = await GetDogs(name)
      res.status(200).send(dogie);

  } catch (error) {

      res.status(400).send(error.message)

  }
   
})

// router.get("/", async (req, res) => {
//   try {

//     const { name } = req.query;

//     const data = await GetDogs(name);
//     res.status(200).json(data);

//   } catch (error) {

//     res.status(500).send(error.message);
//   }
// });

//-----------------GET: ID-----------------//

router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const dog = await GetId(id)
      // let findDog = dog.find(d => d.id === parseInt(idRaza))
      // if(!findDog) { findDog = await Dog.findOne({ where : { id }}) }

      res.status(200).send(dog)
      // const findDog = await Dog.findByPk(idRaza, {include : Temperament})
      // findDog
      // ? res.status(200).send(findDog)
      // : res.status(404).send("id no encontrado");
  } catch (error) {
      res.status(404).send(error.message)
  }

});

// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await GetId(id)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

//-----------------POST-----------------//

router.post("/", async (req, res) => {
  try {
      const Posteo = await PostDog(req.body)
      res.status(200).send("dog created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//-----------------DELETE-----------------//

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
      const dogDelete = await DeleteDog(id)
      res.status(200).send("dog removed successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
  
});

//-----------------PUT-----------------//

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await UpdateDog(id, req.body)
    res.status(201).send("Update realizado");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
