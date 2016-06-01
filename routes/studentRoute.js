var studentPaper = require('./../models/studentPaper.js');
var User = require('./../models/user.js');

var studentPaper = new studentPaper();
var user = new User();

exports.checkLogin = function(req, res) {
    var name = req.body.name;
    var password = req.body.password;
    user.getUserPassword(name).then(function(data) {

        if (data[0].password === password) {
            var resData={
                userId:data[0].user_id,
                userName:data[0].user_name,
                userRole:data[0].role,
                judge: true
             };
            res.json(resData);
        } else {
            res.json({
                judge: false
            });
        }
    });

    // var users = user.getUser();
    /*users.then(function(data) {
        res.json({
            data: data
        });
    });*/
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