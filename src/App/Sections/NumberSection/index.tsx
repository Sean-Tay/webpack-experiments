import * as React from 'react';

import { genRandomInteger, square } from '@/utils';

import classes from './index.scss';

export const NumberSection: React.ComponentType<{}> = () => {
    return (
        <div className={classes['number-section']}>
            { square(genRandomInteger(5)) }
        </div>
    )
};

export default NumberSection;