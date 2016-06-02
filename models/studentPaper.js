var Base = require('./base.js');
var base = new Base();
var studentPaper = function() {

    this.getStudentQuestionBankList= function(){
        var sql = 'select knowledge_point, question_type,count(knowledge_point) count from question_bank group by knowledge_point, question_type ';

        return base._query(sql);
    };
    this.getOneQuestionBankSum = function(){
        var sql='select knowledge_point,count(knowledge_point) sum from question_bank group by knowledge_point';
        return base._query(sql);

    };

    this.getStudentPaperList = function() {
        var sql = "select p.paper_id,paper_name, end_time,need_time,count(p.paper_id) as count from paper p, paper_question pq where p.paper_id = pq.paper_id  group by p.paper_id,paper_name, end_time,need_time";
        return base._query(sql);
    };
    this.getQuestionsInPaper = function(paperId) {
        var sql = 'select q.question_type,q.question_id,q.title,q.answer,pq.order_id,pq.question_score,pq.paper_id,qc.a,qc.b,qc.c,qc.d,qc.e,qc.f,qc.g from question_bank q,paper_question pq,question_choice qc where q.question_id =pq.question_id and q.question_id =qc.question_id and pq.paper_id ='+paperId;
        return base._query(sql);
    };
    this.getQuestionBank = function(){
        var sql = 'select knowledge_point, question_type,count(knowledge_point) count from question_bank group by knowledge_point, question_type ';
        return base._query(sql);
    };
};
module.exports = studentPaper;