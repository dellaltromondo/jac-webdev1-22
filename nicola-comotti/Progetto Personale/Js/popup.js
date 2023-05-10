function errorPopup(errorMessage) {
    const newErrorPopup = document.getElementById('errorPopup');
    document.getElementById('popup-container').style.zIndex = 1000;

    if (newErrorPopup.childElementCount == 0) {
        const titleElement = document.createElement('h2');
        titleElement.setAttribute('id', 'errorTitle');
        titleElement.innerText = 'ERRORE';
        newErrorPopup.appendChild(titleElement);

        const messageElement = document.createElement('p');
        messageElement.setAttribute('id', 'errorMessage');
        messageElement.innerText = errorMessage;
        newErrorPopup.appendChild(messageElement);

        const closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'closePopupButton');
        closeButton.setAttribute('onclick', `closePopup("${newErrorPopup.id}")`);
        newErrorPopup.appendChild(closeButton);

        const closeImage = document.createElement('img');
        closeImage.setAttribute('id', 'closeImage');
        closeImage.setAttribute('src', 'Utils/close-icon.png');
        closeButton.appendChild(closeImage);

        const closeText = document.createElement('p');
        closeText.innerText = 'Chiudi';
        closeText.setAttribute('id', 'closeText');
        closeButton.appendChild(closeText);

    } else {
        document.getElementById('errorMessage').innerText = errorMessage;
    }
    newErrorPopup.style.display = 'block';
}

async function openPopup(exeID, popupType) {
    const newPopup = popupType === 'steps' ? document.getElementById('steps-popup') : document.getElementById('video-popup');
    const otherPopup = popupType === 'steps' ? document.getElementById('video-popup') : document.getElementById('steps-popup');
    closePopup(otherPopup.id);
    document.getElementById('popup-container').style.zIndex = 1000;
    
    if (newPopup.childElementCount != 0) {
        newPopup.replaceChildren();
    }

    const titleElement = document.createElement('h2');
    titleElement.setAttribute('class', 'popup-title');
    titleElement.innerText = popupType === 'steps' ? 'Exercise Steps' : 'Video Tutorial';
    newPopup.appendChild(titleElement);

    if (popupType === 'steps') {
        const listElement = document.createElement('ol');
        listElement.setAttribute('id', 'step-list');
        newPopup.appendChild(listElement);

        const exerciseData = await fetchExerciseData(exeID);
        if (exerciseData && exerciseData.steps) {
            exerciseData.steps.forEach(step => {
                const stepElement = document.createElement('li');
                stepElement.innerText = step;
                stepElement.setAttribute('class', 'exe-step');
                listElement.appendChild(stepElement);
            });
        }
    } else {
        const videoElement = document.createElement('video');
        videoElement.setAttribute('class', 'exe-video');
        videoElement.setAttribute('controls', '');
        newPopup.appendChild(videoElement);
        
        const exerciseData = await fetchExerciseData(exeID);
        if (exerciseData && exerciseData.videoURL) {
            const sourceElement = document.createElement('source');
            sourceElement.setAttribute('src', exerciseData.videoURL);
            videoElement.appendChild(sourceElement);
        }
    }
    
    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closePopupButton');
    closeButton.setAttribute('onclick', `closePopup("${newPopup.id}")`);
    newPopup.appendChild(closeButton);
    
    const closeImage = document.createElement('img');
    closeImage.setAttribute('id', 'closeImage');
    closeImage.setAttribute('src', 'Utils/close-icon.png');
    closeButton.appendChild(closeImage);

    const closeText = document.createElement('p');
    closeText.innerText = 'Close';
    closeText.setAttribute('id', 'closeText');
    closeButton.appendChild(closeText);

    newPopup.style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('popup-container').style.zIndex = -1;
}