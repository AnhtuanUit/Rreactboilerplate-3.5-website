import React from 'react';
import './style.scss';
const CommonButton = (props) => (
  <button class='common-button'
    type='button'
    onClick={props.action}
    disabled={props.disabled}
    style={{
            color: props.color,
            backgroundColor: props.background,
    }}
  >
    {props.children}
  </button>
)

export default CommonButton;
