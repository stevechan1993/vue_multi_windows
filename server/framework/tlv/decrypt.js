// eslint-disable-next-line require-jsdoc
function decrypt(data) {
	var hex  = data.toString().slice(12, -8);
	console.log(hex)
	var ascii = '';
	for (var n = 0; n < hex.length; n += 2) {
		ascii += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return ascii;
}

// console.log(decrypt('4e66001721037b22726f626f74223a312c22737461747573223a307d3f6e5dbc'))
module.exports = {decrypt};
