///<reference path="../../../../../typings/angularjs/angular.d.ts"/>
var app;
(function (app) {
    var blocks;
    (function (blocks) {
        'use strict';
        var logger = (function () {
            /* @ngInject */
            function logger($log, toastr) {
                this.$log = $log;
                this.toastr = toastr;
                this.showToasts = true;
                this.log = $log.log;
            }
            logger.prototype.error = function (message, data, title) {
                this.toastr.error(message, title);
                this.$log.error('Error: ' + message, data);
            };
            logger.prototype.info = function (message, data, title) {
                this.toastr.info(message, title);
                this.$log.info('Info: ' + message, data);
            };
            logger.prototype.success = function (message, data, title) {
                this.toastr.success(message, title);
                this.$log.info('Success: ' + message, data);
            };
            logger.prototype.warning = function (message, data, title) {
                this.toastr.warning(message, title);
                this.$log.warn('Warning: ' + message, data);
            };
            logger.instance = function ($log, toastr) {
                return new logger($log, toastr);
            };
            logger.serviceId = 'logger';
            logger.$inject = ['$log', 'toastr'];
            return logger;
        })();
        angular.module('blocks.logger').factory(logger.serviceId, logger.instance);
    })(blocks = app.blocks || (app.blocks = {}));
})(app || (app = {}));
