async function specialistEditFormHandler(event) {
    event.preventDefault();
    const SpecialistName = document.querySelector('#specialist-name').value.trim();
    const Speciality = document.querySelector('#speciality').value.trim();
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

document.querySelector('.specialist-form').addEventListener('submit', specialistEditFormHandler);
