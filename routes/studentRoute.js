var studentPaper = require('./../models/studentPaper.js');
var User = require('./../models/user.js');

var studentPaper = new studentPaper();
var user = new User();

exports.checkLogin = function(req, res) {
    var name = req.body.name;
    var password = req.body.password;

    user.getUserPassword(name).then(function(data) {
        console.log(data[0].password);
        // console.log(password);

        if (data[0].password === password) {
             res.json({
                 data: true
             });
        } else {
            res.json({
                data: false
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