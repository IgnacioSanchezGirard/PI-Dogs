const axios = require("axios")
// const { Dog } = require("../db")
const { API_KEY } = process.env;

const getAll = async () => {
        const dogsAll = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${ API_KEY }`);
        let apiInfo = dogsAll.data.map( e => { return {
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            years: e.life_span,
            temperament: e.temperament,
            image: e.image.url
        }})

        // const newDataBase = await Dog.bulkCreate(apiInfo)
        // return newDataBase;
        return apiInfo;

}

module.exports = getAll ;