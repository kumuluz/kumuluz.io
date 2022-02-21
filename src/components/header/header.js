import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import {Link} from 'gatsby';

import './header.scss';

import logo from './logo.svg'

import { navigation } from '../../content/links';

class HeaderComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  linkActive(path) {
    if (typeof window === 'undefined') return null;

    if (window.location.pathname.includes(path)) {
      if (window.location.pathname === path || window.location.pathname === path + '/') {
        return 'active';
      }
      return 'active plus position-relative';
    }
  }

  render() {
    const { t } = this.props;

    return (
      <div className="header">
        <Navbar color="faded" dark expand="lg" className="d-block d-lg-flex">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Kumuluz logo" />
            </Link>
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar className="collapse-nav">
              <Nav className="mr-auto" navbar>
                {navigation(t).map(
                  (nav, key) =>
                    (nav.children && (
                      <UncontrolledDropdown key={key} nav>
                        <DropdownToggle nav caret className={this.linkActive(nav.href)}>
                          {nav.name}
                        </DropdownToggle>
                        <DropdownMenu>
                          {nav.children.map((child, childKey) => (
                            <Link key={childKey} to={child.href} className={`dropdown-item ${this.linkActive(child.href)}`}>
                              {child.name}
                            </Link>
                          ))}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    )) || (
                      <NavItem key={key}>
                        {(nav.newTab && (
                          <a href={nav.href} className={`nav-link ${this.linkActive(nav.href)}`} target="_blank" rel="noopener noreferrer">
                            {nav.name}
                          </a>
                        )) || (
                          <Link to={nav.href} className={`nav-link ${this.linkActive(nav.href)}`}>
                            {nav.name}
                          </Link>
                        )}
                      </NavItem>
                    )
                )}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export const Header = withTranslation()(HeaderComponent);
