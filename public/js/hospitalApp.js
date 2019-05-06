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
});