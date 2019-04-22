(function(root, factory){

    root.Components = {
        Component: factory(
            root.$,
            root.moment
        ),
    };

}(window, function(
    $,
    moment
) {
    'use strict';

    function Component(element, props) {
        this.element = $(element);
        this.props = this.assign({}, props);
        this.props.children = this.props.children
            || this.element.children();
        this.observables = {};
    }

    Component.prototype.currencyFormat = function (currency, number) {
        return currency + parseFloat(number)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    Component.prototype.selectRandomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    Component.prototype.assign = function (targetObject, sourceObject) {
        // Copy the targetObject into a temporary result
        var result = targetObject
            && Object.keys(targetObject).length
            ? this.assign({}, targetObject)
            : {};

        // Now copy each key values in sourceObject into result regardless if value is falsy because
        // falsy could be the intended state. That's why we don't use $.extend anymore.
        if (sourceObject) {
            Object
                .keys(sourceObject)
                .forEach(function (key) {
                    var value = sourceObject[key];

                    if (!Array.isArray(value)
                        && Object.keys(value).length
                    ) {
                        value = this.assign(result[key], value);
                    }

                    result[key] = value;
                });
        }

        return result;
    };

    Component.prototype.setState = function (newState) {
        var clonedState = this.assign({}, this.state);
        delete this.state;
        this.state = this.assign(clonedState, newState);
        Object.freeze(this.state);

        this.notifyObservers();

        return this;
    };

    Component.prototype.request = $.ajax;

    Component.prototype.moment = moment;

    Component.prototype.registerObserver = function (observableName, observableCallback) {
        this.observables[observableName] = observableCallback;

        return this;
    };

    Component.prototype.unregisterObserver = function (observableName) {
        delete this.observables[observableName];

        return this;
    };

    Component.prototype.notifyObservers = function () {
        Object
            .values(this.observables)
            .forEach(function(observe) {
                observe();
            });

        return this;
    };

    Component.prototype.destroy = function () {
        if (this.props.children) {
            this
                .props
                .children
                .forEach(function (child) {
                    if (child.destroy) {
                        child.destroy();
                    }
                    child = undefined;
                });

            delete this.props.children;
        }

        delete this.props;
        delete this.state;
        delete this.observables;

        this
            .element
            .remove();
    };

    Component.prototype.render = function (newProps) {
        if (newProps) {
            this.props = this.assign(this.props, newProps);
            this.notifyObservers();
        }
    };

    return Component;
}));