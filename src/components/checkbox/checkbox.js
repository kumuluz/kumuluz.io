import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './checkbox.scss';

import iconCheckbox from './checkbox.svg'
import iconCheckboxBlue from './checkbox-blue.svg'

export class Checkbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    light: PropTypes.bool,
    className: PropTypes.string
  };

  render() {
    const { children, light, className } = this.props;

    return (
      <span className={`checkbox-line d-flex ${className} ${light && 'light'}`}>
        <span className="mr-2">{(light && <img src={iconCheckbox} />) || <img src={iconCheckboxBlue} />}</span>
        <span className="mt-2px">{children}</span>
      </span>
    );
  }
}
