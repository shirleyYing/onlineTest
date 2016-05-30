var StudentPaperModel = require('../models/paper_student.js');

var StudentPaperCollection = Backbone.Collection.extend({
    model: StudentPaperModel,

    /*parse:function(models,options){

    }*/
});

module.exports = StudentPaperCollection;