var StudentPaperModel = require('../models/paper_student.js');
var dateformat = require('../vender/dateformat.js');
var StudentPaperCollection = Backbone.Collection.extend({
    model: StudentPaperModel,
    url:"/getStudentPaperList",

    parse:function(models){
        for(index in models){
            models[index].end_time = dateformat.dateFormat(models[index].end_time);
        }
        return models;
    }
});

module.exports = StudentPaperCollection;