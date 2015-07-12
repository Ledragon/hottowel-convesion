///<reference path="../../../../typings/angularjs/angular.d.ts"/>
module app.Controllers{
    export interface IAdminController{
        title: string;
        activate: () => void;
    }
}

(function() {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger'];
    /* @ngInject */
    function AdminController(logger) {
        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            logger.info('Activated Admin View');
        }
    }
})();
