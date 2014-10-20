/*global Tests, Backbone, JST*/

Optus.Views = Optus.Views || {};

(function () {
    'use strict';

    Optus.Views.GraphBarSelectorOptionView = Backbone.View.extend({

        template: JST['app/scripts/templates/graphselect.ejs'],

        initialize: function () {
           this.render();
        },
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

})();
