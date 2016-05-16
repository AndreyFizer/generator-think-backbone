// Created by andrey on 12.05.16.

"use strict";

define([
    'backbone'
], function(Backbone){
    var Router = Backbone.Router.extend({

        initialize: function () {
            //initialize logic...
        },

        routes: {
            '*any': 'anyRout'
        },

        anyRout: function () {
            console.log('You click any rout...');
        }

    });

    return Router;
});