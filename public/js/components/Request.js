(function (root, factory) {

    root.Components.Request = factory(
        root.$,
        root.Components
    );

}(window, function (
    $,
    Components
) {
    'use strict';

    function Request(requestObject) {
        this.requestObject = requestObject;
        this.jqXHR = undefined;
    }

    Request.prototype.assign = Components.Component.prototype.assign;

    Request.prototype.abort = function () {
        this
            .jqXHR
            .abort();
    };

    Request.prototype.get = function (successCallback, failedCallback) {
        this.successGetCallback = successCallback
            || this.successGetCallback;

        this.failedGetCallback = failedCallback
            || this.failedGetCallback;

        $.ajax(this.assign(this.requestObject, {
            beforeSend: function (jqXHR) {
                this.jqXHR = jqXHR;
            }.bind(this),
            error: this.failedGetCallback,
            method: 'GET',
            success: this.successGetCallback,
        }));

        return this;
    };

    Request.prototype.post = function (successCallback, failedCallback) {
        this.successPostCallback = successCallback
            || this.successPostCallback;

        this.failedPostCallback = failedCallback
            || this.failedPostCallback;

        $.ajax(this.assign(this.requestObject, {
            beforeSend: function (jqXHR) {
                this.jqXHR = jqXHR;
            },
            error: this.failedPostCallback,
            method: 'POST',
            success: this.successPostCallback,
        }));

        return this;
    };

    return Request;
}));