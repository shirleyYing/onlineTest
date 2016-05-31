var question_bank_tmpl = require('../../tmpl/student_question_bank.html');
var filter_tmpl = require('../../tmpl/filter.html');
var QuestionBankCollection = require('../collections/student_question_bank_collection.js');
var StudentSpeacialTestView = Backbone.View.extend({
    tagName: 'div',

    className: 'row',
    template: question_bank_tmpl,
    templateFilter:filter_tmpl,
    collection: QuestionBankCollection,
    initialize: function() {
        var data = [{
            knowledge_point: "网页设计与制作",
            sum: 100,
            types: [{
                type_name: "单选",
                count: 70
            }, {
                type_name: "多选",
                count: 30
            }]
        }, {
            knowledge_point: "c语言程序设计",
            sum: 100,
            types: [{
                type_name: "单选",
                count: 70
            }, {
                type_name: "多选",
                count: 30
            }]
        }, {
            knowledge_point: "高等数学",
            sum: 100,
            types: [{
                type_name: "单选",
                count: 70
            }, {
                type_name: "多选",
                count: 30
            }]
        }, ];
        this.collection = new QuestionBankCollection(data);
        this.render();
    },
    render: function() {
        this.collection.each(function(item) {
            this.$el.append(this.template(item.toJSON()));
        }, this);
        this.$el.append(this.templateFilter);
        return this;
    }


});

module.exports = StudentSpeacialTestView;