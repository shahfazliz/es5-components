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

    /**
     * Component is the base function for any javascript component to be created. This function is mainly
     * inspired from ReactJS like building components with states and props where states are only mutable
     * throuth setState() and props are not mutable unless it's re-rendered with new props. 
     * @param {string|jQuery} element - A jQuery element or a css string selector of the DOM element to be
     *                                  modified.
     * @param {object} props
     * @param {Array} [props.children=jQuery]
     */
    function Component(element, props) {
        this.element = $(element);
        props.children = props.children
            || this.element.children();
        this.props = Object.freeze(Object.seal(this.assign({}, props)));
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
        if (sourceObject
            && Object.keys(sourceObject).length
        ) {
            Object
                .keys(sourceObject)
                .forEach(function (key) {
                    var value = sourceObject[key];

                    // Make sure the sourceObject[key] is really an object
                    if (value
                        && !Array.isArray(value)
                        && Object.keys(value).length
                        && value instanceof Object
                        // Check if the target has the key
                        && targetObject[key]
                    ) {
                        value = this.assign(targetObject[key], value);
                    }

                    result[key] = value;
                }.bind(this));
        }
        return result;
    };

    /**
     * this.state object is frozen
     * @param {object} newState - The key value pairs we want to replace in this.state
     */
    Component.prototype.setState = function (newState) {
        var clonedState = this.assign({}, this.state);
        delete this.state;
        this.state = Object.freeze(Object.seal(this.assign(clonedState, newState)));
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
            var clonedProps = this.assign(this.props, newProps);
            delete this.props;
            this.props = Object.freeze(Object.seal(this.assign(clonedProps, newProps)));
            this.notifyObservers();
        }
    };

    return Component;
}));