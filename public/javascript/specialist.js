
async function specialistAddFormHandler(event) {
    event.preventDefault();
    const SpecialistName = document.querySelector('#specialist-name').value.trim();
    const Speciality = document.querySelector('#speciality').value.trim();

    if (SpecialistName && Speciality) {
        const response = await fetch('/api/specialists', {
          method: 'post',
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

  document.querySelector('.specialist-add-form').addEventListener('submit', specialistAddFormHandler);

