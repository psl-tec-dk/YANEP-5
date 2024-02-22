const axios = require("axios");
const { response } = require("express");

const DBURL = "http://localhost:3000/subscribers"

const getAll = async (req, res) => {
    const response = await axios.get(DBURL)
    return response.data;
};

const getByID = async (req, res) => {
    const response = await axios.get(`${DBURL}/${req.params.id}`);
    return response.data;
};

const update = async (req, res) => {
    console.log(req.body);
    const response = await axios.put(`${DBURL}/${req.params.id}`, req.body);
    return response.data;
};

const create = async (req, res) => {
    const response = await axios.post(DBURL, req.body);
    return response.data;
};

const remove = async (req, res) => {
    const response = await axios.delete(`${DBURL}/${req.params.id}`);
    return response.data;
};

module.exports = { getAll, getByID, update, create, remove };