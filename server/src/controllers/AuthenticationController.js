const { User } = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const jwtSignUser = (user) => {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	async register(req, res) {
		try {
			const user = await User.create(req.body)
			res.send(user.toJSON())
		}
		catch ( e ) {
			console.log(e)
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
			})
			if (!user) {
				return res.status(403).send({
					error: 'Invalid email or password'
				})
			}

			const isPassValid = await user.comparePassword(password)
			console.log(isPassValid)
			if (!isPassValid) {
				return res.status(403).send({
					error: 'Invalid email or password'
				})
			}

			const userJson = user.toJSON()
			res.send({
				user: userJson,
				token: jwtSignUser(userJson)
			})

		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: 'An unexpected error occurred.'
			})
		}
	}
};
