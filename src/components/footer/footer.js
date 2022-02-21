import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { SocialLinks } from '../../components';
import {Link} from 'gatsby';

import './footer.scss';

import { navigation } from '../../content/links';

class FooterComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <SocialLinks />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="links d-md-block d-flex flex-column">
                {navigation(t).map(
                  (link, k) =>
                    (!link.newTab && (
                      <Link key={k} to={link.href}>
                        {link.name}
                      </Link>
                    )) || <a key={k} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="my-5 text-center copyright">Copyright {new Date().getFullYear()} Kumuluz. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const Footer = withTranslation()(FooterComponent);
