var StudentPaperListView = require('./../views/student_paper_list_view.js');
var StudentSpecialTestView = require('./../views/student_special_test_view.js');
var StudentPaperScoreView = require('./../views/student_paper_score_view.js');

var QuestionPaperView = require('./../views/question_paper_view.js');
var StudentQuestionCourseView = require('./../views/student_course_question_view.js');

var QuestionPaperDetailView = require('./../views/question_paper_detail.js');

var mockData = require('./../../../mock/mock.js');

var Router = Backbone.Router.extend({

    initialize: function(el) {
        this.$el = $(el);
        this.cleanAppView();
        this.currentRouterName = null;
    },
    routes: {
        'paper/:id/:time': 'setPaperQuestionView',
        'course/:id/:time': 'setPaperQuestionView',
        'test_result': 'setTestResultView',
        'student_paper_score/:id': 'setQuestionPaperDetailView',
        '*filter': 'setFilter'
    },
    setFilter: function(param) {

        this.currentRouterName = param || '';
        $('.nav li').removeClass('active');
        if (!this.currentRouterName) {
            $('.nav li a').filter('[href="#/special_test"]').parent().addClass('active');
        } else {
            $('.nav li a').filter('[href="#/' + this.currentRouterName + '"]').parent().addClass('active');
        }
        switch (this.currentRouterName) {
            case 'paper_test':
                this.setPaperTestView();
                break;
            case "query_score":
                this.setQueryScoreView(mockData.query_score);
                break;
            case "error_review":
                this.setErrorReviewView(mockData.error_review);
                break;
            default:
                this.setSpecialTestView();
                break;

        }
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
    setSpecialTestView: function() {
        var appView = new StudentSpecialTestView();
        this.setAppView(appView);
    },
    setPaperTestView: function() {
        var appView = new StudentPaperListView();
        this.setAppView(appView);
    },

    setQueryScoreView: function() {
        var appView = new StudentPaperScoreView();
        this.setAppView(appView);
    },

    setPaperView: function(routerName) {
        var appView = new StudentPaperListView(routerName);
        this.setAppView(appView);
    },
    setPaperQuestionView: function(id, time) {
        var appView = new QuestionPaperView(id, time);
        this.setAppView(appView);
    },
    setCourseQuestionView: function(id, time) {
        var appView = new QuestionPaperView(id, time);
        this.setAppView(appView);
    },
    setQuestionPaperDetailView: function(id) {
        // var appView = new QuestionPaperDetailView({model:mockData.question_paper_detail});
        var appView = new QuestionPaperDetailView(mockData.question_paper_detail);

        this.setAppView(appView);
    }

});

module.exports = Router;