(function(root, factory) {
    
    root.Components.Form = factory(
        root.$,
        root.Components,
        root.setTest
    );
    
}(window, function(
    $,
    Components,
    setTestLa
) {
    'use strict';

    /**
     * @params {string} props.title - Title of this form
     */
    function Form(element, props) {
        Components.Component.call(this, element, props);
        
        // Initialize state
        this.setState(this
            .props
            .fields
            .reduce(function (acc, field) {
                acc[field.label] = field.defaultValue;
                return acc;
            }.bind(this), {}));
    }
    Form.prototype = Object.create(Components.Component.prototype);
    Form.prototype.constructor = Form;
    
    /**
     * 
     */
    Form.prototype.createTextField = function(label, placeholder, defaultValue, required) {
        defaultValue = defaultValue || '';
        
        var labelElement = $('<label class="col-sm-2">')
            .append(label)
            .append(required
                ? '<label style="color: red;"> *</label>'
                : '')
            .append(' :');
        
        var errorElement = $('<label class="col-sm-6" style="color: red;">');
        
        var inputElement = $('<input class="col-sm-4" type="text" name="' + label.split(' ').join('_').toLocaleLowerCase() + '" value="' + defaultValue + '" placeholder="' + placeholder + '"/>')
            .on('change keyup paste mouseup', function (event) {
                if (required && !event.target.value) {
                    errorElement.html('Required field');
                }
                else {
                    errorElement.html('');
                }
                
                this.setState({
                    [label]: event.target.value,
                });
            }.bind(this));
            
        return $('<div class="row">')
            .append(labelElement)
            .append(inputElement)
            .append(errorElement);
    };
    
    Form.prototype.createTextArea = function(label, placeholder, defaultValue, required) {
        defaultValue = defaultValue || '';
        
        var labelElement = $('<label class="col-sm-2">')
            .append(label)
            .append(required
                ? '<label style="color: red;"> *</label>'
                : '')
            .append(' :');
        
        var errorElement = $('<label class="col-sm-6" style="color: red;">');
        
        var inputElement = $('<textarea class="col-sm-4" name="' + label.split(' ').join('_').toLocaleLowerCase() + '" placeholder="' + placeholder + '">' + defaultValue + '</textarea>')
            .on('change keyup paste mouseup', function (event) {
                if (required && !event.target.value) {
                    errorElement.html('Required field');
                }
                else {
                    errorElement.html('');
                }
                
                this.setState({
                    [label]: event.target.value,
                });
            }.bind(this));
            
        return $('<div class="row">')
            .append(labelElement)
            .append(inputElement)
            .append(errorElement);
    };
    
    Form.prototype.createSelectField = function(label, options, defaultValue, required) {
        
        var labelElement = $('<label class="col-sm-2">')
            .append(label)
            .append(required
                ? '<label style="color: red;"> *</label>'
                : '')
            .append(' :');
        
        var errorElement = $('<label class="col-sm-6" style="color: red;">');
        
        var selectElement = $('<select class="col-sm-4" name="' + label.split(' ').join('_').toLocaleLowerCase() + '">')
            .on('change mouseup', function (event) {
                this.setState({
                    [label]: event.target.value,
                });
            }.bind(this));
            
        if (!required) {
            selectElement.append('<option ' + 
                (defaultValue === '' 
                    ? 'selected ' 
                    : ' ') + 
                '></option>');
        }
        selectElement
            .append(options.map(function (option) {
                return '<option value="' + option.value + '" ' + (defaultValue === option.value ? 'selected' : '') + '>' + option.label + '</option>';
            }));
        
        return $('<div class="row">')
            .append(labelElement)
            .append(selectElement)
            .append(errorElement);
    };
    
    Form.prototype.createFormControl = function () {
        // Create submit button
        var submitButton = $('<button class="btn btn-primary">Submit</button>');
        
        // Toggle submitButton
        function toggleSubmitButton() {
            this
                .props
                .fields
                .some(function (field) {
                    if (field.required && !this.state[field.label]) {
                        submitButton.attr('disabled', true);
                        return true;
                    }
                    else {
                        submitButton.removeAttr('disabled');
                    }
                }.bind(this));
        }
        
        // Register observer to update submit button
        this.registerObserver('submitButton', toggleSubmitButton.bind(this));
        
        // Initialize the submitButton if it's suppose to enable or disabled
        toggleSubmitButton.call(this);
        
        return $('<div class="row">').append(submitButton);
    };
    
    Form.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);
        
        this
            .element
            .html('')
            .append('<h3>' + this.props.title + '</h3>')
            .append($('<form>')
                .on('submit', function (event) {
                    event.preventDefault();
                     this
                        .props
                        .onSubmitCallback(this.state);
                }.bind(this))
                .append(this
                    .props
                    .fields
                    .map(function (field) {
                        switch(field.type) {
                            case 'text':
                                return this.createTextField(
                                    field.label,
                                    field.placeholder,
                                    field.defaultValue,
                                    field.required);
                            case 'textarea':
                                return this.createTextArea(
                                    field.label,
                                    field.placeholder,
                                    field.defaultValue,
                                    field.required);
                            case 'select':
                                return this.createSelectField(
                                    field.label,
                                    field.options,
                                    field.defaultValue,
                                    field.required);
                        }
                    }.bind(this))
                )
                .append(this.createFormControl())
            );
            
        return this;
    };
    
    return Form;
}));