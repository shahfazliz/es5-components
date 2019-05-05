/* global $, Components */

$(document).ready(function() {
    new Components
        .NavBar(
            '.hospital-navigations', 
            {
                brand: 
                    `<img
                        alt=""
                        src="logo.jpg"
                        width="40"
                        height="40"
                        style="display:inline-block; vertical-align: top; margin-top: -10px;"
                    />`,
                children: [
                    `<a href="packages.html">Packages</a>`,
                    `<a href='appointments.html'>Appointments</a>`,
                    `<a href="patient_records.html">Patient Records</a>`,
                    `<a href='notifications.html'>Notifications</a>`,
                ],
            },
        )
        .render();
    
    var Component = new Components.Component();
    
    if ($('#hospital-packages').length) {
        Component.request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/packages/',
            method: 'GET',
            success: function(data) {
                var makeAppointmentButton = $(`
                    <button class='btn btn-primary' style='margin-top:5px;'>
                        <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> Make Appointment
                    </button>`)
                    .on('click', function(event) {
                        event.stopPropagation();
                        
                        var doctorSelector = $(`
                            <div>Set Appointment with
                                <select>
                                    <option>Dr. Azimah</option>
                                    <option>Dr. Renu</option>
                                </select>
                            </div>
                        `);
                        
                        var appointmentModalBox = new Components
                            .ModalBox('<div>', {
                                header: doctorSelector,
                            })
                            .render()
                            .show();
                        
                        var startDateTime = Component
                            .moment()
                            .hour(10)
                            .minute(0)
                            .second(0)
                            .utcOffset(0)
                            .format("YYYY-MM-DD HH:mm:ss");
                            
                        var endDateTime = Component
                            .moment()
                            .hour(22)
                            .minute(0)
                            .second(0)
                            .utcOffset(0)
                            .format("YYYY-MM-DD HH:mm:ss");
                        
                        Component.request({
                            url: `https://hospitalapi-shahfazliz.c9users.io:8081/api/appointments/doctor/1/${startDateTime}/${endDateTime}`,
                            method: 'GET',
                            success: function(data) {
                                appointmentModalBox.render({
                                    children: [new Components
                                        .Calendar('<div>', {
                                            appointments: data
                                                .data
                                                .reduce(function(acc, appointment) {
                                                    acc[Component.moment(appointment.date_time).format("YYYY-MM-DD HH:mm:ss")] = {
                                                        with: appointment.patient_name,
                                                        description: appointment.description,
                                                    };
                                                    return acc;
                                                }, {}),
                                        })
                                        .render()],
                                });
                            },
                        });
                    });
                
                $('#hospital-packages')
                    .append(data
                        .data
                        .map(function(package) {
                            return $('<div class="card-style">')
                                .hover(function() {
                                    $(this).css('box-shadow', '1px 3px 5px grey');
                                }, function() {
                                    $(this).css('box-shadow', '');
                                })
                                .on('click', function(event) {
                                    event.stopPropagation();
                                    new Components
                                        .ModalBox('<div>', {
                                            children: '<img src="public/images/' + package.image + '" style="width:100%;" />',
                                        })
                                        .render()
                                        .show();
                                })
                                .append('<img src="public/images/' + package.image + '" style="width:100%; height: auto;" />')
                                .append($(`
                                    <div>
                                        <div style='margin-top:5px; font-size:110%;'>${package.name}</div>
                                        <div style='margin-top:5px; color:Purple; font-size:140%;'>${Component.currencyFormat('RM', package.price)}</div>
                                    </div>`)
                                        .append(makeAppointmentButton.clone(true)));
                        }.bind(this))
                    );
            },
        });
    }
    
    if ($('#hospital-appointments').length) {
        new Components
            .Calendar('#hospital-appointments', {
                days: 3,
            })
            .render();
    }
    
    if ($('#main-content').length) {
        var testForm = new Components
            .Form('#main-content', {
                title: 'Form Example',
                fields: [{
                    type: 'text', 
                    label: 'Name',
                    defaultValue: '', 
                    placeholder: 'Enter name', 
                    required: true,
                }, {
                    type: 'select',
                    label: 'Device',
                    defaultValue: '2',
                    options: [{
                        label: 'D1',
                        value: '1'
                    }, {
                        label: 'D2',
                        value: '2',
                    }],
                    required: true,
                }],
                onSubmitCallback: function (result) {
                    console.log(result);
                },
            })
            .render();
        
        // console.log('testForm.test', testForm.test);
        // console.log('testForm.setTest()', testForm.setTest({hello: 'world',}));
        // console.log('testForm.test', testForm.test);
    }
});