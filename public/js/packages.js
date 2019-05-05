/* global $, Components */

'use strict';

$(document).ready(function() {
    var Component = new Components.Component();
    
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
        
    new Components
        .Request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/packages/',
        })
        .get(function(data) {
            $('#hospital-packages').append(data
                .data
                .map(function(pack) {
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
                                    children: '<img src="public/images/' + pack.image + '" style="width:100%;" />',
                                })
                                .render()
                                .show();
                        })
                        .append('<img src="public/images/' + pack.image + '" style="width:100%; height: auto;" />')
                        .append($(`
                            <div>
                                <div style='margin-top:5px; font-size:110%;'>${pack.name}</div>
                                <div style='margin-top:5px; color:Purple; font-size:140%;'>${Component.currencyFormat('RM', pack.price)}</div>
                            </div>`)
                            .append(makeAppointmentButton.clone(true)));
                }.bind(this))
            );
        });
});