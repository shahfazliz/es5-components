(function(root, factory) {

    root.Components.DashboardPanel = factory(root.Components);

}(window, function(Components) {
    'use strict';

    function DashboardPanel(element, props) {
        Components.Component.call(this, element, props);

        this.setState(this.props);
    }

    DashboardPanel.prototype = Object.create(Components.Component.prototype);
    DashboardPanel.prototype.constructor = DashboardPanel;

    DashboardPanel.prototype.removeContent = function (content) {
        this
            .props
            .panel
            .removeContent(content);

        return this;
    };

    DashboardPanel.prototype.addContent = function (content) {
        this
            .props
            .panel
            .addContent(content);

        return this;
    };

    DashboardPanel.prototype.spinner = function (visibility) {
        this
            .props
            .panel
            .getContent()
            .modalSpinner(visibility);

        return this;
    };

    DashboardPanel.prototype.refresh = function () {
        this.props.refreshButton.trigger('click');
    };

    DashboardPanel.prototype.getProperties = function () {
        return this.props;
    };

    DashboardPanel.prototype.render = function (newProps) {
        Components.Component.prototype.render.call(this, newProps);

        var self = this,
            properties = self.props,
            button = $('<button class="btn btn-default btn-xs"></button>'),

            editButton = button
                .clone(true)
                .append('<i class="icon icon-pencil" aria-hidden="true"></i>')
                .on('click', function (e) {
                    self.props.onClickEdit(e);
                }),

            refreshButton = button
                .clone(true)
                .append('<i class="icon icon-refresh" aria-hidden="true"></i>')
                .on('click', function (e) {
                    self.props.onClickRefresh(e);
                }),

            removeButton = button
                .clone(true)
                .append('<i class="icon icon-trash" aria-hidden="true"></i>')
                .on('click', function (e) {
                    self.props.onClickRemove(e);
                }),

            actionButtonsContainer = $('<span class="btn-group action-buttons-container pull-right"></span>')
                .append(editButton)
                .append(refreshButton)
                .append(removeButton),

            panel = new Components.Panel(
                '<div class="panel panel-default" draggable="true"></div>',
                {
                    id: this.props.id,
                    heading: properties.heading,
                    actionButtons: actionButtonsContainer,
                }
            )
                .render();

        properties.editButton = editButton;
        properties.refreshButton = refreshButton;
        properties.panel = panel;
        properties.actionButtonsContainer = actionButtonsContainer;

        properties
            .children
            .push(
                panel
                    .element
                    .get(0)
            );

        self
            .element
            .append(properties.children);

        return self;
    };

    return DashboardPanel;
}));