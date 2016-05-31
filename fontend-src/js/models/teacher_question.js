var TeacherQuestion = Backbone.Model.extend({
    defaults: {
        title: '',
        question_type: '', 
        knowledge_point: '', 
        difficulty_level: 1,
        answer:'',
        uploader:'',
        choice:[],
        upload_time:'',
        memo:''
    },
    modifyModels: function(model) {
        this.save({
            title: model.title,
            question_type: model.question_type, 
            knowledge_point: model.knowledge_point, 
            difficulty_level: model.difficulty_level,
            answer:model.answer,
            choice:model.choice,
            memo:model.memo
        });
    }
});
module.exports = TeacherQuestion;