import React from 'react';

import BlueSection from './BlueSection';
import RedSection from './RedSection';

import classes from './index.scss';

export const App: React.FC<React.ComponentPropsWithoutRef<'div'>> = () => {
    return (
        <div>
            <div className={classes.title}>
                Hello World!
            </div>

            <div className={classes.main}>
                <BlueSection />
                <RedSection />
            </div>
        </div>
    );
}

export default App;
