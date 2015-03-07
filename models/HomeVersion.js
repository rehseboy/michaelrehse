var keystone = require('keystone'),
    _ = require('underscore'),
    Types = keystone.Field.Types;

var HomeVersion = new keystone.List('HomeVersion', {
  autokey: {path:'version', from: 'version', unique: true}
});

keystone.list('Gallery').model.findOne({name: 'Headshots'}).exec(function(err, gallery){
    var opt = [];
    for(var i = 0; i < gallery.images.length; ++i) {
      opt += gallery.images[i].url;
    };
    HomeVersion.add({
      heroImage: { type: Types.Select, options: opt},
      bio: { type: String }
    });

  HomeVersion.register();
});

