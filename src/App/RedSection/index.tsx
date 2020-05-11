import React from "react";

// To test if TypeScript Entry-Point Configuration works.
// import { useLatestEffect } from "../utils";

import classes from "./index.scss";

export const RedSection: React.FC<React.ComponentPropsWithoutRef<
  "div"
>> = () => {
  //   useLatestEffect(undefined, () => {
  //     console.log("Red Section");
  //   });

  return <div className={classes["red-section"]}>Red</div>;
};

export default RedSection;
