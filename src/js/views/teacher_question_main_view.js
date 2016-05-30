var teacher_course_tmpl = require('../../tmpl/teacher_course.html');
var teacher_question_list_tmpl = require('../../tmpl/teacher_question_list.html');

var TeacherQuestionListView = require('./teacher_question_list_view.js');

var TeacherQuestionMainView = Backbone.View.extend({
    className: 'questions',
    templateCourse: teacher_course_tmpl,
    initialize: function(data) {
        this.data = data;
        this.render();
    },
    events: {
        'click li ': 'filterQuestion',
        
    },
    render: function() {
        this.renderCourse();
        this.renderQuestionList();
        return this;
    },
   
    renderQuestionList: function() {
        this.teacherQuestionListView = new TeacherQuestionListView(this.data.questions);
        this.$el.append(this.teacherQuestionListView.$el);
    },
    renderCourse: function() {
        var data = {
            courses: this.data.courses
        };
        this.$el.append(this.templateCourse(data));
    },
    filterQuestion: function(events) {
        var $course = $(event.target);
        var course=$course.find('.todo-name').html();
        this.teacherQuestionListView.trigger('filter',course);
    }


});
module.exports = TeacherQuestionMainView;