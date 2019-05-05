/* global $, Components */

$(document).ready(function() {
    // Create Calendar
    var patientAppointments = new Components.Calendar(
        '#hospital-appointments', 
        {
            days: 3,
        }
    );
        
    new Components
        .Request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/appointments/',
        })
        .get(function(data) {
            console.log(data);
            patientAppointments.render({
                appointments: [],
            });
        });
});