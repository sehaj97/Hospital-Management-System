async function deleteSpecialistHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/specialists/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/Medisearch/Specialists/View');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-spe').addEventListener('click', deleteSpecialistHandler);