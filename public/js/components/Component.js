(function (root, factory){

    root.Components = {
        Component: factory(
            root.$,
            root.moment
        ),
    };

}(window, function (
    $,
    moment
) {
    'use strict';

    /**
     * Component is a base function for all other our javascript components so that we have a common constructor
     * to initialize our component, the same setState(), destroy() and render() function. This function is mainly
     * inspired from ReactJS like building components with states and props where states are only mutable
     * through setState() and props are not mutable unless it's re-rendered with new props. But we are introducing
     * observable design pattern to update our component and their children and their children's children upon
     * request. By default setState() will run our observables to update their children.
     *
     * @param {string|jQuery} element - A string that we can select the DOM element or a jquery element.
     *                                  We wrap the element into jQuery for convenience when manipulating
     *                                  the new element.
     * @param {Object} [props={}] - Properties for this object. It's optional but by default we will assign
     *                              an empty object to it. We copy props into this.props so props is not mutable.
     * @constructor
     */
    function Component(element, props) {
        this.element = $(element);
        this.props = this.assign(this.props || {}, props);
        this.props.children = this.props.children
            || this.element.children();
        this.props = Object.freeze(Object.seal(this.props));
        this.observables = {};
    }

    /**
     * Component.prototype.assign is a utility function to do the same thing as native javascript Object.assign()
     * but IE does not support this. Ref:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Browser_compatibility
     * But we need this and in the same time we do not want to rely on additional third party utilities like jquery,
     * lodash or underscore. This function will copy deep
     *
     * @param {Object} [targetObject] - The object we want to copy into
     * @param {Object} [sourceObject] - The object we want to copy from
     * @returns {Object}
     */
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
     * Component.prototype.setState is a function like React framework. We freeze this.state object like React
     * because we want a way to always run update in observables for every state change. this.state object is frozen.
     *
     * @param {Object} [newState] - The new state with some set of key values we want to update into this.state
     *                              We will leave this.state key values if the newState does not provide them
     * @returns {Component}
     */
    Component.prototype.setState = function (newState) {
        var clonedState = this.assign({}, this.state);
        delete this.state;
        this.state = Object.freeze(Object.seal(this.assign(clonedState, newState)));
        this.notifyObservers();
        return this;
    };

    /**
     * Add a component's render function or any other function as a callback function into observable
     */
    Component.prototype.registerObserver = function (observableName, observableCallback) {
        this.observables[observableName] = observableCallback;

        return this;
    };

    /**
     * Remove a callback function from observable
     */
    Component.prototype.unregisterObserver = function (observableName) {
        delete this.observables[observableName];

        return this;
    };

    /**
     * Execute all callback functions in observable
     */
    Component.prototype.notifyObservers = function () {
        Object
            .keys(this.observables)
            .forEach(function (observableKey) {
                this.observables[observableKey]();
            }.bind(this));

        return this;
    };

    /**
     * Javascript does not have a destructor function, so we need a way to destroy this element from the DOM
     */
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

    /**
     * The most important part of this Component is render() function. After initializing this component,
     * we need to run this render() function to reflect changes on DOM
     *
     * @param {Object} [newProps] - This is a way to update this.props from outside of this Component context
     *                              right before render. Simple example on first initialization
     *                              this.props.number = 10 which is coming from outside of this Component.
     *                              As time pass by, we need to re-render this Component because number had changed
     *                              to 20. So this.render({number: 20}) can take the new value and update all
     *                              it's children by notifying observables.
     */
    Component.prototype.render = function (newProps) {
        if (newProps) {
            var clonedProps = this.assign(this.props, newProps);
            delete this.props;
            this.props = Object.freeze(Object.seal(this.assign(clonedProps, newProps)));
            this.notifyObservers();
        }
    };

    Component.prototype.moment = moment;

    Component.prototype.currencyFormat = function (currency, number) {
        return currency + parseFloat(number)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    Component.prototype.selectRandomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    return Component;
}));