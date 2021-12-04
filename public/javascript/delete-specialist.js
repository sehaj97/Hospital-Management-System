[...document.querySelectorAll('.delete-specialist')].forEach(function(item) {
    item.addEventListener('click', async function(event) {
      event.preventDefault();
    const id = this.id.toString().split('-')[
      this.id.toString().split('-').length - 1
    ];
    const response = await fetch(`/api/specialists/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  });
});