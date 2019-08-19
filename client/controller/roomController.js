const db = require('../models');

module.exports = {
    create: function (req, res) {

        let roomId;

        db.Room.create(req.body)
            .then(room => {
                roomId = room._id;
                const imageArray = [];
                req.body.urls.forEach(url => {
                    imageArray.push({ url: url });
                });
                return db.Image.create(imageArray);
            })
            .then(images => {
                const ids = [];
                images.forEach(image => ids.push(image._id));
                db.Room.findOneAndUpdate(
                    { _id: roomId },
                    { $push: { images: { $each: ids } } },
                    { new: true })
                    .populate("user")
                    .populate("images")
                    .then(room => {
                        res.json(room);
                    });
            })
            .catch(err => res.status(422).json(err));

    },
    getAll: function (_req, res) {
        db.Room.find().populate("user")
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    getSome: function (req, res) {

        var query = {};

        if (req.query.gender) query.gender = req.query.gender;

        if (req.query.dogAllergy === "true") query.dogAllergy = false;

        if (req.query.catAllergy === "true") query.catAllergy = false;

        if (req.query.otherAllergy === "true") query.otherAllergy = false;


        if (req.query.location) {

            const arr = [];

            const locationWords = req.query.location.split(new RegExp(" |,"));

            locationWords.forEach(word => {
                arr.push({ address: { $regex: `${word}`, $options: 'i' } });
                arr.push({ city: { $regex: `${word}`, $options: 'i' } });
                arr.push({ state: { $regex: `${word}`, $options: 'i' } });
                arr.push({ zip: { $regex: `${word}`, $options: 'i' } });
            });


            query["$or"] = arr;
        }

        db.Room.find(query).populate("user").populate("images")
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    deleteAll: function (_req, res) {
        db.Room.deleteMany({})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};