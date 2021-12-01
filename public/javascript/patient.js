async function patientFormHandler(event) {
    event.preventDefault();
    const PatientName = document.querySelector('#patient-name').value.trim();
    // const PatientMedid = document.querySelector('#patient-medid').value.trim();
    const PatientStatus = document.querySelector('#patient-status').value.trim();
    // if (PatientName && PatientMedid) {
    if (PatientName && PatientStatus) {
        const response = await fetch('/api/patients', {
          method: 'post',
          body: JSON.stringify({
            PatientName,
            // PatientMedid,
            PatientStatus
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