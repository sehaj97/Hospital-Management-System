async function patientEditFormHandler(event) {
    event.preventDefault();
    const PatientName = document.querySelector('#patient-name').value.trim();
    const PatientStatus = document.querySelector('#pateint-status').value.trim();
    const PatientType = document.querySelector('#patient-type').value.trim();
    const prescription = document.querySelector('#prescription').value.trim();
    const diagnosis = document.querySelector('#diagnosis').value.trim();
    const reports = document.querySelector('#reports').value.trim();
    const isVaccinated = document.querySelector('#isVaccinated').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
 
    if (PatientName && PatientStatus && PatientType && prescription && diagnosis && reports && isVaccinated) {
        const response = await fetch(`/api/patients/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            PatientName,
            PatientStatus,
            PatientType,
            prescription,
            diagnosis,
            reports,
            isVaccinated
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          document.location.replace('/Medisearch/Patients/View');
        } else {
          alert(response.statusText);
        }
      }
}
 
document.querySelector('.patient-form').addEventListener('submit', patientEditFormHandler);