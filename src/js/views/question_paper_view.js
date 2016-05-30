var QuestionCollection = require('./../collections/question_in_paper_collection.js');

var QuestionItemView = require('./question_item_view.js');
var question_in_paper_tmpl = require('../../tmpl/question_in_paper.html');

var QuestionPaperView = Backbone.View.extend({
    className: 'question_paper',
    template: question_in_paper_tmpl,
    events: {
        'click .end': 'submitAndEnd',
        'click .next': 'getNextSubject'
    },
    initialize: function(initialData) {
        this.collection = new QuestionCollection(initialData);
        this.index = 1;
        this.time = 3600;
        this.itemView = null;
        this.render();
        this.setTime(this.time);
        this.$progress = this.$('.progress-bar');
        this.setProgress();
    },
    render: function() {
        this.$el.html(this.template());
        this.renderItem(this.index);

        this.$hour = this.$('.hour');
        this.$min = this.$('.min');
        this.$sec = this.$('.sec');


        return this;
    },
    cleanItemView: function() {
        if (this.itemView) {
            this.itemView.remove();
            this.itemView = null;
        }
    },
    renderItem: function(index) {
        var item = this.collection.at(index - 1);
        this.cleanItemView();
        this.itemView = new QuestionItemView({
            model: item
        });
        this.$('.question').append(this.itemView.el);
    },
    setProgress: function() {
        var length = this.collection.length;
        var width = (this.index / length).toFixed(2) * 100;
        this.$progress.css({
            width: width + "%"
        });
    },
    setTime: function(number) {
        var self = this;
        var timer = null;
        timer = setTimeout(time, 1000);
        function time() {
            if (number === 0) {
                clearTimeout(timer);
                timer = null;
                self.submitAndEnd();
                return;
            }
            number--;
            var hour = Math.floor(number / 3600);
            var min = Math.floor((number - hour * 3600) / 60);
            var sec = (number - hour * 3600) % 60;
            self.$hour.html(format(hour));
            self.$min.html(format(min));
            self.$sec.html(format(sec));
            setTimeout(time, 1000);
        }

        function format(i) {
            if (i < 10) {
                return "0" + i;
            } else {
                return i.toString();
            }
        }
    },
    submitAndEnd: function() {
        this.itemView.trigger("submit");
        alert('完成试卷');

    },
    getNextSubject: function() {
        this.itemView.trigger("submit");
        if (this.index <= this.collection.length) {
            this.setProgress();
            this.renderItem(this.index);
            this.index++;
        }
    }
});
module.exports = QuestionPaperView;