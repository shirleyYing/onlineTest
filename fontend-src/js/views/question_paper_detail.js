
var QuestionPaperDetail = require('../models/question_paper_detail.js');
var question_paper_detail_tmpl = require('../../tmpl/question_paper_detail.html');
var QuestionDoneItemView = require('./question_done_item.js');

var QuestionPaperDetailView = Backbone.View.extend({
    className: 'score_info',
    template: question_paper_detail_tmpl,

    initialize: function(initialData) {
        this.model = new QuestionPaperDetail(initialData);

        this.render();
        this.$question_detail = this.$('.question_detail');
        this.detailView = null;
        // this.data= initialData;
        // console.log(JSON.stringfy(initialData));

    },
    events:{
        'click .btn':"showQuestion"
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    showQuestion:function(event){
        var index = parseInt(event.target.innerHTML) -1;
        var question_detail = this.model.get('questions')[index];
        if(this.detailView){
            this.detailView.remove();
            this.detailView =null;
        }
        this.detailView = new QuestionDoneItemView(question_detail);
        this.$question_detail.append(this.detailView.$el);
        this.$el.append(this.$question_detail);
        console.log(question_detail);


    }


});
module.exports = QuestionPaperDetailView;