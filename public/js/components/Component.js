(function(root, factory){

    root.Components = {
        Component: factory(),
    };

}(window, function() {
    'use strict';

    function Component(element, props) {
        this.element = $(element);
        this.props = this.assign({}, props);
        this.props.children = this.props.children
            || this.element.children();
        this.observables = [];
    }

    Component.prototype.assign = function(targetObject, sourceObject) {
        var result = Object.keys(targetObject).length
            ? this.assign({}, targetObject)
            : {};

        if (sourceObject) {
            Object
                .keys(sourceObject)
                .forEach(function(key) {
                    result[key] = sourceObject[key];
                });
        }

        return result;
    };

    Component.prototype.setState = function(newState) {
        var clonedState = this.assign({}, this.state);
        delete this.state;
        this.state = this.assign(clonedState, newState);
        Object.freeze(this.state);

        this.notifyObservers();

        return this;
    };

    Component.prototype.request = function(requestObject) {
        $.ajax(requestObject);

        return this;
    };

    Component.prototype.registerObserver = function(ObservableCallback) {
        this.observables.push(ObservableCallback);

        return this;
    };

    Component.prototype.notifyObservers = function() {
        this.observables.forEach(function(observe) {
            observe();
        });

        return this;
    };

    Component.prototype.destroy = function() {
        this
            .element
            .remove();
    };

    Component.prototype.render = function(newProps) {
        if (newProps) {
            this.props = this.assign(this.props, newProps);
            this.notifyObservers();
        }
    };

    return Component;
}));