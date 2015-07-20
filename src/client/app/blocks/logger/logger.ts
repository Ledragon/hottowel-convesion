///<reference path="../../../../../typings/angularjs/angular.d.ts"/>
module app.blocks {
    'use strict';
    export interface Ilogger {
        showToasts: boolean;

        error: (message, data, title) => void;
        info: (message, data, title) => void;
        success: (message, data, title) => void;
        warning: (message, data, title) => void;

        log: ng.ILogCall;
    }

    class logger implements Ilogger {
        
        static serviceId = 'logger';
        showToasts: boolean;
        log: ng.ILogCall;

        static $inject = ['$log', 'toastr'];
        /* @ngInject */
        constructor(private $log: ng.ILogService, private toastr: any) {
            this.showToasts = true;
            this.log = $log.log;
        }

        error(message, data, title) {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        }

        info(message, data, title) {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        }

        success(message, data, title) {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }

        warning(message, data, title) {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        }
        
        static instance($log, toastr) {
            return new logger($log, toastr);
        }
    }

    angular
        .module('blocks.logger')
        .factory(logger.serviceId, logger.instance);
}
