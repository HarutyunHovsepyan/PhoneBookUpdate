const { Phonebook } = require("../model/model")
const Sequelize = require("sequelize");
const { text } = require("express");
const Op = Sequelize.Op;

class AllController {

    static async addPhone(req, res) {
        const createPhoneNumber = await Phonebook.create({
            ...req.body
        })
        res.send({ createPhoneNumber: createPhoneNumber })
    }

    static async allPhones(req, res) {
        const allPhoneNumber = await Phonebook.findAll({})
        res.send({ phones: allPhoneNumber })
    }

    static async getPhone(req, res) {
        const phones = await Phonebook.findOne({ where: { id: req.params.id } })
        res.send({ phones })
    }

    static async delPhone(req, res) {
        Phonebook.destroy({
            where: { id: req.params.id }
        })
        const phones = await Phonebook.findAll({})
        res.send({ phones: phones })
    }

    static async editPhones(req, res) {
        const phones = await Phonebook.update({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber
        },
            { where: { id: req.params.id } }
        )
        res.send({ phones: phones })

    }

    static async findPhone(req, res) {
        const phones = await Phonebook.findAll({
            where: {
                name: { [Op.like]: `%${req.body.text}%` }
            }
        });
        res.send({ phones })
    }
}
module.exports = { AllController }