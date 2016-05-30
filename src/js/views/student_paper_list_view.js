var StudentPaperCollection = require('../collections/student_paper_collection.js');
var StudentPaperView = require('./student_paper_view.js');
var FilterView = require('./filter_view.js');

var filter_tmpl = require('../../tmpl/filter.html');
var StudentPaperListView = Backbone.View.extend({
    tagName:'div',
    className:'row',
    initialize: function(initialData,routerName) {
        this.currentRouter= routerName;
        this.collection = new StudentPaperCollection();
        this.render();
    },
    render: function() {
        this.collection.each(function(item) {
            this.renderItem(item);
        }, this);

        if(this.currentRouter === 'special_test'){
            var filterView = new FilterView();
            this.$el.append(filterView.el);
        }
        return this;
    },

    renderItem: function(item) {
        var paperView = new StudentPaperView({
            model: item
        });
        this.$el.append(paperView.render().el);
    }
    /*onRouteChange:function(routerName){
        if(routerName === 'special_test'){
        this.$filter.append(this.filterView.render().el);

        }
    }*/
});
module.exports = StudentPaperListView;