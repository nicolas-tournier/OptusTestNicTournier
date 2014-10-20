/*global Tests, Backbone*/

Optus.Models = Optus.Models || {};

(function () {
    'use strict';

    Optus.Models.GraphModel = Backbone.Model.extend({

        defaults: {
            graphWidthPC_start:0,
            graphWidthPC_end:0
        },
    });

})();
