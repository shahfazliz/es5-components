'use strict';

$(document).ready(function() {
    this.state = {
        maxWidgetToSelect: 3,
        selectedWidgetsLaa: [],
    };

    this.widgetProps = {
        max: this.state.maxWidgetToSelect,
        onSubmit: function(selectedWidgets) {
            // TODO: use this as output of the widget picker
            this.state.selectedWidgetsLaa = this.state.selectedWidgetsLaa.concat(selectedWidgets);
            console.log('selectedWidgets', this.state.selectedWidgetsLaa);
        }.bind(this),
        options: [
            // TODO: Example of widget options
            {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                enable: true,
                imageSource: 'https://via.placeholder.com/100',
                returnObject: {
                    charType: 'area', //this is available on charts only
                    endDate: '2019-01-31 00:00:00',
                    gridSize: '12',
                    service: 'wcf',
                    serviceData: 'allowed_denied',
                    startDate: '2019-01-01 00:00:00',
                    title: 'Widget',
                    widgetType: 'chart',
                },
                title: 'Title',
            }, {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                enable: true,
                imageSource: 'https://via.placeholder.com/100',
                returnObject: {
                    charType: 'area', //this is available on charts only
                    endDate: '2019-01-31 00:00:00',
                    gridSize: '12',
                    service: 'wcf',
                    serviceData: 'allowed_denied',
                    startDate: '2019-01-01 00:00:00',
                    title: 'Widget',
                    widgetType: 'chart',
                },
                title: 'Title2',
            },
        ],
    };

    // Reset Dashboard Button
    var resetDashboardButton = $('<button class="btn btn-primary">' +
        Translator.trans('common_interface.dashboard.reset_dashboard') +
    '</button>')
    .off()
    .on('click', function() {
        // TODO: Reset dashboard
    }.bind(this));

    // Pop up widget picker modal box
    var addWidgetButton = $('<button class="btn btn-primary">' +
        Translator.trans('common_interface.dashboard.add_widget') +
    '</button>')
    .off()
    .on('click', function() {
        this
            .widgetPicker
            .render({
                max: this.state.maxWidgetToSelect - this.state.selectedWidgetsLaa.length,
            })
            .show();
    }.bind(this));

    this.widgetPicker = new Components.WidgetPicker(
        '<div></div>',
        this.widgetProps
    ).render();

    new Components.Dashboard(
        $('#sample-dashboard'),
        {
            children: [
                new Components.ChartWidget(
                    '<div id="testTwo"></div>',
                    {
                        data: {
                            columns: [
                                ['Allowed', 30],
                                ['Blocked', 50],
                            ],
                            type: 'bar',
                        },
                        id: Math.ceil(Math.random() * 10000),
                        title: 'IDPS Allowed/Blocked',
                    }
                ).render(),
            ],
            control: $('<div class="row align-right"></div>')
                .append(resetDashboardButton)
                .append(addWidgetButton),
            id: 'my-dashboard',
            name: 'My Dashing Dashboard',
        }
    ).render();

    return this;
});