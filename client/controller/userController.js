const db = require('../models');

module.exports = {
	create: function (req, res) {
		db.User.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	getAll: function (req, res) {
		db.User.find()
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	},
	deleteAll: function (req, res) {
		db.User.deleteMany({})
			.then(data => res.json(data))
			.catch(err => res.status(422).json(err));
	}
}