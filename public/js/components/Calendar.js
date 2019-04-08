(function(root, factory) {
    
    root.Components.Calendar = factory(
        root.$,
        root.Components
    );
    
}(window, function(
    $,
    Components
) {
    /**
     * @params {number} props.days=1
     */
    function Calendar(element, props) {
        Components.Component.call(this, element, props);
        
        this.props.days = this.props.days || 1;
    }
    Calendar.prototype = Object.create(Components.Component.prototype);
    Calendar.prototype.constructor = Calendar;
    
    Calendar.prototype.render = function(newProps) {
        Components.Component.prototype.render.call(this, newProps);
        
        var startTimeSlot  = this
            .moment()
            .hour(10)
            .minute(0)
            .second(0);
        
        var lastTimeSlot = this
            .moment()
            .hour(21)
            .minute(30)
            .second(0);

        // Set timeslots
        var timeSlots = {};
        var nextTimeSlot = startTimeSlot;
        
        while(nextTimeSlot.isSameOrBefore(lastTimeSlot)) {
            timeSlots[this.moment(nextTimeSlot).format("YYYY-MM-DD HH:mm:ss")] = '';
            nextTimeSlot = nextTimeSlot.add(30, 'minutes');
        }
        
        timeSlots = this.assign(timeSlots, this.props.appointments);
        
        function createOneDayView() {
            return $('<div>')
                .append(Object
                        .keys(timeSlots)
                        .map(function(dateTime) {
                            
                            var row = $('<div style="margin:5px; border-bottom:1px grey solid;">')
                                .append(this.moment(dateTime).format('HH:mm'));
                            
                            if (timeSlots[dateTime].with && timeSlots[dateTime].description) {
                                row.append('<span> ' + timeSlots[dateTime].with + ' - ' + timeSlots[dateTime].description + '</span>');
                            }
                            
                            return row;
                        })
                    );
        }
        
        // One day view
        var oneDayView = createOneDayView();
            
        this
            .element
            .css('text-align', 'left')
            .html('')
            .append($('<div>')
                .append($('<span>' + startTimeSlot.format("DD/MM/YYYY") + '</span>'))
                .append($(`
                    <button class="btn btn-link">
                        <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                    </button>`))
                .append($(`
                    <button class="btn btn-link">Today</button>`))
                .append($(`
                    <button class="btn btn-link">
                        <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                    </button>`))
            );
            
        for (var i = 0; i < this.props.days; i++) {
            var clonedDay = oneDayView.clone(true);
            clonedDay
                .css('display', 'inline-block')
                .css('background-color', 'white')
                .css('margin', '5px')
                .css('width', 'calc(100% / ' + this.props.days + ' - 5px * ' + this.props.days + ')');
                
            this
                .element
                .append(clonedDay);
        }
            
        return this;
    };
    
    return Calendar;
}));