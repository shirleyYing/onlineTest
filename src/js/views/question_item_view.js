var QuestionInPaper = require('./../models/question_paper.js');
var question_tmpl = require('../../tmpl/student_question_item.html');
var QuestionItemView = Backbone.View.extend({
    className: 'item',
    template: question_tmpl,
    initialize: function() {
        this.render();
        this.listenTo(this, 'submit', this.submit);
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    submit:function(){
        console.log(this.$('form').serialize());
    }

});
module.exports = QuestionItemView;