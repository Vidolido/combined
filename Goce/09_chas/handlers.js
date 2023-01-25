const e = require('express');
const util = require('./utils.js');

const DATA_SOURCE = "./data.txt"; // simulirame baza

const addStudent = async (req,res) => {
    try{
        
        // ja vchitame sodrzinata na fajlot
        let dataRaw = await util.fileRead(DATA_SOURCE);
    
        // proverka dali postojat podatici vo fajlot
        let data = null;
        data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];
    
        // if(dataRaw.length > 0) {
        //     JSON.parse(dataRaw);
        // } else {
        //     data = [];
        // }
        
        // go dodavame noviot zapis kako chlen vo nizata
        data.push(req.body);
    
        await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
        res.send("ok");
    } catch(err) {
        res.send(err);
    }
};


const getAllStudents = async (req, res) => {
    try {
        let data = await util.fileRead(DATA_SOURCE);
    
        if(data.length > 0) {
            res.send(JSON.parse(data))
        } else {
            res.send("Nema Studenti");
        }

    } catch(err) {

    }
}

const getStudentById = async (req, res) => {
    try{
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);

        if(data[req.params.id]) {
            res.send(data[req.params.id]);
        } else {
            res.send("nema takov student");
        }
    } catch(err) {
        res.send(err);
    }
}

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById
}