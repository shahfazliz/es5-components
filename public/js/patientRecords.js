/* global $, Components */

'use strict';

$(document).ready(function () {
    // Build the patient records table
    var PatientRecordsTable = new Components.Table(
        '#patient-records',
        {
            columns: [
                'Date',
                'Time',
                'Patient',
                'Doctor',
                'Diagnosis',
                'Treatment',
            ],
            rows: [],
            title: 'Patient Records',
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
                            diagnosis: patientRecord.diagnosis,
                            doctor: patientRecord.doctor,
                            patient: patientRecord.patient,
                            time: `${date.getHours()}:${date.getMinutes()}`,
                            treatment: patientRecord.treatment,
                        };

                        return newPatientRecord;
                    }),
            });
        });

    var selectDoctorField = {
        defaultValue: '1',
        label: 'Doctor',
        options: [],
        required: true,
        type: 'select',
    };

    var selectPatientField = {
        defaultValue: '1',
        label: 'Patient',
        options: [],
        required: true,
        type: 'select',
    };

    var enterDiagnosisField = {
        defaultValue: '',
        label: 'Diagnosis',
        placeholder: 'Enter diagnosis',
        required: true,
        type: 'textarea',
    };

    var enterTreatmentField = {
        defaultValue: '',
        label: 'Treatment',
        placeholder: 'Enter treatment',
        required: true,
        type: 'textarea',
    };

    // Build the form to fill the patient records
    var patientRecordForm = new Components.Form(
        '#patient-records-form',
        {
            fields: [
                selectDoctorField,
                selectPatientField,
                enterDiagnosisField,
                enterTreatmentField,
            ],
            onSubmitCallback: function (result) {
                new Components
                    .Request({
                        data: {
                            diagnosis: result.Diagnosis,
                            doctor_id: result.Doctor,
                            patient_id: result.Patient,
                            treatment: result.Treatment,
                        },
                        url: 'https://hospitalapi-shahfazliz.c9users.io:8081/api/patient_records/',
                    })
                    .post(function () {
                        patientRecordRequester.get();
                    });
            },
            title: 'Add Patient Record',
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
                    enterTreatmentField,
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
                    enterTreatmentField,
                ],
            });
        });
});
