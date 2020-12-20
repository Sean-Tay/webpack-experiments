import React from 'react';

import classes from './index.scss';

export const BlueSection: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = () => {
  return <div className={classes['blue-section']}>Blue</div>;
};

export default BlueSection;
