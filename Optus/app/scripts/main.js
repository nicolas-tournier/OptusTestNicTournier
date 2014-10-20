/*global Tests, $*/

window.Optus = {
    
    Models: {},
    Collections: {},
    Views: {},
    init: function () {
        'use strict';
        
        this.currentlySelectedGraphIndex = 0;
        
        var gm0 = new Optus.Models.GraphModel({
           graphIndex:0 
        });
        var gm1 = new Optus.Models.GraphModel({
           graphIndex:1 
        });
        var gm2 = new Optus.Models.GraphModel({
           graphIndex:2 
        });
        
        var graphsCollection = new Optus.Collections.GraphsCollection([gm0, gm1, gm2]);
        
        var graphsView = new Optus.Views.GraphsCompView({collection:graphsCollection});
        $('#graphsComponent').html(graphsView.el); 
    }
};

$(document).ready(function () {
    'use strict';
    Optus.init();
});
