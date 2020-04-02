// Test for CSS Loader
import './index.css';

// Test for Babel
(() => {
    document.getElementsByClassName('blue-text')[0].textContent = 'Goodbye World!';
})();

export default {};