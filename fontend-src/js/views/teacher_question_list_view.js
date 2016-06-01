require('../vender/bootstrap.min.js');
var teacher_question_list_tmpl = require('../../tmpl/teacher_question_list.html');
var TeacherQuestionItemView = require('./teacher_question_item_view.js');
var TeacherQuestionCollection = require('./../collections/teacher_question_collection.js');

var TeacherQuestion = require('./../models/teacher_question.js');

var TeacherQuestionListView = Backbone.View.extend({
    className: 'col-md-9',
    template: teacher_question_list_tmpl,
    initialize: function(data) {
        this.collection = new TeacherQuestionCollection(data);
        this.filteredCollection = this.collection;
        this.render();
        this.$form = this.$('.modify-question');
        this.on('filter', this.filterCollection);
    },
    events: {
        'click .save': 'saveQuestion',
        'click .add-question': 'addQuestion',
        'click .close-modal':'closeModal'
    },
    render: function() {
        this.$el.html(this.template());
        var $tbody = this.$('tbody');
        this.filteredCollection.each(function(item) {
            var itemView = new TeacherQuestionItemView({
                model: item
            });
            $tbody.append(itemView.$el);
        });
        return this;
    },
    filterCollection: function(param) {
        this.filteredCollection = new TeacherQuestionCollection(this.collection.fliterModel(param));
        this.render();
    },
    closeModal:function(){
        $('#questionModal').modal('hide');
        this.clearForm();
    },
    saveQuestion: function() {
        var data = {};
        $.each(this.$form.serializeArray(), function(index, item) {
            data[item.name] = item.value;
        });
        data.id = parseInt(data.id);
        var now = new Date();
        data.upload_time = this.dateFormat(now);
        var model = null;
        if (this.collection.get(data.id)) {
            model = this.collection.get(data.id);
            model.trigger('save', data);
        } else {
            data.id = this.collection.length;
            model = new TeacherQuestion(data);
            var itemView = new TeacherQuestionItemView({
                model: model
            });
            var $tbody = this.$('tbody');
            $tbody.prepend(itemView.$el);
        }
        this.closeModal();
        
    },
    clearForm:function(){
        var $inputs =this.$form.find('input'); 
        $.each($inputs, function(index, item) {
            $(item).val('');
        });
    },
    addQuestion: function() {
        this.closeModal();

        $('#questionModal').modal('show');
    },
    dateFormat: function(date) {
        var year = date.getFullYear(); //获取年
        var month = date.getMonth() + 1; //获取月
        var day = date.getDate(); //获取日
        var str = year + '-' + month + '-' + day;
        return str;
    }
});
module.exports = TeacherQuestionListView;