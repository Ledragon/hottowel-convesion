///<reference path="../../../../typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    var directives;
    (function (directives) {
        'use strict';
        var htTopNav = (function () {
            function htTopNav() {
                this.bindToController = true;
                this.controller = TopNavController.controllerId;
                this.controllerAs = 'vm';
                this.restrict = 'EA';
                this.scope = {
                    'navline': '='
                };
                this.templateUrl = 'app/layout/ht-top-nav.html';
            }
            htTopNav.instance = function () {
                return new htTopNav();
            };
            htTopNav.$inject = [];
            return htTopNav;
        })();
        angular.module('app.layout').directive('htTopNav', htTopNav.instance);
        var TopNavController = (function () {
            function TopNavController() {
            }
            TopNavController.controllerId = 'TopNavController';
            return TopNavController;
        })();
        angular.module('app.layout').controller(TopNavController.controllerId, TopNavController);
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
