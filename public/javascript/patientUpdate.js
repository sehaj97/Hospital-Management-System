async function updateFormHandler(event) {
    event.preventDefault();
    const patientId = document.querySelector('#patient-id').value.trim();

    window.location.replace('/Medisearch/Patients/edit/'+ patientId);
}
 

  async function patientEditFormHandler(event) {
    event.preventDefault();
    const PatientName = document.querySelector('#patient-name').value.trim();
    const PatientStatus = document.querySelector('#patient-status').value.trim();
    const PatientType = document.querySelector('#patient-type').value.trim();
    const prescription = document.querySelector('#prescription').value.trim();
    const diagnosis = document.querySelector('#diagnosis').value.trim();
    const reports = document.querySelector('#reports').value.trim();
    const isVaccinated = document.querySelector('#isVaccinated').value.trim();
    //const id = document.getElementById('input').value;
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

if(document.querySelector('.patient-form')){
    document.querySelector('.patient-form').addEventListener('submit', patientEditFormHandler);
}
if(document.querySelector('.update-form')){
    document.querySelector('.update-form').addEventListener('submit', updateFormHandler);
}