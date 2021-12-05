async function departmentFormHandler(event) {
    event.preventDefault();
    const DepartmentName = document.querySelector('#department-name').value.trim();
    if (DepartmentName) {
        const response = await fetch('/api/departments', {
          method: 'post',
          body: JSON.stringify({
            DepartmentName
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          document.location.replace('/medisearch/departments/view');
        } else {
          alert(response.statusText);
        }
      }
}
  document.querySelector('.department-form').addEventListener('submit', departmentFormHandler);