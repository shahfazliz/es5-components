/* global $, Components */

$(document).ready(function() {
    var Component = new Components.Component();
    
    var PatientRecordsTable = new Components.Table(
        '#patient-records',
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
            rows: []
        }
    );
    
    Component.request({
        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
        method: 'GET',
        success: function(data) {
            PatientRecordsTable.render({
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
                }),
            });
        },
    });
});
