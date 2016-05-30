var teacher_course_tmpl = require('../../tmpl/teacher_course.html');
var teacher_paper_list_tmpl = require('../../tmpl/teacher_paper_list.html');

var TeacherPaperListView = require('./teacher_paper_list_view.js');

var TeacherPaperMainView = Backbone.View.extend({
    className: 'papers',
    templateCourse: teacher_course_tmpl,
    initialize: function(data) {
        this.data = data;
        this.render();
    },
    events: {
        'click .todo li': 'filterPaper',
    },
    render: function() {
        this.renderCourse();
        this.renderPaperList();
        return this;
    },
    renderPaperList: function() {
        this.teacherPaperListView = new TeacherPaperListView(this.data.papers);
        this.$el.append(this.teacherPaperListView.$el);
    },
    renderCourse: function() {
        var data = {
            courses: this.data.courses
        };
        this.$el.append(this.templateCourse(data));
    },
    filterPaper: function(events) {
        var course = event.target.innerHTML;
        console.log(course);
        this.teacherPaperListView.trigger('filter',course);
    }


});
module.exports = TeacherPaperMainView;