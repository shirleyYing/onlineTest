var QuestionInPaper = Backbone.Model.extend({
    defaults: {
        question_name: '',
        question_type: '', // 0: 单选 1: 多选 2 填空 3 判断 4 简答 
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
        question_score:0
    },
});

module.exports = QuestionInPaper;