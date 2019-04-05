function Translator() {
    this.en = {
        common_interface: {
            dashboard: {
                add_widget: 'Add Widget',
                reset_dashboard: 'Reset Dashboard',
                widget_picker: 'Widget Picker',
            }
        }
    };
}

Translator.prototype.trans = function(path, translationObj = this.en) {
    let keys = path.split('.');
    let firstElement = keys.shift();

    if (!keys.length) {
        return translationObj[firstElement]
            ? translationObj[firstElement]
            : firstElement;
    }
    else {
        return this.trans(keys.join('.'), translationObj[firstElement]);
    }
};

// TODO: Remove this HACK
var Translator = new Translator();