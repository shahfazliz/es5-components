/* global $, Components */

'use strict';

$(document).ready(function() {
    var Component = new Components.Component();
    
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
    Component.request({
        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
        method: 'GET',
        success: function(data) {
            PatientRecordsTable.render({
                rows: data
                    .data
                    .map(function (patientRecord) {
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
                    }
                ),
            });
        },
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
                console.log(result);
                Component.request({
                    url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
                    method: 'POST',
                    data: {
                        patient_id: result.Patient,
                        doctor_id: result.Doctor,
                        diagnosis: result.Diagnosis,
                        treatment: result.Treatment,
                    },
                    success: function (data) {
                        console.log(data);
                    },
                });
            },
        }
    );
        
    // Get list of doctors
    Component.request({
        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/doctors/',
        method: 'GET',
        success: function (data) {
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
        }
    });
    
    // Get list of patients
    Component.request({
        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patients/',
        method: 'GET',
        success: function (data) {
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
        },
    });
});
