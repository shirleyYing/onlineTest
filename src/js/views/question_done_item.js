// var QuestionInPaper = require('./../models/question_paper.js');
var question_done_item_tmpl = require('../../tmpl/question_done_item.html');
var QuestionDoneItemView = Backbone.View.extend({
    className: 'question_done',
    template: question_done_item_tmpl,
    initialize: function(data) {
        this.render(data);
    },
    render: function(data) {
        this.$el.html(this.template(data));
        return this;
    },
});
module.exports = QuestionDoneItemView;