const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Dashboard = require('../models/admin')
const Debtor = require('../models/debtor')

router.post('/debtor', auth(Dashboard), async (req, res) => {
    const debtor = new Debtor({
        ...req.body
    })

    try {
        await debtor.save()
        res.status(200).send(debtor)
        
    } catch (e) {
        res.status(400).send(e)
    }
})
// get By Id service
router.get('/debtor/:id',auth(Dashboard), async (req, res) => {
    const _id = req.params.id
    try {
        const debtor = await Debtor.findOne({ _id}).populate({path: 'owner', model: 'Employee'})
        if (!debtor) {
            return res.status(404).send()
        }
        res.send(debtor)
    }catch (e) {
        res.status(500).send()
    }
})
// Id service
router.get('/debtorPaid', auth(Dashboard), async (req,res) => {
    try {
        const debtor = await Debtor.find({remain: 0}).populate({path: 'owner', model: 'Employee'})
        res.send(debtor)
    } catch (e) {
        res.status(500).send()
    }
})
// Id service
router.get('/debtorUnpaid', auth(Dashboard), async(req,res) => {
    try {
        const debtor = await Debtor.find({remain: {$gt:0}}).populate({path: 'owner', model: 'Employee'})
        res.send(debtor)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/debtor/remain/:id', auth(Dashboard), async(req,res) => {
    const _id = req.params.id
    try {
        const debtor = await Debtor.findOne({ _id}).populate({path: 'owner', model: 'Employee'})
        debtor.remain = req.body.remain
        await debtor.save()
        res.status(200).send(debtor)
    } catch (e) {
        res.status(500).send()
    }   
})

module.exports = router