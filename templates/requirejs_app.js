// Created by andrey on 12.05.16.

'use strict';

require.config({
    shim : {
        underscore: {
            exports: '_'
        },
        backbone  : {
            deps   : [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery    : '../js/libs/jquery/jquery',
        backbone  : '../js/libs/backbone/backbone',
        underscore: '../js/libs/underscore/underscore'
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
    console.log('Hello from Backbone!');
});