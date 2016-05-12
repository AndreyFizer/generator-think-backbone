// Created by andrey on 12.05.16.

"use strict";

define(['backbone'], function () {
    <%= _.classify(appname) %> = {
        init: function () {
            // initialize router, views, data and layouts
        },
        start: function () {
            <%= _.classify(appname) %>.init();
            Backbone.history.start();
        },
        Views: {},
        Models: {},
        Collections: {},
        Routers: {}
    }

    return <%= _.classify(appname) %>;
});