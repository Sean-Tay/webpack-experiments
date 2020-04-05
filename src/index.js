import { headerContent } from './test-module';

// Test for CSS Loader
import './index.css';

// On Page Load
// Test Babel
(() => {
    document.getElementsByClassName('blue-text')[0].textContent = headerContent;
})();

// For Testing Hot Module Replacement
if (module.hot) {
    module.hot.accept(
        './test-module',
        () => {
            document.getElementsByClassName('blue-text')[0].textContent = headerContent;
        }
    );
}
