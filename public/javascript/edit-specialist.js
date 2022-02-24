

    [...document.querySelectorAll('.edit-specialist')].forEach(function(item) {
        item.addEventListener('click', async function(event) {
          event.preventDefault();
        const id = this.id.toString().split('-')[
          this.id.toString().split('-').length - 1
        ];
        window.location.replace('/Medisearch/Specialists/edit/'+ id);
      });
    });