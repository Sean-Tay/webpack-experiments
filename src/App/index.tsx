import React from 'react';

import BlueSection from './BlueSection';
import RedSection from './RedSection';

import './index.scss';

export const App: React.FC<React.ComponentPropsWithoutRef<'div'>> = () => {
    return (
        <div>
            <div className="title">
                Hello World!
            </div>

            <div className="main">
                <BlueSection />
                <RedSection />
            </div>
        </div>
    );
}

export default App;
