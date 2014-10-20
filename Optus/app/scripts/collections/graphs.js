/*global Tests, Backbone*/

Optus.Collections = Optus.Collections || {};

(function () {
    'use strict';

    Optus.Collections.GraphsCollection = Backbone.Collection.extend({

        model: Optus.Models.GraphModel

    });

})();
