var Base = require('./base.js');
var base = new Base();

var User = function() {
    this.getUserPassword = function(name) {
        var sql = 'select password from [user] where user_id = '+name;
        return base._query(sql);
    };
};
module.exports = User;