var StudentQuestionBankModel = Backbone.Model.extend();
var StudentQuestionCollection = Backbone.Collection.extend({
    model: StudentQuestionBankModel,
    url:"/getStudentQuestionBankList",

});

module.exports = StudentQuestionCollection;
