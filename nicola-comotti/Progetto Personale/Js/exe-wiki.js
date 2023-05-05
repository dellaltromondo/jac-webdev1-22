async function fetchExercises() {
    const muscle = document.getElementById('muscle-filter').value;
    const category = document.getElementById('category-filter').value;
    const difficulty = document.getElementById('difficulty-filter').value;
    const force = document.getElementById('force-filter').value;

    const filters = { muscle, category, difficulty, force };
    const filterNames = Object.keys(filters);

    // solo i filtri che non hanno valore 'any'
    const filteredFilters = filterNames.filter((filterName) => filters[filterName] !== 'any');

    // array di stringhe con i parametri di query
    const queryParams = filteredFilters.map((filterName) => `${filterName}=${filters[filterName]}`).join('&');

    // URL con i parametri di query, se presenti
    const url = `https://musclewiki.p.rapidapi.com/exercises${queryParams ? `?${queryParams}` : ''}`;

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '62b4e132c7mshbb7a451347c95a6p1193e3jsn477bd98db857',
            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const exeJson = await response.json();
        console.log(exeJson);
        document.getElementById('exercises-list').replaceChildren();
        exeJson.forEach(exercise => {
            buildExercise(exercise);
        });
    } catch (error) {
        console.error(error);
    }
}

function buildExercise(exercise) {
    const exeElement = document.createElement('li');
    exeElement.setAttribute('class', 'exercise');
    const exeID = exercise.id;
    exeElement.setAttribute('id', exeID);
    document.getElementById('exercises-list').appendChild(exeElement);

    const exeName = exercise.exercise_name;
    const nameElement = document.createElement('h2');
    nameElement.innerText = exeName;
    nameElement.setAttribute('class', 'exe-name');
    exeElement.appendChild(nameElement);

    let exeMuscles = '';
    Object.entries(exercise.target).forEach(([key, val]) =>
        val.forEach(muscle => {
            exeMuscles += muscle + ' - ';
        })
    );
    exeMuscles = exeMuscles.substring(0, (exeMuscles.length - 3));
    const musclesElement = document.createElement('h3');
    musclesElement.innerText = exeMuscles;
    musclesElement.setAttribute('class', 'exe-muscles');
    exeElement.appendChild(musclesElement);

    const exeCategory = exercise.Category;
    const categoryElement = document.createElement('h3');
    categoryElement.innerText = exeCategory;
    categoryElement.setAttribute('class', 'exe-category');
    exeElement.appendChild(categoryElement);

    const exeDifficulty = exercise.Difficulty;
    const difficultyElement = document.createElement('h3');
    difficultyElement.innerText = exeDifficulty;
    difficultyElement.setAttribute('class', 'exe-difficulty');
    exeElement.appendChild(difficultyElement);

    const exeForce = exercise.Force;
    const forceElement = document.createElement('h3');
    forceElement.innerText = exeForce;
    forceElement.setAttribute('class', 'exe-force');
    exeElement.appendChild(forceElement);

    const stepButton = document.createElement('button');
    stepButton.innerText = 'Steps';
    stepButton.setAttribute('class', 'exe-button');
    stepButton.setAttribute('onclick', 'openPopup(this.parentNode.id, "steps")');
    exeElement.appendChild(stepButton);

    const videoButton = document.createElement('button');
    videoButton.innerText = 'Video';
    videoButton.setAttribute('class', 'exe-button');
    videoButton.setAttribute('onclick', 'openPopup(this.parentNode.id, "video")');
    exeElement.appendChild(videoButton);
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

async function fetchExerciseData(exeID) {
    const url = 'https://musclewiki.p.rapidapi.com/exercises/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '62b4e132c7mshbb7a451347c95a6p1193e3jsn477bd98db857',
            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url + exeID, options);
        const exercise = await response.json();
        console.log(exercise);
        const exeSteps = exercise.steps;
        const videoURL = exercise.videoURL[0];
        return { steps: exeSteps, videoURL: videoURL };
    } catch (error) {
        console.error(error);
    }
}