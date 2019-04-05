(function(root, factory) {

    root.Components.Spinner = factory(
        root.$,
        root.Components
    );

}(window, function(
    $,
    Components
) {
    'use strict';

    function Spinner(element, props) {
        Components.Component.call(this, element, props);
    }

    Spinner.prototype = Object.create(Components.Component.prototype);
    Spinner.prototype.constructor = Spinner;

    Spinner.prototype.on = function() {
        if (this.element.find('.spinner-overlay').length === 0) {
            $('<div class="spinner-overlay"></div>')
                .appendTo(this.element)
                .addClass('spinner-parent');
        }
    };
    Spinner.prototype.off = function () {
        this
            .element
            .removeClass('spinner-parent')
            .find('.spinner-overlay')
            .remove();
    };

    $.fn.extend({
        modalSpinner: function (method) {
            var spinnerObject;

            this.each(function () {
                if (!$(this).data('modalSpinner')) {
                    $(this).data('modalSpinner', new Spinner(this));
                }

                spinnerObject = $(this).data('modalSpinner');

                switch (method) {
                case undefined:
                    break;
                case 'on':
                    return spinnerObject.on();
                case 'off':
                    return spinnerObject.off();
                default:
                    throw new Error(method + ' is not a valid method');
                }
            });

            return this;
        }
    });

    Spinner.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);
        return this;
    };

    return Spinner;
}))