var express = require('express');
var router = express.Router();
var fs = require('fs');
var demoInfo = {
	contact_info: {
		FirstName: 'Lý Chấn',
		LastName: 'Kiệt',
		Email: 'kietlyc@harveynash.vn',
		Phone: '0933.299.615',
		Website: 'http://slither.io/',
		Address: '280 An Dương Vương Quận 5, TPHCM',
	},
	experiences: [
		{
			Company: 'FPT Software.',
			Designation: 'Software Engineer',
			FromDate: '1/10/2016',
			ToDate: '1/10/2018',
			Details: 'I am an outgoing and energetic (ask anybody) young professional,' +
			'seeking a career that fits my professional skills, personality, and' +
			'murderous tendencies. My squid-like head is a masterful problem' +
			'solver and inspires fear in who gaze upon it. I can bring world' +
			'domination to your organization.'
		},
		{
			Company: 'Global CyberSoft.',
			Designation: 'Technical Architect',
			FromDate: '01/01/2018',
			ToDate: '10/1/2020',
			Details: 'I am an outgoing and energetic (ask anybody) young professional,' +
			'seeking a career that fits my professional skills, personality, and' +
			'murderous tendencies. My squid-like head is a masterful problem' +
			'solver and inspires fear in who gaze upon it. I can bring world' +
			'domination to your organization.'
		},
		{
			Company: 'Harveynash',
			Designation: 'Project Manager',
			FromDate: '01/01/2020',
			ToDate: '01/01/9999',
			Details: 'I am an outgoing and energetic (ask anybody) young professional,' +
			'seeking a career that fits my professional skills, personality, and' +
			'murderous tendencies. My squid-like head is a masterful problem' +
			'solver and inspires fear in who gaze upon it. I can bring world' +
			'domination to your organization.'
		},
	],
	skills: [
		{
			Name: 'Office skills',
			Level: '5',
			Maturity: 'Office and records management, database administration, event organization, customer support, travel coordination',
			LastTime: 'Now',
		},
		{
			Name: 'Computer skills',
			Level: '5',
			Maturity: 'Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows',
			LastTime: 'Now',
		},
		{
			Name: 'FPS',
			Level: 'Over 9000.',
			Maturity: 'I can shoot down multiple enemy at once even without using my eyes.',
			LastTime: 'Now',
		},
	]
}

router.get('/templateReview/:name', function(req, res){
    var name = req.params.name;
	// fs.realpath(__dirname, function (err, path) {
	// 	if (err) {
	// 		console.log(err);
	// 		return;
	// 	}
	// 	console.log('Path is : ' + path);
	// });
	res.render('templates/' + name, demoInfo);
});

router.get('/templatelist/', function (req, res) {
    var files = [];
	var dir = __dirname + '/views/templates';
	fs.readdir(dir, function (err, files) {
		if (err) return;
		files.forEach(function (f) {
			var name = dir + '/' + f;
			if (fs.statSync(name).isFile()) {
                console.log('is File: ' + name);
                files.push(f);
			}
		});
	});
    res.send('done');
	//res.render('templates/templatelist', {files: files});
});


module.exports = router;