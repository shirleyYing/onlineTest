
var StudentPaperListView = require('./../views/student_paper_list_view.js');
var QuestionPaperView = require('./../views/question_paper_view.js');
var QuestionPaperDetailView = require('./../views/question_paper_detail.js');

var mockData = require('./../../../mock/mock.js');

var Router = Backbone.Router.extend({

    initialize: function(el) {
        this.$el = $(el);
        this.cleanAppView();
        this.currentRouterName = null;
    },
    routes: {
        'paper/:id': 'setPaperQuestionView',
        'course/:id': 'setCourseQuestionView',
        'test_result':'setTestResultView',
        'student_paper_score/:id':'setQuestionPaperDetailView',
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

            case "paper_test":
                this.setPaperView(mockData.paper_test, "paper_test");
                break;
            case "query_score":
                this.setPaperView(mockData.query_score, "query_score");
                break;
            case "error_review":
                this.setErrorReviewView(mockData.error_review);
                break;
            default:
                this.setPaperView(mockData.special_test, "special_test");
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

    setPaperView: function(data, routerName) {
        var appView = new StudentPaperListView(data, routerName);
        this.setAppView(appView);
    },
    setPaperQuestionView: function(id) {
        var appView = new QuestionPaperView(mockData.question_in_paper);
        this.setAppView(appView);
    },
    setCourseQuestionView: function(id) {
        var appView = new QuestionPaperView(mockData.question_in_paper);
        this.setAppView(appView);
    },
    setQuestionPaperDetailView:function(id){
        // var appView = new QuestionPaperDetailView({model:mockData.question_paper_detail});
        var appView = new QuestionPaperDetailView(mockData.question_paper_detail);

        this.setAppView(appView);
    }

});

module.exports = Router;