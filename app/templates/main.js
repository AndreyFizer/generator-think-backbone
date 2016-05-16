/*global <%=_.classify(appname)%>*/

"use strict";

define([
    '<%= _.slugify(appname) %>', 
    'jQuery'
], function(<%=_.classify(appname)%>, $){
    <%=_.classify(appname)%>.start();
});