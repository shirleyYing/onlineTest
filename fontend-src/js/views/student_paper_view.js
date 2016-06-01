var paper_tmpl = require('../../tmpl/paper.html');
var PaperModel = require('../models/paper_student.js');
var StudentPaperView = Backbone.View.extend({
    tagName:'div',
    className:'col-xs-12 col-sm-4 col-md-3 col-lg-3',
    template:paper_tmpl,
    model:PaperModel,
    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    
 }); 

module.exports = StudentPaperView;

