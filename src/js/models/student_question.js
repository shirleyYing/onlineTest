var StudentQuestionPaper = Backbone.Model.extend({
    defaults: {
        question_name: '',
/*        choice:{
            a:'const void print();',
            b:'const void print();',
            c:'const void print();',
            d:'const void print();'
        },

*/
        order_id:1,
        question_id:-1,
        paper_id:1,
        studnet_answer:'',
        answer:'',
        score:0,
        studnet_score:0
    },
});

module.exports = StudentQuestionPaper;