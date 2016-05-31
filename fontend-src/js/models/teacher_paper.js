var StudentPaper = Backbone.Model.extend({
    idAttribute: "paper_id",
    defaults: {
        paper_name: '',
        paper_type: '0', // 0: self-exercise 1: teacher-test
        question_number: 0, // 试题数
        uploader: '',
        course_name: '',
        upload_time: '',
        start_time: '',
        end_time: '',
        need_time: '',
        total_score:0
    }
});
module.exports = StudentPaper;