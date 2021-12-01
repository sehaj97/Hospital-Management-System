async function patientFormHandler(event) {
    event.preventDefault();
    const PatientName = document.querySelector('#patient-name').value.trim();
    // const PatientMedid = document.querySelector('#patient-medid').value.trim();
    const PatientStatus = document.querySelector('#patient-status').value.trim();
    // const isIPD = document.querySelector('#isIPD').value.trim();
    // const isOPD = document.querySelector('#isOPD').value.trim();
    // const prescription = document.querySelector('#prescription').value.trim();
    // const diagnosis = document.querySelector('#diagnosis').value.trim();
    // const reports = document.querySelector('#reports').value.trim();


    // if (&& PatientMedid && diagnosis && reports ) {
    if (PatientName && PatientStatus) {
        const response = await fetch('/api/patients', {
          method: 'post',
          body: JSON.stringify({
            PatientName,
            // PatientMedid,
            PatientStatus,
            // isIPD,
            // isOPD,
            // prescription, 
            // diagnosis,
            // reports
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