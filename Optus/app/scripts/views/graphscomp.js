/*global Tests, Backbone, JST*/

Optus.Views = Optus.Views || {};

(function () {
    'use strict';

    Optus.Views.GraphsCompView = Backbone.View.extend({

        template: JST['app/scripts/templates/graphscomp.ejs'],
        
        tagName: 'div',
        
        className: 'content',
        
        events: {
            "change"  : "handleOptionSelect",
            "click button"  : "handleButtonSelect"
        },
        
        handleOptionSelect: function(ev) {
            
            var selectedBarIndex = parseInt(ev.target.value);
            this.selectedModel = this.collection.at(selectedBarIndex);
        },
        
        handleButtonSelect: function(ev) {
             
            var buttonValue = parseInt(ev.currentTarget.value);
            var startValue = parseInt(this.selectedModel.get('graphWidthPC_start'));
            var newValue = startValue+buttonValue;
            if(newValue<0)
            {
                newValue = 0;
            }
            this.selectedModel.set({graphWidthPC_end: newValue});
        },
        
        initialize: function () {
            this.selectedModel = this.collection.at(0);
            this.render();     
        },

        render: function () {
            this.$el.html(this.template());
            this.collection.each(this.addGraphBar, this);
            this.collection.each(this.addGraphBarSelector, this);
            return this;
        },
        
        addGraphBar: function(data) {
           var graphBar = new Optus.Views.GraphView({model:data});
           this.$('#barGraph').append(graphBar.el);
        },
        
        addGraphBarSelector: function(data) {
           var graphBarSelectorOption = new Optus.Views.GraphBarSelectorOptionView({model:data});
           this.$('#graphBarSelector').append(graphBarSelectorOption.el.innerHTML);
        }
    });

})();
