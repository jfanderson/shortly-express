var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(/* need user input password */, salt); // TODO: pass in password
      model.set('password', hash);
    });
  }
});

module.exports = User;