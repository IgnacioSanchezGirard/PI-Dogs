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
            temperament: e.temperament?e.temperament.split(", "):"",
            image: e.image.url
        }})

        // const newDataBase = await Dog.bulkCreate(apiInfo)
        // return newDataBase;
        return apiInfo;

}

// const getAll = async () => {
//     return await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${ API_KEY }`)
//     .then((res) => {
//         return res.data.map( e => { return {
//             id: e.id,
//             name: e.name,
//             height: e.height.metric,
//             weight: e.weight.metric,
//             years: e.life_span,
//             temperament: e.temperament?e.temperament.split(", "):"",
//             image: e.image.url
//         }})
//     })
//     .catch((error) => console.log(error))
// }

module.exports = getAll ;