// require('../vender/bootstrap.min.js');
var teacher_paper_item_tmpl = require('../../tmpl/teacher_paper_item.html');
var TeacherPaper = require('./../models/teacher_paper.js');

var TeacherPaperItemView = Backbone.View.extend({
    tagName:'tr',
    template: teacher_paper_item_tmpl,
    initialize: function() {
        this.render();
    },
    events:{
        'click .delete':'deleteModel'
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    
    deleteModel:function(){
        this.remove();
    }
     
});
module.exports = TeacherPaperItemView;