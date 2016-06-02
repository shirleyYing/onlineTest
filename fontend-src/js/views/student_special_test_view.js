require('../vender/bootstrap.min.js');

var question_bank_tmpl = require('../../tmpl/student_question_bank.html');

var QuestionBankCollection = require('../collections/student_question_bank_collection.js');
var StudentSpeacialTestView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: question_bank_tmpl,
    collection: QuestionBankCollection,
    events: {
        'click .showModal': 'showModal',
    },
    initialize: function() {
        var self = this;
        this.collection = new QuestionBankCollection();
        this.collection.fetch({
            reset: true,
            success: function() {
                self.render();
                self.$form = this.$('.modify-question');

            }
        });
    },
    render: function() {
        this.collection.each(function(item) {
            this.$el.append(this.template(item.toJSON()));
        }, this);
        return this;
    },
    showModal:function(event){
        var knowledgePoint = $(event.target).html();

        var $inputs =this.$form.find('input'); 
        $.each($inputs, function(index, item) {
            $(item).val('');
        });
        $('#optionsModal').modal('show');



    }
});

module.exports = StudentSpeacialTestView;