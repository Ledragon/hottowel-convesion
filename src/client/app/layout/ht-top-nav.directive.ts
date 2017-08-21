///<reference path="../../../../typings/angularjs/angular.d.ts"/>
module app.directives {
    'use strict';
    export interface IhtTopNavDirective extends ng.IDirective {

    }

    class htTopNav implements IhtTopNavDirective {
        static directiveId = 'htTopNav';
        bindToController = true;
        controller = TopNavController.controllerId;
        controllerAs = 'vm';
        restrict = 'EA';
        scope = {
            'navline': '='
        };
        templateUrl = 'app/layout/ht-top-nav.html';
        
        static $inject =[];
        constructor() {
        }
        
        static instance(): IhtTopNavDirective{
            return new htTopNav();
        }
    }

    angular
        .module('app.layout')
        .directive(htTopNav.directiveId, htTopNav.instance);

    interface ItopNavController {

    }

    class TopNavController implements ItopNavController {
        static controllerId = 'TopNavController';
    }

    angular.module('app.layout')
        .controller(TopNavController.controllerId, TopNavController);
        
}

