///<reference path="../../../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../../../typings/toastr/toastr.d.ts"/>
module app.blocks {
    'use strict';
    export interface Ilogger {
        showToasts: boolean;

        error: (message: string, data?: any, title?: string) => void;
        info: (message: string, data?: any, title?: string) => void;
        success: (message: string, data?: any, title?: string) => void;
        warning: (message: string, data?: any, title?: string) => void;

        log: ng.ILogCall;
    }

    class logger implements Ilogger {

        static serviceId = 'logger';
        showToasts: boolean;
        log: ng.ILogCall;

        static $inject = ['$log', 'toastr'];
        /* @ngInject */
        constructor(private $log: ng.ILogService, private toastr: Toastr) {
            this.showToasts = true;
            this.log = $log.log;
        }

        error(message: string, data?: any, title?: string): void {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        }

        info(message: string, data?: any, title?: string): void {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        }

        success(message: string, data?: any, title?: string): void {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }

        warning(message: string, data?: any, title?: string): void {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        }

        static instance($log: ng.ILogService, toastr: Toastr): Ilogger {
            return new logger($log, toastr);
        }
    }

    angular
        .module('blocks.logger')
        .factory(logger.serviceId, logger.instance);
}
