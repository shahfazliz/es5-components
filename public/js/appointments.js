/* global $, Components */

$(document).ready(function() {
    var Component = new Components.Component();
    
    var patientAppointments = new Components.Calendar(
        '#hospital-appointments', 
        {
            days: 3,
        }
    );
        
    Component.request({
        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/appointments/',
        method: 'GET',
        success: function(data) {
            console.log(data);
            patientAppointments.render({
                appointments: [],
            });
        },
    });
});