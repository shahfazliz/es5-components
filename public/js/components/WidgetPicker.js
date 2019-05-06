(function(root, factory) {

    root.Components.WidgetPicker = factory(root.Components);

}(window, function(Components) {
    'use strict';

    /**
     * Create Widget Picker for the Dashboard
     * @callback onSubmitCallback
     * @callback onCloseCallback
     *
     * @params {string|jQuery} element- DOM container/element that we want to re-create Widget Picker
     * @params {Object} props={} - Widget Picker's properties for this element
     * @params {onCloseCallback} [props.onClose] - Override Widget Picker's on close event
     * @params {onSubmitCallback} [props.onSubmit] - Widget Picker's on submit event
     * @params {number} props.max - Maximum widget can be selected before it's they are disabled
     * @params {Object[]} [props.options] - Widget Options in the Widget Picker
     */
    function WidgetPicker(element, props) {
        Components.Component.call(this, element, props);

        // Initialize options selected
        this.setState({
            optionSelected: [],
        });

        this.initWidgetOptions();
    }

    WidgetPicker.prototype = Object.create(Components.Component.prototype);
    WidgetPicker.prototype.constructor = WidgetPicker;

    WidgetPicker.prototype.initWidgetOptions = function () {
        this.widgetOptions = this
            .props
            .options
            .map(function (option, index) {
                return new Components.WidgetOption(
                    '<div>',
                    {
                        description: option.description,
                        enable: option.enable || false,
                        icon: option.icon,
                        id: option.id || index,
                        imageSource: option.imageSource,
                        onDeselect: function (id) {
                            this.setState({
                                optionSelected: this
                                    .state
                                    .optionSelected
                                    .filter(function (opt) {
                                        return opt.id !== id;
                                    }),
                            });

                            // Enable the rest of the option and remove notification
                            if (this.props.max > this.state.optionSelected.length) {
                                this
                                    .widgetOptions
                                    .forEach(function (opt) {
                                        if (!opt.isSelected()) {
                                            opt
                                                .enable()
                                                .render();
                                        }
                                    });

                                this
                                    .warningNotification
                                    .hide();
                            }
                        }.bind(this),
                        onSelect: function (returnObj) {
                            this.setState({
                                optionSelected: this
                                    .state
                                    .optionSelected
                                    .concat(returnObj),
                            });

                            // Disable the rest of the option and enable notification
                            if (this.props.max <= this.state.optionSelected.length) {
                                this.widgetOptions.forEach(function (opt) {
                                    if (!opt.isSelected()) {
                                        opt
                                            .disable()
                                            .render();
                                    }
                                });

                                this
                                    .warningNotification
                                    .show();
                            }
                        }.bind(this),
                        returnObject: option.returnObject,
                        title: Translator.trans(
                            option.title,
                            {limit: '-'}
                        ),
                    }
                ).render();
            }, this);

        return this.widgetOptions;
    };

    WidgetPicker.prototype.initModalBox = function () {
        // Create submit widget and attach the onSubmit callback
        var submitWidgetPickerButton = $('<button class="btn btn-primary">')
            .append(Translator.trans('button.submit'))
            .off()
            .on('click', function () {
                this.props.onSubmit(this.state.optionSelected);
            }.bind(this));

        // Create notification element
        this.warningNotification = $('<div class="alert alert-warning" role="alert">')
            .append(Translator.trans('common_interface.dashboard.message.maximum_widgets_selected'))
            .hide();

        // Create cancel widget and attach the onCancel callback
        var cancelWidgetPickerButton = $('<button class="btn btn-primary">')
            .append(Translator.trans('button.cancel'))
            .off()
            .on('click', this.props.onCancel);

        // Initialize the ModalBox
        this.modalBox = new Components.ModalBox(
            this.element,
            {
                children: this.widgetOptions.length
                    ? this.widgetOptions
                    : [$('<div>').append(Translator.trans('dashboards.message.error_no_widgets'))],
                footer: $('<div>')
                    .append(submitWidgetPickerButton)
                    .append(cancelWidgetPickerButton),
                header: Translator.trans('common_interface.dashboard.widget_picker'),
                id: 'widgetPicker',
                notification: this.warningNotification,
                onHidden: function () {
                    // Reset selection
                    this.setState({
                        optionSelected: [],
                    });

                    // Remove notification
                    this
                        .warningNotification
                        .hide();

                }.bind(this),
            });

        return this.modalBox;
    };

    WidgetPicker.prototype.show = function () {
        // Check again if max allowed to select is less than 0
        this
            .widgetOptions
            .forEach(function (opt) {
                if (this.props.max <= 0) {
                    opt.disable();
                } else if (opt.props.enable) {
                    opt.enable();
                }

                opt
                    .deselect()
                    .render();
            }.bind(this));

        this
            .modalBox
            .show();
    };

    WidgetPicker.prototype.render = function (newProps) {
        Components.Component.prototype.render.call(this, newProps);

        // Destroy ModalBox if already exists
        if (this.modalBox) {
            this
                .modalBox
                .destroy();
        }

        this
            .initModalBox()
            .render();

        return this;
    };

    return WidgetPicker;
}));