const express = require('express')
const router = new express.Router()
const Dashboard = require('../models/admin')
const RegDocument = require('../models/regulations.js')
const auth = require('../middleware/auth')
const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir('./uploads/',(err)=>{
        cb(null, './uploads/')
        })
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    },
})

const fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(pdf)/)) {
        return cb(new Error('File must be in pdf format!'))
    }

    cb(undefined, true)
}

const upload = multer({storage: storage, fileFilter: fileFilter})

//Dashboard functions
router.post('/regDocuments', auth(Dashboard), upload.single('file'), async (req, res) => {
    const file = req.file
    
    const filePath = file.path

    if(!filePath) {
        return res.status(400).send()
    }
    const regDocument = new RegDocument({
        link: filePath
    })
    try {
        await regDocument.save()
        res.status(201).send(regDocument)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/regDocuments/:id', auth(Dashboard), async (req, res) => {
    const _id = req.params.id
    try {
        const regDocument = await RegDocument.findOneAndDelete({_id})
        if (!regDocument) {
            return res.status(404).send()
        }
        res.send(regDocument)
    } catch (e) {
        res.status(500).send()
    }
})

//get all regDocuments to show them to visitors
router.get('/regDocuments', auth(Dashboard), async (req, res) => {
    try {
        const regDocuments = await RegDocument.find({})
        if (!regDocuments) {
            return res.status(404).send()
        }
        res.send(regDocuments)
    }catch (e) {
        res.status(500).send()
    }
})

router.get('/regDocuments/last', async (req, res) => {
    try {
        const regDocument = await RegDocument.find({}).sort({_id:-1}).limit(1)
        if (!regDocument) {
            return res.status(404).send()
        }
        res.send(regDocument)
    }catch (e) {
        res.status(500).send()
    }
})

module.exports = router