window.addEventListener("load", function(){
    const urlHomepage = window.location.href.split('/')[window.location.href.split('/').length-1]
    const urlHomepageLength = window.location.href.split('/').length   
    if(urlHomepage==='Medisearch' && urlHomepageLength === 4){
        document.querySelector('#backBtn').classList.add('d-none');
    } else {
        document.querySelector('#backBtn').classList.remove('d-none');
    }
});