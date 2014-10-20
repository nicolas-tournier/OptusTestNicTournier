/*global Tests, Backbone, JST*/

Optus.Views = Optus.Views || {};

(function () {
    'use strict';

    Optus.Views.GraphView = Backbone.View.extend({

        template: JST['app/scripts/templates/graph.ejs'],

        tagName: 'div',
        
        className: 'row graphBarContainer',

        initialize: function () {
           this.model.on('change:graphWidthPC_end', this.animateBar, this);
           this.render();
           this.animateBar();
        },
        
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
        setFinalWidth: function() {
            
            this.model.set({graphWidthPC_start:this.model.get('graphWidthPC_end')});
        },
        animateBar: function() {  
            var that = this;

            this.render();

            var startWidth = this.model.get('graphWidthPC_start')+'%';
            var targetWidth = this.model.get('graphWidthPC_end')+'%';
            this.$('.graphBar').css({width:startWidth});

            this.$('.graphBar').animate(
            {
                width:targetWidth
            },
            {
                complete: function(){
                    that.setFinalWidth();
                },
                progress: function() {
                    var widthPC = $(this).width()/$(this).parent().width();

                    if(widthPC>=1) {
                        $(this).addClass('graphBarTooBig');
                    }else
                    {
                        $(this).removeClass('graphBarTooBig');
                    }
                }
            });
        }
    });

})();
