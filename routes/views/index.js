var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

  view.query('headshot', keystone.list('Gallery').model.findOne({name:'Headshots'}));
	
	// Render the view
	view.render('index');
	
};
