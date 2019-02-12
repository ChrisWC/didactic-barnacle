import React from 'react';
import './Button.scss';
import { Block } from '../../utils/bem';

const style = (Element) => Block("Button")(Element);


function Button({to=null, onClick, component='div', children, ...props}) {
  // React components should start with a capital and
  // a warning/error will be generated if it begins with
  // lower case, BUT we still want lower case propNames
  const Component = component || 'div';

  return (
    <Component to={to} onClick={onClick} className={style('container')({bare: true, loading: false})}>
      {children || null}
    </Component>
  );
}


export default Button;
