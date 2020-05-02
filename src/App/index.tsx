import React from 'react';

import BlueSection from './BlueSection';
import RedSection from './RedSection';
import PureSection from './PureSection';

import classes from './index.scss';

export const App: React.FC<React.ComponentPropsWithoutRef<'div'>> = () => {
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                Hello World!
            </div>

            <div className={classes['colored-sections']}>
                <BlueSection />
                <RedSection />
            </div>

            <div>
                <PureSection />
            </div>
        </div>
    );
}

export default App;
