var studentPaper = require('./../models/studentPaper.js');
var User = require('./../models/user.js');

var studentPaper = new studentPaper();
var user = new User();

exports.checkLogin = function(req, res) {
    var name = req.body.name;
    var password = req.body.password;
    user.getUserPassword(name).then(function(data) {

        if (data[0].password === password) {
            var resData = {
                userId: data[0].user_id,
                userName: data[0].user_name,
                userRole: data[0].role,
                judge: true
            };
            res.json(resData);
        } else {
            res.json({
                judge: false
            });
        }
    });
};
exports.getStudentQuestionBankList = function(req, res) {
    var questionBankList = studentPaper.getStudentQuestionBankList();
    questionBankList.then(function(data) {

        var questionTypes = [];
        var formatDatas = {};
        for (var i = 0; i < data.length; i++) {
            var types = [];
            var item={};
            item.type_name = data[i].question_type;
            item.count = data[i].count;

            var knowledge_point = data[i].knowledge_point;

            if (questionTypes.indexOf(knowledge_point) < 0) {
                questionTypes.push(knowledge_point);
                formatDatas[knowledge_point] = {
                    knowledge_point: knowledge_point,
                    types:types
                };
            }
            formatDatas[knowledge_point].types.push(item);
        }
        var oneQuestionBankSum = studentPaper.getOneQuestionBankSum();   
        oneQuestionBankSum.then(function(sum) {
            for (var i = 0; i < sum.length; i++) {
                formatDatas[sum[i].knowledge_point].sum= sum[i].sum;
            }  
            var dataToArray =[];
            for(key in formatDatas){
                dataToArray.push(formatDatas[key]);
            }
            res.json(dataToArray);
        });
    });
}; 

exports.getStudentPaperList = function(req, res) {
    var paperList = studentPaper.getStudentPaperList();
    paperList.then(function(data) {
        res.json(data);
    });

};
//get questions in specific papers
exports.getPaperQuestion = function(req, res) {
    var paperId = req.query.paperId;
    var questions = studentPaper.getQuestionsInPaper(paperId);
    questions.then(function(data) {
        res.json(data);
    });
};