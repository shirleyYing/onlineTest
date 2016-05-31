var QuestionPaperDetail = Backbone.Model.extend({
    defaults: {
        paper:{
            paper_name: '',
            score: 0
        },
        questions:[
            {
                true_or_false:false,
                question_name:"",
                question_type:'',
                choice:[],
                answer:"",
                student_answer:"",
            }
        ]
    },
});

module.exports = QuestionPaperDetail;