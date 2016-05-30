var TeacherQuestion = require('../models/teacher_question.js');

var TeacherQuestionCollection = Backbone.Collection.extend({
    model: TeacherQuestion,
    
    fliterModel:function(param){
        return this.where({
            knowledge_point: param
        });
    }

});

module.exports = TeacherQuestionCollection;