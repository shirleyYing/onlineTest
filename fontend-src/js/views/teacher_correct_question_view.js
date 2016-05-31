
var teacher_correct_question_tmpl = require('../../tmpl/teacher_correct_question.html');
var TeacherCorrectQuestionView = Backbone.View.extend({
    className:'correct-question-list',
    template: teacher_correct_question_tmpl,
    initialize: function(data) {

        this.render({correctQuestion:data[0]});
    },
    render: function(data) {
        this.$el.html(this.template(data));
        return this;
    }
});
module.exports = TeacherCorrectQuestionView;