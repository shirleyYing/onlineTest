var mockData = require('./../../../mock/mock.js');
var TeacherQuestionMainView = require('./../views/teacher_question_main_view.js');
var TeacherPaperMainView = require('./../views/teacher_paper_main_view.js');
var TeacherPaperNewView = require('./../views/teacher_paper_new_view.js');
var TeacherCorrectPaperView = require('./../views/teacher_correct_paper_view.js');
var TeacherCorrectQuestionView = require('./../views/teacher_correct_question_view.js');

var Router = Backbone.Router.extend({
    initialize: function(el) {
        this.$el = $(el);
        this.cleanAppView();
        // this.currentRouterName = null;
    },
    routes: {
        'paper_management': 'setPaperManagement',
        'add_new_paper': 'setAddNewPaperView',
        'question_management': 'setQuesntionManagementView',
        'paper_info_detail': 'setPaperInfoDetailView',
        'correct_paper': 'setCorrectPaperList',
        'correct_paper/detail': 'setStudentAnswer',

        '*filter': 'setdefaultView',
    },
    cleanAppView: function() {
        if (this.appView) {
            this.appView.remove();
            this.appView = null;
        }
    },
    setAppView: function(newView) {
        this.cleanAppView();
        this.appView = newView;
        newView.$el.appendTo(this.$el);
    },
    setdefaultView: function(param) {
        console.log(param);
        if (!param) {
            this.setQuesntionManagementView();
        }
    },
    setQuesntionManagementView: function() {
        var questionMangementView = new TeacherQuestionMainView(mockData.teacher_question);
        this.setAppView(questionMangementView);
    },
    setPaperManagement: function() {
        var paperMangementView = new TeacherPaperMainView(mockData.teacher_paper);
        this.setAppView(paperMangementView);
    },
    setPaperInfoDetailView: function() {
        var newPaperView = new TeacherPaperNewView(mockData.teacher_modify_paper);
        this.setAppView(newPaperView);
    },
    setAddNewPaperView: function() {
        var newPaperView = new TeacherPaperNewView(mockData.teacher_question_add_to_paper);
        this.setAppView(newPaperView);
    },
    setCorrectPaperList: function() {
        var newPaperView = new TeacherCorrectPaperView(mockData.teacher_correct_paper);
        this.setAppView(newPaperView);
    },
    setStudentAnswer: function() {
        var newPaperView = new TeacherCorrectQuestionView(mockData.teacher_correct_question);
        this.setAppView(newPaperView);
    }

});
module.exports = Router;