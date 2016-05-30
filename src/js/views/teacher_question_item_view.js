require('../vender/bootstrap.min.js');
var teacher_question_item_tmpl = require('../../tmpl/teacher_question_item.html');
var TeacherQuestion = require('./../models/teacher_question.js');

var TeacherQuestionItemView = Backbone.View.extend({
    tagName:'tr',
    template: teacher_question_item_tmpl,
    initialize: function() {
        this.render();
        this.listenTo(this.model,'save',this.saveModel);

    },
    events:{
        'click .modify':'modifyModel',
        'click .delete':'deleteModel'
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    modifyModel:function(){
        var obj = this.model.toJSON();
        // console.log(obj);
        var $form  = $('.modify-question');
        if(this.model.get('question_type') in{'简答':1,'填空':1,'判断':1}){
            $('choice').css('display','none');
        }
        for(key in obj){
            // console.log(key);
            if(key !="difficulty_level"){
                $form.find('input[name='+key+']').val(obj[key]);
            }else{
                // console.log($form.find('input[name='+key+'][value='+obj[key]+']'));
                $form.find('input[name='+key+'][value='+obj[key]+']').attr('checked',true);
            }
        }
        $('#questionModal').modal('show');
    },
    deleteModel:function(){
        this.remove();
    },
    saveModel:function(data){
        // this.model=model;
        this.model = new TeacherQuestion(data);
        $('#questionModal').modal('hide');
        this.render();
    }
    
     
});
module.exports = TeacherQuestionItemView;