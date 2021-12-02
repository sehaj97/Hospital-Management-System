async function patientFormHandler(event) {
    event.preventDefault();
    const PatientName = document.querySelector('#patient-name').value.trim();
    // const PatientMedid = document.querySelector('#patient-medid').value.trim();
    const PatientStatus = document.querySelector('#patient-status').value.trim();
    const PatientType = document.querySelector('#patient-type').value.trim();
    const prescription = document.querySelector('#prescription').value.trim();
    const diagnosis = document.querySelector('#diagnosis').value.trim();
    const reports = document.querySelector('#reports').value.trim();
    const isVaccinated = document.querySelector('#isVaccinated').value.trim();

    if (PatientName && PatientStatus && PatientType && prescription && diagnosis && reports && isVaccinated) {
        const response = await fetch('/api/patients', {
          method: 'post',
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
          document.location.replace('/api/patients');
        } else {
          alert(response.statusText);
        }
      }
}
  document.querySelector('.patient-form').addEventListener('submit', patientFormHandler);