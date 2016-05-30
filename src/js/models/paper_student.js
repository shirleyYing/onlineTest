var StudentPaper = Backbone.Model.extend({
    defaults: {
        paper_name: '',
        paper_type: '', 
        question_number: 0, // 试题数
        need_time: 0,
        score:-1,
        end_time:0,
        paper_id:-1

    }
});
module.exports = StudentPaper;