const { Op } = require("sequelize");
const { Dog, Temper } = require("../db");
const getAll = require("./Dogs");

//-----------------GET-----------------//

const GetDogs = async (name) => {
  // let getDogsApi = await getAll();
  // let getDogsDb = await Dog.findAll();
  // // let conca = getDogsApi.concat(getDogsDb);
  // console.log(getDogsApi);
  // if (name) {
  //   const rejex = new RegExp('('+ name +')', 'gi');
  //   // conca = conca
  //   getDogsApi = getDogsApi.filter(e => e.name.match(rejex))
  // }
  // return getDogsApi.concat(getDogsDb);
  // // return conca

  let getDogsApi = await getAll();
  let getDogsDb = await Dog.findAll();
  if (name) {
    const rejex = new RegExp('('+ name +')', 'gi');
    getDogsApi = getDogsApi.filter(e => e.name.match(rejex))
    getDogsDb = await Dog.findAll({
      where: {
        name: {[Op.iLike] : `%${name}%`}  
      }
    })
  }
  return getDogsApi.concat(getDogsDb);
};

//-----------------GET: ID-----------------//

const GetId = async (id) => {
        const dogId = await getAll()
        //     {
        //   include: Temper,
        // })
        const findDog = dogId.find(el => el.id === parseInt(id))
        if(!findDog) {
            throw new Error (`Dog whith id ${id} not found`)
        }
        return findDog;
    }


//-----------------POST-----------------//

const PostDog = async (body) => {
  // let id = 1
  // const dataApi = await getAll()
  // const idsApi = [...dataApi].map(dog => dog.id)
  // const uniqID = [...new Set(idsApi)]
  // let idExist = []
  // while(idExist){
  //   idExist = uniqID.includes(id)
  //   id++
  //   idsApi.push(id)
  // };
    const {
        name,
        image,
        min_height,
        max_height,
        min_weight,
        max_weight,
        years,
        temperament,
      } = body;
        const height = min_height + " - " + max_height;
        const weight = min_weight + " - " + max_weight;
        const dogCreate = await Dog.create({
          // id,
          name,
          image,
          height,
          weight,
          years,
          temperament,
        });
        let temperDb = await Temper.findAll({
          where: { name: temperament },
        });
        dogCreate.addTemper(temperDb);
}

//-----------------DELETE-----------------//

const DeleteDog = async (id) => {
    const dogDelete = await Dog.findByPk(id)
      if (dogDelete) {
      dogDelete.destroy();
      } else {
        throw new Error(`Dog whith id ${id} not found`)
      }
};

//-----------------PUT-----------------//

const UpdateDog = async (id, body) => {
    const {
      name,
      image,
      min_height,
      max_height,
      min_weight,
      max_weight,
      years,
      temperament,
    } = body;
    if(id) {
    const height = min_height + " - " + max_height;
    const weight = min_weight + " - " + max_weight;
    const dogUpdate = await Dog.update(
      {
        name,
        image,
        height,
        weight,
        years,
        temperament,
      },
      {
        where: {
          id,
        },
      }
    );
    return dogUpdate;
   } else {
    console.log(body, id)

    throw new Error(`Dog whith id ${id} not found`)
   }
  
  };

module.exports = {
  GetDogs,
  GetId,
  PostDog,
  DeleteDog,
  UpdateDog
};
