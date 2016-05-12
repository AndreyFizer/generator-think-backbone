/**
 * Created by andrey on 12.05.16.
 */

define(['<%= _.slugify(appname) %>'], function(<%= _.classify(appname) %>){
    var Router = Backbone.Router.extend({
        
    });

    <%=_.classify(appname)%>.Routers.Router = Router;
    return Router;
});