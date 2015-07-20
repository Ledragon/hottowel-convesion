///<reference path="../../../../typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
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
            AdminController.controllerId = 'AdminController';
            AdminController.$inject = ['logger'];
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
        angular.module('app.admin').controller(AdminController.controllerId, AdminController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
