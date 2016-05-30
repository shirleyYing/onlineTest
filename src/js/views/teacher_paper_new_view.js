require('imports?this=>window!./../vender/flat-ui.min.js');
require('imports?this=>window!./../vender/application.js');
require('imports?this=>window!./../vender/moment.min.js');
require('../vender/daterangepicker.js');

// var TeacherPaperListView = require('./teacher_paper_list_view.js');

var teacher_new_paper_tmpl = require('../../tmpl/teacher_paper_new.html');
var teacher_set_core_form_tmpl = require('../../tmpl/teacher_set_core_form.html');
var teacher_paper_preview_tmpl = require('../../tmpl/teacher_paper_preview.html');
var TeacherPaperAddQuestionView = require('./teacher_paper_add_question_view.js');
var TeacherPaperAddQuestionView = require('./teacher_paper_add_question_view.js');
var TeacherQuestionListView = require('./teacher_question_list_view.js');

var TeacherPaperNewView = Backbone.View.extend({
    className: 'new-paper',
    template: teacher_new_paper_tmpl,
    templateSetCore: teacher_set_core_form_tmpl,
    templatePreview: teacher_paper_preview_tmpl,

    initialize: function(data) {
        if (data instanceof Array) {
            this.questionData = data;
        } else if (data instanceof Object) {
            this.questionData = data.questions;
            this.paperInfo = data.paper_info;
        }
        this.paperQuestionData = null; //选择的题目数据
        this.addQuestionview = null;
        this.render();
        this.$dateDOM = this.$('#reservationtime');
        this.initDatePlugin();
        this.$basicInfoForm = this.$('.basic_info');
        this.$addQuestionToPaper = this.$('#addQuestionToPaper');
        this.$setScore = this.$('#setScore');
        this.$choicedQuestion = this.$("#choicedQuestion");
        this.$paperPreview = this.$('#paperPreview');
        this.initPaperInfo();

    },
    events: {
        'click  .add-question': 'addQuestionToPaper',
        'click  .set-score': 'setScore',
        'click  .paper-preview': 'setPreview',
        'click  .choiced-question': 'choicedQuestion'
    },
    render: function() {
        this.$el.append(this.template());
        return this;
    },
    initDatePlugin: function() {
        this.$dateDOM.daterangepicker({
            timePicker: false,
            timePickerIncrement: 30,
            format: 'YYYY-MM-DD'
        }, function(start, end) {
            console.log(start.toISOString(), end.toISOString());
        });
    },
    initPaperInfo: function() {
        var self = this;
        /*        $.each(self.paperInfo,function(index,item){
                     $form.find('input[name='+key+'][value='+obj[key]+']').attr('checked',true);
                });
        */
        for (key in this.paperInfo) {
            this.$basicInfoForm.find('input[name=' + key + ']').val(this.paperInfo[key]);
        }
    },
    addQuestionToPaper: function() {
        this.addQuestionview = new TeacherPaperAddQuestionView(true,this.questionData);
        this.$addQuestionToPaper.append(this.addQuestionview.$el);
        this.listenTo(this.addQuestionview, 'passQuestion', this.getQuestionData);
    },
    getQuestionData: function(data) {
        this.paperQuestionData = data;
    },
    setScore: function() {
        console.log("1");
        var self = this;
        var obj = {}; //{duoxuan:2,danxuan:3,tiankong:1} 类型数量对应
        var type_score = {}; //类型分值对应
        var question_type = {};
        $.each(self.paperQuestionData, function(index, item) {
            if (item.question_type in question_type) {

                obj[item.question_type]++;
            } else {
                question_type[item.question_type] = 0;
                obj[item.question_type] = 1;
            }
        });
        var data = [];
        // [{question_name:"",number:}]
        for (key in obj) {
            var tmp = {};
            tmp.question_type = key;
            tmp.number = obj[key];
            data.push(tmp);
        }
        this.$setScore.html("").append(this.templateSetCore({
            data: data
        }));
        $('.calculate').click(function() {
            var $scoreForm = self.$('.set-score-form');
            var $totalScore = self.$('.total_score');
            var totalScore = 0;
            var inputData = $scoreForm.serializeArray(); // [{name:duoxuan,value:2},{}]
            $.each(inputData, function(index, item) {
                var $singleTypeScore = self.$('.' + item.name);
                var number = obj[item.name] * item.value;
                type_score[item.name] = item.value;
                $singleTypeScore.html(number);
                totalScore = totalScore + number;
            });
            $totalScore.append(totalScore);
            $.each(self.paperQuestionData, function(index, item) {
                item.question_score = type_score[item.question_type];
            });
        });
    },
    setPreview: function() {
        var paperBasicInfo = this.$basicInfoForm.serializeArray();
        var data = {};
        data.paper_name = paperBasicInfo[0].value;
        data.total_score = paperBasicInfo[paperBasicInfo.length - 1].value;
        data.questions = this.paperQuestionData;
        if (this.paperQuestionData) {
            this.$paperPreview.html('').append(this.templatePreview(data));
        }
    },
    choicedQuestion: function() {
        var view = new TeacherQuestionListView(this.paperQuestionData);
        console.log(view.$el);
        this.$choicedQuestion.html("").append(view.$el);
    }
});
module.exports = TeacherPaperNewView;