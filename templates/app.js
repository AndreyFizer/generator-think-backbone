// Created by andrey on 12.05.16.
/*global appname*/

"use strict";

window.<%=_.camelize(appname)%> = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    <%=_.camelize(appname)%>.init();
});