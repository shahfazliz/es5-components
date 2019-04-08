(function(root, factory) {
    
    root.Components.Form = factory(
        root.$,
        root.Components
    );
    
}(window, function(
    $,
    Components
) {
    'use strict';

    /**
     * @params {string} props.title - Title of this form
     */
    function Form(element, props) {
        Components.Component.call(this, element, props);
    }
    Form.prototype = Object.create(Components.Component.prototype);
    Form.prototype.constructor = Form;
    
    Form.prototype.createField = function(type, label, name, value, placeholder, required) {
        return $('<div class="row"></div>')
            .append('<label class="col-sm-2">' + label + ':</label>')
            .append('<input class="col-sm-4" type="' + type + '" name="' + name + '" value="' + value + '" placeholder="' + placeholder + '"/>')
            .append(required
                ? '<div style="color: red;">*</div>'
                : '');
    };
    
    Form.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);
        
        this
            .element
            .html('')
            .append('<h3>' + this.props.title + '</h3>')
            .append($('<form>')
                .append(this.createInputField()));
    };
    
    return Form;
}));