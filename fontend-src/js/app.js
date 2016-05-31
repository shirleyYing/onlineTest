

var app = app || {};

var href = location.href;
var match = href.match("student");

if(match){
    var Router = require('./router/router_student.js');
}else{
    var Router = require('./router/router_teacher.js');
}
var $el = $('.container');
app.router = new Router($el);
Backbone.history.start();