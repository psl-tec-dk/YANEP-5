const axios = require("axios");

const DBURL = "http://localhost:3000/subscribers"

const getAll = async (req, res) => {
    const response = await axios.get(DBURL)
    return response.data;
}

module.exports = { getAll };