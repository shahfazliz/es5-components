(function(root, factory){

    root.Components.ChartWidget = factory(root.Components);

}(window, function(Components){
    'use strict';

    function ChartWidget(element, props) {
        Components.Component.call(this, element, props);

        // Copy props into state
        this.setState(this.props);
    }

    ChartWidget.prototype = Object.create(Components.Component.prototype);
    ChartWidget.prototype.constructor = ChartWidget;

    ChartWidget.prototype.generateChart = function () {
        var formattedProps = this.assign({}, this.props);

        delete formattedProps.children;

        return c3.generate(formattedProps);
    };

    ChartWidget.prototype.render = function (newProps) {
        Components.Component.prototype.render.call(this, newProps);

        this.element = $(this
            .generateChart(
                this
                    .props
                    .id
            )
            .element);

        return this;
    };

    return ChartWidget;
}));