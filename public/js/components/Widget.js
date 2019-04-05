(function(root, factory) {

    root.Components.Widget = factory(root.Components);

}(window, function(Components) {
    'use strict';

    function Widget(element, props) {
        this.element = $(element);
        this.props = props
            || {};
        this.props.children = this.props.children
            || this.element.children();

        this.setState(this.props);
    }

    Widget.prototype.setState = function(newState) {
        this.state = this.state
            || {};
        $.extend(true, this.state, newState);
    };

    Widget.prototype.destroy = function() {
        this
            .element
            .remove();
    };

    Widget.prototype.render = function() {
        this
            .element
            .html('')
            .append(this.state.name)
            .append(this.props.children);

        return this;
    };

    return Widget;
}));