///<reference path="../../../../typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var AdminController = (function () {
            /* @ngInject */
            function AdminController(logger) {
                this.logger = logger;
                this.init();
            }
            AdminController.prototype.init = function () {
                this.title = 'Admin';
                this.activate();
            };
            AdminController.prototype.activate = function () {
                this.logger.info('Activated Admin View');
            };
            AdminController.prototype.tmp = function () {
            };
            AdminController.controllerId = 'AdminController';
            AdminController.$inject = ['logger'];
            return AdminController;
        })();
        controllers.AdminController = AdminController;
        angular.module('app.admin').controller(AdminController.controllerId, AdminController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
