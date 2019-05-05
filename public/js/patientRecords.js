/* global $, Components */

'use strict';

$(document).ready(function() {
    // Build the patient records table
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
    
    // Request patient records and populate table
    var patientRecordRequester = new Components
        .Request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
        })
        .get(function (data) {
            PatientRecordsTable.render({
                rows: data
                    .data
                    .map(function (patientRecord) {
                        var date = new Date(patientRecord.created_at);
                        
                        var newPatientRecord = {
                            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                            time: `${date.getHours()}:${date.getMinutes()}`,
                            patient: patientRecord.patient,
                            doctor: patientRecord.doctor,
                            diagnosis: patientRecord.diagnosis,
                            treatment: patientRecord.treatment,
                        };
                        
                        return newPatientRecord;
                    }
                ),
            });
        });
    
    var selectDoctorField = {
        type: 'select',
        label: 'Doctor',
        defaultValue: '1',
        options: [],
        required: true,
    };
    
    var selectPatientField = {
        type: 'select',
        label: 'Patient',
        defaultValue: '1',
        options: [],
        required: true,
    };
    
    var enterDiagnosisField = {
        type: 'textarea', 
        label: 'Diagnosis',
        defaultValue: '', 
        placeholder: 'Enter diagnosis', 
        required: true,
    };
    
    var enterTreatmentField = {
        type: 'textarea', 
        label: 'Treatment',
        defaultValue: '', 
        placeholder: 'Enter treatment', 
        required: true,
    };
    
    // Build the form to fill the patient records
    var patientRecordForm = new Components.Form(
        '#patient-records-form', 
        {
            title: 'Add Patient Record',
            fields: [
                selectDoctorField, 
                selectPatientField, 
                enterDiagnosisField, 
                enterTreatmentField
            ],
            onSubmitCallback: function (result) {
                new Components
                    .Request({
                        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
                        data: {
                            patient_id: result.Patient,
                            doctor_id: result.Doctor,
                            diagnosis: result.Diagnosis,
                            treatment: result.Treatment,
                        },
                    })
                    .post(function (data) {
                        patientRecordRequester.get();
                    });
            },
        }
    );
        
    // Get list of doctors
    new Components
        .Request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/doctors/',
        })
        .get(function (data) {
            // Repopulate select doctor's option field
            selectDoctorField.options = data
                .data
                .map(function (doctor) {
                    return {
                        label: doctor.name,
                        value: doctor.id,
                    };
                });
            
            patientRecordForm.render({
                fields: [
                    selectDoctorField, 
                    selectPatientField, 
                    enterDiagnosisField, 
                    enterTreatmentField
                ],
            });
        });
    
    // Get list of patients
    new Components
        .Request({
            url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patients/',
        })
        .get(function (data) {
            // Repopulate select patient's field
            selectPatientField.options = data
                .data
                .map(function (patient) {
                    return {
                        label: patient.name,
                        value: patient.id,
                    };
                });
            
            patientRecordForm.render({
                fields: [
                    selectDoctorField, 
                    selectPatientField, 
                    enterDiagnosisField, 
                    enterTreatmentField
                ],
            });
        });
});
