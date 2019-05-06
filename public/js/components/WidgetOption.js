(function(root, factory) {

    root.Components.WidgetOption = factory(root.Components);

}(window, function(Components) {
    'use strict';

    /**
     * Widget Option is a selector for widgets. Instead of using a checkbox to select, we can select the element
     * and it will be highlighted blue. We can set the maximum limit to select and change it before re-render.
     * @callback onSelectCallback
     * @callback onDeselectCallback
     *
     * @params {string|jQuery} element - DOM container/element that we want to re-create this Widget Option
     * @params {Object} props={} - Widget Option's properties for this element to work
     * @params {boolean} [props.enable=true] - To enable or disable this option on first render
     * @params {boolean} [props.select=false] - To select/highlight or deselect this option on first render
     * @params {boolean} props.id - The Id to identify from many other Widget Options in Widget Picker
     * @params {Object} props.returnObject - The object to return with the callback
     * @params {onDeselectCallback} props.onDeselect - Run a callback function when de-select this option
     * @params {onSelectCallback} props.onSelect - Run callback function when click select this option
     * @params {string} props.description - Description part in the UI
     * @params {string} props.imageSource - URL string to populate <img> src attribute
     * @params {string} props.title - The title for this Widget Option in the UI
     */
    function WidgetOption(element, props) {
        Components.Component.call(this, element, props);

        // Initial state
        this.setState({
            enable: true,
            select: false,
        });

        // Copy props into state
        this.setState(this.props);
    }

    WidgetOption.prototype = Object.create(Components.Component.prototype);
    WidgetOption.prototype.constructor = WidgetOption;

    WidgetOption.prototype.isSelected = function () {
        return this.state.select;
    };

    WidgetOption.prototype.select = function () {
        this.setState({
            select: true,
        });
        return this;
    };

    WidgetOption.prototype.deselect = function () {
        this.setState({
            select: false,
        });
        return this;
    };

    WidgetOption.prototype.enable = function () {
        this.setState({
            enable: true,
        });
        return this;
    };

    WidgetOption.prototype.disable = function () {
        this.setState({
            enable: false,
        });

        return this;
    };

    WidgetOption.prototype.render = function (newProps) {
        Components.Component.prototype.render.call(this, newProps);

        function onSelect() {
            if (this.state.enable) {
                this.setState({
                    select: !this.state.select,
                });

                this
                    .element
                    .css(
                        'background-color',
                        this.state.select
                            ? 'LightSkyBlue'
                            : 'white'
                    );

                if (this.state.select) {
                    var returnObj = this.props.returnObject;
                    returnObj.id = this.props.returnObject.id
                        || this.props.id;

                    this.props.onSelect(returnObj);
                } else {
                    this.props.onDeselect(this.props.id);
                }
            }
        }

        this
            .element
            .css(
                'opacity',
                this.state.enable
                    ? '1'
                    : '0.5'
            )
            .css(
                'background-color',
                this.state.select
                    ? 'LightSkyBlue'
                    : 'white'
            )
            .off()
            .html('');

        if (this
            .props
            .icon
        ) {
            this
                .element
                .append(
                    $('<i aria-hidden="true"></i>')
                        .css({
                            'margin': '30px 10px',
                            'vertical-align': 'top',
                        })
                        .addClass(
                            this
                                .props
                                .icon
                        )
                );

        } else {
            this
                .element
                .append($('<img />')
                    .css('vertical-align', 'top')
                    .css('margin', '30px 10px')
                    .attr('src', this.props.imageSource))
        }

        this
            .element
            .append($('<div>' +
                '<h3>' + this.props.title + '</h3>' +
                '<div>' + this.props.title + '</div>' +
                // '<div>' + this.props.description + '</div>' + // TODO: temporariy set description === title
                '</div>')
                .css('display', 'inline-block')
                .css('margin', '10px')
                .css('width', 'calc(100% - 140px)'))
            .on('click', onSelect.bind(this));

        return this;
    };

    return WidgetOption;
}));