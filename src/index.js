import { headerContent } from './test-module';

// Test for Sass Loader
import './index.scss';

// Test for CSS Loader
import './index.css';

// Test for TypeScript Config and @babel/preset-typescript
import data from './test-typescript'

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

const updatePage = () => {
    updateBlueHeader();
    updatePeople();
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
}
