import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './side-menu.scss';

@translate()
export class SideMenu extends Component {
  static propTypes = {
    t: PropTypes.func,
    menuItems: PropTypes.array,
    selectedItem: PropTypes.string,
    children: PropTypes.any,
    onSelect: PropTypes.func,
    onSearch: PropTypes.func,
    showContentHeader: PropTypes.bool,
    menuHeader: PropTypes.any
  };

  constructor(props) {
    super(props);
  }

  onSelect(selectedItem) {
    const { onSelect } = this.props;

    onSelect(selectedItem);
  }

  render() {
    const { t, menuItems, children, onSearch, showContentHeader, menuHeader, selectedItem } = this.props;

    return (
      <Container className="side-menu">
        <Row className="py-5">
          <Col xs="12" lg="3" className="pr-0">
            {menuHeader}
            <div className="line" />

            <ul className="sidebar">
              {menuItems.map((c, k) => (
                <li key={k} className={`${selectedItem === c.key ? 'active' : ''}`}>
                  <div onClick={() => this.onSelect(c.key)}>
                    {c.name}
                    {selectedItem === c.key && (
                      <span>
                        <FontAwesomeIcon icon="arrow-right" />
                      </span>
                    )}
                  </div>
                  {c.children && (
                    <ul>
                      {c.children.map((child, ck) => (
                        <li key={ck} onClick={() => this.onSelect(child.key)} className={`${selectedItem === child.key ? 'active' : ''}`}>
                          {child.name}
                          {selectedItem === child.key && (
                            <span>
                              <FontAwesomeIcon icon="arrow-right" />
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Col>
          <Col className="pl-0 mt-3 mt-lg-0">
            {showContentHeader && (
              <span>
                <div className="ml-auto" style={{ width: '300px' }}>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FontAwesomeIcon icon="search" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder={t('actions.search')} onKeyUp={e => onSearch(e)} />
                  </InputGroup>
                </div>
                <div className="line" />
              </span>
            )}
            <div className="px-3 pl-lg-5">{children}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}
