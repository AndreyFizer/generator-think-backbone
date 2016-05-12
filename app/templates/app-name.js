/*global <%=_.classify(appname)%>, Backbone*/

"use strict";

define(['backbone'], function () {
    <%=_.classify(appname)%> = {
        init       : function () {},
        start      : function () {
            <%=_.classify(appname)%>.init();
            Backbone.history.start();
        },
        Views      : {},
        Models     : {},
        Collections: {},
        Routers    : {}
    };
    
    return <%=_.classify(appname)%>;
});