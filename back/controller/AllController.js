const { Phonebook } = require("../model/model")
const Sequelize = require("sequelize");
const { text } = require("express");
const Op = Sequelize.Op;

class AllController {

    static async addPhone(req, res) {
        const createPhoneNumber = await Phonebook.create({
            ...req.body.payload
        })
        res.send({ createPhoneNumber: req.body.data })
    }

    static async allPhones(req, res) {
        const allPhoneNumber = await Phonebook.findAll({})
        res.send({ phones: allPhoneNumber })
    }

    static async getPhone(req, res) {
        const phones = await Phonebook.findOne({ where: { id: req.params.id } })
        res.send({ phones: phones })
    }

    static async delPhone(req, res) {
        const phone = await Phonebook.destroy({
            where: { id: req.params.id }
        })
        res.send({ phone: phone })
    }

    static async editPhone(req, res) {
        // const phones = await Phonebook.update({
        //     name: req.body.name,
        //     phoneNumber: req.body.phoneNumber
        // },
        //     { where: { dataId: req.params.id } }
        // )
        console.log('ok')
    }

    static async findPhone(req, res) {
        let searchText = Object.keys(req.body)[0]
        const phones = await Phonebook.findAll({
            where: {
                name: { [Op.like]: searchText }
            }
        });
        res.send({ phones: phones })
    }
}
module.exports = { AllController }