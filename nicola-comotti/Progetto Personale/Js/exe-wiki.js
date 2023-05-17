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
        const addedExercises = {};
        if (exeJson.length === 0) {
            errorPopup('Nessun risultato. Prova a modificare i parametri di ricerca.')
        }
        exeJson.forEach(exercise => {
            buildExercise(exercise, addedExercises);
        });
    } catch (error) {
        console.error(error);
    }
}


function buildExercise(exercise, addedExercises) {
    const exeElement = document.createElement('li');
    exeElement.setAttribute('class', 'exercise');
    const exeID = exercise.id;
    exeElement.setAttribute('id', exeID);

    const exeName = exercise.exercise_name;
    if (addedExercises[exeName]) {
        console.log(`${exeName} already added to list`);
        return;
    }
    addedExercises[exeName] = true;

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
    if (exeForce != undefined) {
        const forceElement = document.createElement('h3');
        forceElement.innerText = exeForce;
        forceElement.setAttribute('class', 'exe-force');
        exeElement.appendChild(forceElement);
    }

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

    document.getElementById('exercises-list').appendChild(exeElement);
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