var QuestionPaper = require('../models/question_paper.js');

var QuestionPaperCollection = Backbone.Collection.extend({
    model: QuestionPaper,
    url: "/getPaperQuestion",
    comparator: 'order_id',
    parse: function(models, options) {
        this.sort();

        _.map(models, function(m, index) {
            var a = {
                    key: "a",
                    value: m.a
                },
                b = {
                    key: "b",
                    value: m.b
                },
                c = {
                    key: "c",
                    value: m.c
                },
                d = {
                    key: "d",
                    value: m.d
                },
                e = {
                    key: "e",
                    value: m.e
                },
                f = {
                    key: "f",
                    value: m.f
                },
                g = {
                    key: "g",
                    value: m.g
                };
            m.choice = [a, b, c, d, e, f, g];
            return m;
        });

        return models;
    },
    sort: function() {
        var sorted = _.sortBy(this.models, function(model) {
            return model.get("order_id");
        });
        this.models = sorted;
    }
});

module.exports = QuestionPaperCollection;