
    const newFileCheckbox = document.getElementById('new-file-upload');
    const reviseFileCheckbox = document.getElementById('existing-file-update');
    const newFileForm = document.getElementById('new-project-file');
    const reviseForm = document.getElementById('update-project-file')

    newFileCheckbox.addEventListener('change', () => {
        if (newFileCheckbox.checked) {
            newFileForm.style.display = 'block';
            reviseFileCheckbox.checked = false;
            reviseForm.style.display = 'none';
        } else {
            newFileForm.style.display = 'none';
        }
    });

    reviseFileCheckbox.addEventListener('change', () => {
        if (reviseFileCheckbox.checked) {
            reviseForm.style.display = 'block';
            newFileForm.style.display = 'none';
            newFileCheckbox.checked = false;
        } else {
            reviseForm.style.display = 'none';
        }
    });



