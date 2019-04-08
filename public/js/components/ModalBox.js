(function(root, factory) {

    root.Components.ModalBox = factory(
        root.$,
        root.Components
    );

}(window, function(
    $,
    Components
) {
    'use strict';

    /**
     * Create a ModalBox and append to the html body
     * @callback onShowCallback
     * @callback onShownCallback
     * @callback onHideCallback
     * @callback onHiddenCallback
     *
     * @param {Object} [props={}] - Modal box's properties for this element
     * @param {onHiddenCallback} [props.onHidden] - Execute function when the modal has finished being hidden from the user (will wait for CSS transitions to complete)
     * @param {onHideCallback} [props.onHide] - Execute function immediately when the hide instance method is called
     * @param {onShownCallback} [props.onShow] - Execute function immediately when the show instance method is called
     * @param {onShowCallback} [props.onShown] - Execute function when the modal has been made visible to the user (will wait for CSS transitions to complete)
     * @param {string[]|jQuery[]} [props.children] - Children of this element we want to append in this modal box's body
     * @param {string|jQuery} [props.footer] - Pass another DOM element for this modal box's footer
     * @param {string|jQuery} [props.header] - Pass another DOM element for this modal box's header
     * @param {string|jQuery} element - DOM container/element we want to re-create this modal box
     * @param {string} props.id - Unique Id of this element
     * @param {string} props.name - Name for this DOM element
     */
    function ModalBox(element, props) {
        Components.Component.call(this, element, props);

        this.setState(this.props);

        this
            .element
            .attr('class', 'modal bootstrap-dialog type-primary fade size-wide in')
            .attr('id', this.props.id)
            .attr('tabindex', '-1')
            .on(
                'show.bs.modal',
                this
                    .props
                    .onShow)
            .on(
                'shown.bs.modal',
                this
                    .props
                    .onShown)
            .on(
                'hide.bs.modal',
                this
                    .props
                    .onHide)
            .on(
                'hidden.bs.modal',
                this
                    .props
                    .onHidden);
    }

    ModalBox.prototype = Object.create(Components.Component.prototype);
    ModalBox.prototype.constructor = ModalBox;

    ModalBox.prototype.show = function() {
        this
            .element
            .modal('show');

        return this;
    };

    ModalBox.prototype.hide = function() {
        this
            .element
            .modal('hide');

        return this;
    };

    ModalBox.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);

        function renderHeader(header) {
            if (!header) {
                return '';
            }
            
            return $('<div class="modal-header">')
                .append($('<div class="bootstrap-dialog-header">')
                    .append('<div class="bootstrap-dialog-close-button">' +
                            '<button ' +
                                'aria-label="close" ' +
                                'class="close" ' +
                                'data-dismiss="modal">x</button>' +
                        '</div>'
                    )
                    .append($('<div class="bootstrap-dialog-title" id="device-health-selector-modal_title">')
                        .append(header)));
        }

        function renderBody(children) {
            var modalBody = $('<div class="modal-body"></div>')
                .css('min-height', '5em');

            // Children are in an array
            if (children.length && children.forEach) {
                children.forEach(function(child) {
                    if(child.element) {
                        modalBody.append(child.element);
                    } else {
                        modalBody.append(child);
                    }
                }.bind(this));
            }
            
            // A single child without an array
            else if (children.length) {
                modalBody.append(children);
            }
            
            // Children is empty
            else {
                modalBody.modalSpinner('on');
            }

            return modalBody;
        }

        function renderFooter(footer) {
            if (!footer) {
                return '';
            }
            
            var footers = $(('<div class="modal-footer"></div>'))
                .append(footer)
                .find('button')
                .attr('data-dismiss', 'modal');

            return $('<div class="modal-footer"></div>').append(footers);
        }

        var modalContent = $('<div class="modal-content cs-modal-with-header"></div>')
            .append(renderHeader(this
                .props
                .header))
            .append(renderBody(this
                .props
                .children))
            .append(renderFooter(this
                .props
                .footer));

        this
            .element
            .html('')
            .append(
                $('<div class="modal-dialog modal-lg"></div>')
                    .append(modalContent));

        $('body').append(this.element);

        return this;
    };

    return ModalBox;
}));