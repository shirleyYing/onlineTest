var filter_tmpl = require('../../tmpl/filter.html');
var FilterView = Backbone.View.extend({
    tagName:'div',
    className:'filter',
    template:filter_tmpl,
    initialize:function(){
        this.render();
    },
    render:function(){
        this.$el.html(this.template());
        return this;
    }
 }); 

module.exports = FilterView;