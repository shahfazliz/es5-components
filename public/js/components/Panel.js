(function(root, factory) {

    root.Components.Panel = factory(
        root.$,
        root.Components
    );

}(window, function(
    $,
    Components
) {
    'use strict';

    /**
     * Create a Panel and append to the html body
     * @param {Object} [props={}] - Panel's properties for this element
     * @param {string[]|jQuery[]} [props.children] - Children of this element we want to append in this panel's body
     * @param {string|jQuery} [props.footer] - Pass another DOM element for this panel's footer
     * @param {string|jQuery} [props.header] - Pass another DOM element for this panel's header
     * @param {string|jQuery} element - DOM container we want to re-create this modal box
     * @param {string} props.id - Unique Id of this element
     */
    function Panel(element, props) {
        Components.Component.call(this, element, props);

        this.setState(this.props);
    }

    Panel.prototype = Object.create(Components.Component.prototype);
    Panel.prototype.constructor = Panel;

    Panel.prototype.renderHeader = function() {
        var heading = $(
                '<div class="panel-heading">' +
                    '<span class="title"></span>' +
                '</div>'
            ),
            properties = this.props;

        if (properties.heading) {
            heading.append(properties.heading);

            if (properties.actionButtons) {
                heading.append(properties.actionButtons);
            }
        }

        return heading;
    };

    Panel.prototype.renderBody = function() {
        var body = $('<div class="panel-body"></div>').css({'min-height':'50px'});

        if (this
            .props
            .content) {
            body.append(
                this
                    .props
                    .content
            );
        }

        return body;
    };

    Panel.prototype.renderFooter = function () {
        var footer = $('<div class="panel-footer"></div>');

        if (this
            .props
            .content) {
            footer.append(
                this
                    .props
                    .content
            );
        }

        return footer;
    };

    Panel.prototype.addContent = function (content) {
        var body = this.getContent();

        if (content) {
            body.append(content);
        }

        return this;
    };

    Panel.prototype.removeContent = function() {
        this
            .getContent()
            .empty();

        return this;
    };

    Panel.prototype.getContent = function() {
        return this
            .element
            .find('.panel-body');
    };

    Panel.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);

        this
            .element
            .html('');

        if (this
            .props
            .heading) {
            this
                .renderHeader()
                .appendTo(this.element);
        }

        this
            .renderBody()
            .appendTo(this.element);

        if (this
            .props
            .footer) {
            this
                .renderFooter()
                .appendTo(this.element);
        }

        return this;
    };

    return Panel;
}));