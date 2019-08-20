const { isPointWithinRadius } = require('geolib');

const db = require('../models');

module.exports = {
    create: function (req, res) {

        let roomId;

        console.log("route hit\n\n\n\n\n\n\n\n");

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
                    { new: true },
                    (err, room) => {
                        if (err) throw err;
                        res.json(room);
                    }
                );
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
        //console.log(req.query)

        if (req.query.gender) query.gender = req.query.gender;

        if (req.query.dogAllergy === "true") query.dogAllergy = false;

        if (req.query.catAllergy === "true") query.catAllergy = false;

        if (req.query.otherAllergy === "true") query.otherAllergy = false;

        if (req.query.location) {
            // console.log(req.query)


            // const arr = [];

            // const locationWords = req.query.location.split(new RegExp(" |,"));

            // locationWords.forEach(word => {
            //     arr.push({ address: { $regex: `${word}`, $options: 'i' } });
            //     arr.push({ city: { $regex: `${word}`, $options: 'i' } });
            //     arr.push({ state: { $regex: `${word}`, $options: 'i' } });
            //     arr.push({ zip: { $regex: `${word}`, $options: 'i' } });
            // });


            // query["$or"] = arr;
        }

        db.Room.find(query).populate("user").populate("images")
            .then(data => {

                let filteredData = data.filter(roomPost => {
                    if (roomPost.lat && roomPost.lng) {
                        const isInRadius = isPointWithinRadius(
                            { latitude: req.query.lat, longitude: req.query.lng },
                            { latitude: roomPost.lat, longitude: roomPost.lng },
                            req.query.range * 1.6 * 1000
                        );
                        console.log(isInRadius);
                        console.log(roomPost.lat, roomPost.lng, roomPost.city);
                        return isInRadius;
                    }

                    return false;
                });
                //console.log(filteredData);
                // let filteredData = data.filter(roomPost => {
                //     const testResult = isPointWithinRadius(
                //         { latitude: req.query.lat, longitude: req.query.lng },
                //         { latitude: roomPost.lat, longitude: roomPost.lng },
                //         req.query.range
                //     );
                //     console.log(testResult);
                //     return true;
                // }
                // );
                //console.log(filteredData);
                return res.json(filteredData)
            })
            .catch(err => res.status(422).json(err))
    },
    deleteAll: function (_req, res) {
        db.Room.deleteMany({})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};