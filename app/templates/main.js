/*global <%=_.classify(appname)%>*/

"use strict";

define([
    '<%= _.slugify(appname) %>', 
    'jquery'
], function(<%=_.classify(appname)%>, $){
    <%=_.classify(appname)%>.start();
});