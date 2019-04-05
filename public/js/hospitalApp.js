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
                ],
            },
        )
        .render();
    
    var Component = new Components.Component();
    
    if ($('#patient-records').length) {
        Component.request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
            method: 'GET',
            success: function(data) {
                new Components
                    .Table(
                        `#patient-records`,
                        {
                            title: 'Patient Records',
                            columns: [
                                'Date',
                                'Time',
                                'Patient',
                                'Doctor',
                                'Diagnosis',
                                'Treatment',
                            ],
                            rows: data.data.map(function(patientRecord) {
                                var date = new Date(patientRecord.created_at);
                                
                                var newPatientRecord = {
                                    date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
                                    time: `${date.getHours()}:${date.getMinutes()}`,
                                    patient: patientRecord.patient,
                                    doctor: patientRecord.doctor,
                                    diagnosis: patientRecord.diagnosis,
                                    treatment: patientRecord.treatment,
                                };
                                
                                return newPatientRecord;
                            })
                        }
                    )
                    .render();
            },
        });
    }
});