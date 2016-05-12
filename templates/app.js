// Created by andrey on 12.05.16.

"use strict";

window.<%= _.camelize(appname) %> = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    <%= _.camelize(appname) %>.init();
});