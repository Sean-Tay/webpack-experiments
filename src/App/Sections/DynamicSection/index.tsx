import classes from './index.scss';

import * as React from 'react';

export const DynamicSection = () => {
    const [state, setState] = React.useState(Array(4).fill(null));

    return (
        <div className={classes['dynamic-section']}>
            {
                state.map(
                    (item, idx) => (
                        <div className={classes['part']}>
                            {
                                state[idx] || (
                                    <button
                                        key={idx}
                                        onClick={
                                            () => {
                                                import(
                                                    /* webpackMode: "lazy-once" */
                                                    `./Parts/${idx + 1}`
                                                ).then(
                                                    component => {
                                                        setState(oldState => {
                                                            const newState = [ ...oldState ];
                                                            newState[idx] = React.createElement(component.default);

                                                            return newState;
                                                        })
                                                    }
                                                );
                                            }
                                        }
                                    >
                                        Load {idx + 1}
                                    </button>
                                )
                            }
                        </div>
                    )
                )
            }
        </div>
    );
};

export default DynamicSection;