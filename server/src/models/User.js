const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
	if (!user.changed('password')) return

	return bcrypt
		.hashAsync(user.password, null, null)
		.then(hash => user.setDataValue('password', hash))
}

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: DataTypes.STRING
	},
	{
		hooks: {
			beforeUpdate: hashPassword,
			beforeSave: hashPassword,
		}
	})

	User.prototype.comparePassword = function (password) {
		return bcrypt.compareSync(password, this.password)
	}

	return User
}
