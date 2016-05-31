require('imports?this=>window!./../vender/bootstrap-table.js');

// var QuestionCollection = require('./../collections/question_in_paper_collection.js');
var teacher_question_list2_tmpl = require('../../tmpl/teacher_question_list2.html');
var TeacherPaperAddQuestionView = Backbone.View.extend({
    className: 'questions',
    template: teacher_question_list2_tmpl,
    initialize: function(isNew, data) {
        if (isNew) {
            this.questionData = data;
            this.checkedQuestion = [];
        } else {
            // 有问题，questionData 是试题数据源 checked 是选择的数据源
            this.questionData = data;
            this.checkedQuestion = data;
        }
        this.render();
        this.$table = this.$('#table');
        this.$table.bootstrapTable();
        this.$inputs = this.$('input[type=checkBox]');

    },
    events: {
        'click .checkAll': 'getAllData',
        'click .checkOne': 'getCheckedData'
    },
    render: function() {
        var data = {
            questionData: this.questionData
        };
        this.$el.append(this.template(data));
        return this;
    },
    getCheckedData: function(event) {
        var $check = $(event.target);
        var index, data;
        var isCheck = $check.attr('checked');
        if (isCheck) {
            $check.attr('checked', false);
            index = $check.data('id');
            data = this.questionData[index];

            this.checkedQuestion.splice($.inArray(data, this.checkedQuestion), 1);

        } else {
            $check.attr('checked', true);
            index = $check.data('id');
            data = this.questionData[index];

            this.checkedQuestion.push(this.questionData[index]);
        }
        this.trigger('passQuestion', this.checkedQuestion);
    },
    getAllData: function(event) {
        var $check = $(event.target);

        var self = this;
        var isCheck = $check.attr('checked');

        if (isCheck) {
            $check.attr('checked', false);
            $.each(self.$inputs, function(index, item) {
                $(item).attr('checked', false);
                if (index != 0) {
                    var data = self.questionData[index - 1];
                    self.checkedQuestion.splice($.inArray(data, self.checkedQuestion), 1);
                }
            });
        } else {
            $check.attr('checked', true);
            $.each(self.$inputs, function(index, item) {
                $(item).attr('checked', true);
                if (index != 0) {
                    self.checkedQuestion.push(self.questionData[index - 1]);
                }
            });
        }
        this.trigger('passQuestion', this.checkedQuestion);

    }


});
module.exports = TeacherPaperAddQuestionView;