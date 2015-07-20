///<reference path="../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../blocks/logger/logger.ts"/>
module app.controllers {
    'use strict';
    export interface IAdminController {
        title: string;
        activate: () => void;
    }

    export class AdminController implements IAdminController {
        static controllerId = 'AdminController';
        title: string;

        static $inject = ['logger'];
        /* @ngInject */
        constructor(private logger: app.blocks.Ilogger) {
            this.init();
        }

        private init() {
            this.title = 'Admin';
            this.activate();
        }

        activate(): void {
            this.logger.info('Activated Admin View');
        }
        
        tmp(){}
    }

    angular
        .module('app.admin')
        .controller(AdminController.controllerId, AdminController);
}