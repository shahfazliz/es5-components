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
    
    if ($('#main-content').length) {
        new Components
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
    }
});