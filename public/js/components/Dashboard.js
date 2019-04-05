(function(root, factory) {

    root.Components.Dashboard = factory(root.Components);

}(window, function(Components) {
    'use strict';

    /**
     * The Dashboard component where we can specify the needed widgets. This will have a widget
     * picker to add widgets and a reset button to reset to default settings.
     * @param {Object} [props={}] - Dashboard's properties for this element
     * @param {Object[]} [props.children=[]] - The Widget objects to populate this Dashboard
     * @param {jQuery} [props.control] - Element to add as the Dasboard control
     * @param {string|jQuery} element - DOM container/element for us to build Dashboard component
     * @param {string} id - Id of this Dashboard
     * @param {string} name - Name of this Dashboard
     */
    function Dashboard(element, props) {
        Components.Component.call(this, element, props);
    }
    Dashboard.prototype = Object.create(Components.Component.prototype);
    Dashboard.prototype.constructor = Dashboard;

    Dashboard.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);

        this
            .element
            .html('')
            .append(this
                .props
                .control)
            .append($('<div class="row align-center"></div>')
                .append(this
                    .props
                    .children
                    .length
                    ? this
                        .props
                        .children
                        .map(function (widget) {
                            widget
                                .element
                                .addClass('col-xs-12 col-sm-12 col-md-6 col-lg-4');
                            return widget.element;
                        })
                    : Translator.trans('common_interface.dashboard.no_widget_available')));

        return this;
    };

    return Dashboard;
}));