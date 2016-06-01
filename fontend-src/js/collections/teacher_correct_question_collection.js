var TeacherCorrectQuestionModel = require('../models/teacher_correct_question_model.js');

var TeacherCorrectQuestionCollection = Backbone.Collection.extend({
    model: TeacherCorrectQuestionModel
   
});

module.exports = TeacherCorrectQuestionCollection;