const uploadForm = document.querySelector('.appeal__form');

const uploadFilesStyle = (evt) => {
    const currentInput = evt.target;
    if (currentInput.classList.contains('appeal__form-file')) {
        currentInput.parentNode.querySelector('.appeal__form-file-status').classList.remove('appeal__form-file-status--not-uploaded');
        currentInput.parentNode.querySelector('.appeal__form-file-number').classList.remove('appeal__form-file-number--not-uploaded');
        currentInput.parentNode.querySelector('.appeal__form-file-status').classList.add('appeal__form-file-status--uploaded');        
        currentInput.parentNode.querySelector('.appeal__form-file-number').classList.add('appeal__form-file-number--uploaded');
    }
}

uploadForm.addEventListener('change', uploadFilesStyle)