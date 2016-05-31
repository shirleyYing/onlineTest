
var student_socre_tmpl = require('../../tmpl/student_socre.html');
var filter_tmpl = require('../../tmpl/filter.html');
var QuestionBankCollection = require('../collections/student_question_bank_collection.js');
var StudentSpeacialTestView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: student_socre_tmpl,
    collection: QuestionBankCollection,
    initialize: function() {
        var query_score = [{
            paper_name: "c语言程序设计",
            score: 100,
            paper_type: '自主练习',
            complete_time: "2016-5-3",
            paper_id: 1
        }, {
            paper_name: "c++程序设计",
            score: 100,
            paper_type: '自主练习',
            complete_time: "2016-5-3",
            paper_id: 12
        }, {
            paper_name: "高等数学",
            score: 100,
            paper_type: '自主练习',
            complete_time: "2016-5-3",
            paper_id: 14
        }];
        this.collection = new QuestionBankCollection(query_score);
        this.render();
    },
    render: function() {
        this.collection.each(function(item) {
            this.$el.append(this.template(item.toJSON()));
        }, this);
        return this;
    }


});

module.exports = StudentSpeacialTestView;