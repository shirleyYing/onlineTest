var QuestionPaper = require('../models/question_paper.js');

var QuestionPaperCollection = Backbone.Collection.extend({
    model: QuestionPaper,

    /*parse:function(models,options){

    }*/
});

module.exports = QuestionPaperCollection;