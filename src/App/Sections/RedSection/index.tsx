import React from 'react';

import classes from './index.scss';

export const RedSection: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = () => {
  return <div className={classes['red-section']}>Red</div>;
};

export default RedSection;
