var TeacherCorrectQuestionCollection = require('../collections/teacher_correct_question_collection.js');
var teacher_correct_question_tmpl = require('../../tmpl/teacher_correct_question.html');
var TeacherCorrectQuestionView = Backbone.View.extend({
    className:'correct-question-list',
    collection:TeacherCorrectQuestionCollection,
    template: teacher_correct_question_tmpl,
    initialize: function(data) {
        this.index = 0;
        this.collection = new TeacherCorrectQuestionCollection(data);
        this.render();
    },
    events: {
        'click .end': 'submitAndEnd',
        'click .next': 'getNextSubject'
    },
    render: function() {
        this.$el.html(this.template(this.collection.at(this.index).toJSON()));
        return this;
    },
    
    submitAndEnd: function() {
        alert('完成试卷');
    },
    getNextSubject: function() {
        this.index ++;
        if (this.index <= this.collection.length) {
            this.render();
        }
    }
});
module.exports = TeacherCorrectQuestionView;