import React from 'react';

import BlueSection from './Sections/BlueSection';
import RedSection from './Sections/RedSection';
import NumberSection from './Sections/NumberSection';

import PureSection from './Sections/PureSection';

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
                <NumberSection />
            </div>

            <div>
                <PureSection />
            </div>
        </div>
    );
}

export default App;
