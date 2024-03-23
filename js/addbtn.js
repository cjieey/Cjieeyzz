const addProjectBtn = document.getElementById('addProjectBtn');
const popupForm = document.getElementById('popupForm');
const uploadForm = document.getElementById('uploadForm');
const collect = document.getElementById("collect");
const fileInput = document.getElementById('fileInput');
const linkInput = document.getElementById('linkInput');
const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const cancel = document.getElementById('cancel');

addProjectBtn.addEventListener('click', () => {
    popupForm.style.display = 'block';
    const projectCollections = document.querySelectorAll('.project_collection');
    
    projectCollections.forEach(project => {
        project.style.pointerEvents = 'none';
    });
});


cancel.addEventListener('click', () => {
    popupForm.style.display = 'none';
    const projectCollections = document.querySelectorAll('.project_collection');
    
    projectCollections.forEach(project => {
        project.style.pointerEvents = 'auto';
    });
});




uploadForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const img = document.createElement('img');
    img.src = URL.createObjectURL(fileInput.files[0]);
    img.alt = titleInput.value;
    img.className = 'pimg';

    const projectHTML = `
        <div class="project_collection">
            <img class="rgb" src="icon/iconrgb.png" alt="">
            <a target="_blank" href="${linkInput.value}">
                ${img.outerHTML}
            </a>
            <h3>${titleInput.value}</h3>
            <div class="desc">${descriptionInput.value}</div>
            <div class="label">
                <div class="lbl">HTML</div>
                <div class="lbl">CSS</div>
                <div class="lbl">JS</div>
            </div>
        </div>`;

    
    collect.innerHTML += projectHTML;
    popupForm.style.display = 'none';
    uploadForm.reset();
    const projectCollections = document.querySelectorAll('.project_collection');
    projectCollections.forEach(project => {
        project.style.pointerEvents = 'auto';
    });
});