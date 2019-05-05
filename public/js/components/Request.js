(function(root, factory) {
    
    root.Components.Request = factory(
        root.$,
        root.Components
    );
    
}(window, function(
    $,
    Components
) {
    'use strict';
    
    function Request(requestObject) {
        this.requestObject = requestObject;
    }
    
    Request.prototype.assign = Components.Component.prototype.assign;
    
    Request.prototype.get = function (successCallback, failedCallback) {
        this.successGetCallback = successCallback
            || this.successGetCallback;
            
        this.failedGetCallback = failedCallback
            || this.failedGetCallback;
            
        $.ajax(this.assign(this.requestObject, {
            method: 'GET',
            success: this.successGetCallback, 
            error: this.failedGetCallback,
        }));
        
        return this;
    };
    
    Request.prototype.post = function (successCallback, failedCallback) {
        this.successPostCallback = successCallback
            || this.successPostCallback;
            
        this.failedPostCallback = failedCallback
            || this.failedPostCallback;
            
        $.ajax(this.assign(this.requestObject, {
            method: 'POST',
            success: this.successPostCallback, 
            error: this.failedPostCallback,
        }));
        
        return this;
    };
    
    return Request;
}));