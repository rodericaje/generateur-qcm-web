const fileDrop = document.getElementById('fileDrop');
const fileInput = document.querySelector('.file-input');
const form = document.getElementById('uploadForm');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');

fileDrop.addEventListener('click', () => fileInput.click());

fileDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDrop.classList.add('hover');
});

fileDrop.addEventListener('dragleave', () => fileDrop.classList.remove('hover'));

fileDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    fileDrop.classList.remove('hover');
    fileInput.files = e.dataTransfer.files;
});

form.addEventListener('submit', (e) => {
    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) clearInterval(interval);
        else width += 10;
        progressBar.style.width = width + '%';
    }, 100);
});
