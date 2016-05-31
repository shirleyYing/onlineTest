

var teacher_correct_paper_list_tmpl = require('../../tmpl/teacher_correct_paper_list.html');

var TeacherCorrectPaperView = Backbone.View.extend({
    className:'correct-paper-list',
    template: teacher_correct_paper_list_tmpl,
    initialize: function(data) {

        this.render({paper:data});
    },
    render: function(data) {
        this.$el.html(this.template(data));
        return this;
    }
});
module.exports = TeacherCorrectPaperView;