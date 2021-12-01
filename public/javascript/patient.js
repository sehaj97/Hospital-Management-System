async function patientFormHandler(event) {
    event.preventDefault();
    const PatientName = document.querySelector('#patient-name').value.trim();
    // const PatientId = document.querySelector('#patient-id').value.trim();
    // if (PatientName && PatientMSID) {

    if (PatientName) {
        const response = await fetch('/api/patients', {
          method: 'post',
          body: JSON.stringify({
            PatientName
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