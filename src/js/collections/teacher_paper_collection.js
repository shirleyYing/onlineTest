var TeacherPaperModel = require('../models/teacher_paper.js');

var TeacherPaperCollection = Backbone.Collection.extend({
    model: TeacherPaperModel,
    fliterModel:function(param){
        return this.where({
            course_name: param
        });
    }
});

module.exports = TeacherPaperCollection;