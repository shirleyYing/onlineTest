var StudentQuestionBankModel = Backbone.Model.extend();
var StudentQuestionCollection = Backbone.Collection.extend({
    model: StudentQuestionBankModel,
    url:"/getStudentQuestionBankList",

   /* parse:function(models){
        for(index in models){
            models[index].end_time = dateformat.dateFormat(models[index].end_time);
        }
        return models;
    }*/
});

module.exports = StudentQuestionCollection;