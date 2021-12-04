async function updateFormHandler(event) {
    event.preventDefault();
    const specialistId = document.querySelector('#specialist-id').value.trim();

    window.location.replace('/Medisearch/Specialists/edit/'+ specialistId);
}
 

  async function specialistEditFormHandler(event) {
    event.preventDefault();
    const SpecialistName = document.querySelector('#specialist-name').value.trim();
    const Speciality = document.querySelector('#speciality').value.trim();
    //const id = document.getElementById('input').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (SpecialistName && Speciality) {
        const response = await fetch(`/api/specialists/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            SpecialistName,
            Speciality
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          document.location.replace('/Medisearch/Specialists/View');
        } else {
          alert(response.statusText);
        }
      }
}

if(document.querySelector('.specialist-form')){
    document.querySelector('.specialist-form').addEventListener('submit', specialistEditFormHandler);
}
if(document.querySelector('.update-form')){
    document.querySelector('.update-form').addEventListener('submit', updateFormHandler);
}