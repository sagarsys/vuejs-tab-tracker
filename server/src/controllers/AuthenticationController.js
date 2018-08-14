const { User } = require('../models');

module.exports = {
	async register(req, res) {
		try {
			const user = await User.create(req.body);
			res.send(user.toJSON());
		}
		catch ( e ) {
			res.status(400).send({
				error: 'This email account is already in use.'
			})
		}
	},
	async login(req, res) {
		try {
			const {email, password} = req.body;

			const user = await User.findOne({
				where: { email: email }
			});
			if (!user) {
				return res.status(403).send({
					error: 'Invalid email or password'
				})
			}

			const isPassValid = password === user.password
			if (!isPassValid) {
				return res.status(403).send({
					error: 'Invalid email or password'
				})
			}

			res.send({
				user: user.toJSON()
			})

		} catch (e) {
			res.status(500).send({
				error: 'An unexpected error occurred.'
			})
		}
	}
};
