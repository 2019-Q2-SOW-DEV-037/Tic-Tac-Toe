var path = require('path');

module.exports = {
	mode: 'production',
	devServer:{
		contentBase: path.join(__dirname,'dist'),
		compress: true,
		port: 8080
	}
};