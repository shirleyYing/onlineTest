

var teacher_paper_list_tmpl = require('../../tmpl/teacher_paper_list.html');
var TeacherPaperItemView = require('./teacher_paper_item_view.js');
var TeacherPaperCollection = require('./../collections/teacher_paper_collection.js');

var TeacherPaperListView = Backbone.View.extend({
    className: 'col-md-9',
    template: teacher_paper_list_tmpl,
    initialize: function(data) {
        this.collection = new TeacherPaperCollection(data);
        this.filteredCollection = this.collection;
        this.render();
        this.on('filter', this.filterCollection);
    },
   
    render: function() {
        this.$el.html(this.template());
        var $tbody = this.$('tbody');
        this.filteredCollection.each(function(item) {
            var itemView = new TeacherPaperItemView({
                model: item
            });
            $tbody.append(itemView.$el);
        });
        return this;
    },
    filterCollection: function(param) {

        this.filteredCollection = new TeacherPaperCollection(this.collection.fliterModel(param));
        this.render();
    }
  
});
module.exports = TeacherPaperListView;