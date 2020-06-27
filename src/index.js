import { headerContent } from './test-module';

// Test for Sass Loader
import './index.scss';

// Test for CSS Loader
import './index.css';

// Test for TypeScript Config and @babel/preset-typescript
import data from './test-typescript';

// Test for File / URL Loader
import images from './test-images';

// Test Babel
const updateBlueHeader = () => {
    document.getElementsByClassName('blue-text')[0].textContent = headerContent;
};

const updatePeople = () => {
    const peopleElement = document.getElementsByClassName('people')[0];
    while (peopleElement.firstChild) peopleElement.removeChild(peopleElement.firstChild);

    data.forEach(
        element => {
            const pElement = document.createElement('p');
            pElement.textContent = element.name;
            peopleElement.appendChild(pElement);
        }
    );
};

const updateImages = () => {
    const imageContainerElement = document.getElementsByClassName('images')[0];
    while (imageContainerElement.firstChild) imageContainerElement.removeChild(imageContainerElement.firstChild);

    images.forEach(
        element => {
            const imageElement = document.createElement('img');
            imageElement.src = element;
            imageContainerElement.appendChild(imageElement);
        }
    );
}

const updatePage = () => {
    updateBlueHeader();
    updatePeople();
    updateImages();
};

// On Page Load
updatePage();

// For Testing Hot Module Replacement
if (module.hot) {
    module.hot.accept(
        ['./test-module'],
        updateBlueHeader
    );

    module.hot.accept(
        ['./test-typescript'],
        updatePeople
    );

    module.hot.accept(
        ['./test-images'],
        updateImages
    );
}
