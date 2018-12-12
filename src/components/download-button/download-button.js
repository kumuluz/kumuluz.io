import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export class DownloadButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any
  };

  render() {
    const { className, children, color } = this.props;

    return (
      <InputGroup className={className} style={{flexWrap: 'nowrap'}}>
        <InputGroupAddon addonType="append">
          <Button outline color={color} className="pr-lg-5" style={{borderWidth: '3px'}} disabled>
            {children}
          </Button>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <Button outline color={color} style={{borderWidth: '3px'}} disabled>
            <FontAwesomeIcon icon="arrow-down" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
