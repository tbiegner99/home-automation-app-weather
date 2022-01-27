import React from 'react';
import combineClasses from 'classnames';
import styles from './headers.css';

export const H1 = (props) => (
  <h1 {...props} className={combineClasses(styles.h1, props.className)}>
    {props.children}
  </h1>
);
export const H2 = (props) => (
  <h2 {...props} className={combineClasses(styles.h1, props.className)}>
    {props.children}
  </h2>
);
export const H3 = (props) => (
  <h3 {...props} className={combineClasses(styles.h1, props.className)}>
    {props.children}
  </h3>
);
export const H4 = (props) => (
  <h4 {...props} className={combineClasses(styles.h1, props.className)}>
    {props.children}
  </h4>
);
export const H5 = (props) => (
  <h5 {...props} className={combineClasses(styles.h1, props.className)}>
    {props.children}
  </h5>
);
export const H6 = (props) => (
  <h6 {...props} className={combineClasses(styles.h1, props.className)}>
    {props.children}
  </h6>
);
