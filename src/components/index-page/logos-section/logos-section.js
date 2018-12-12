import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import logoGolem from '../../../assets/images/logos/golem.png'
import logoSonm from '../../../assets/images/logos/sonm.png'
import logoAws from '../../../assets/images/logos/aws.png'
import logoGae from '../../../assets/images/logos/gae.png'
import logoAzure from '../../../assets/images/logos/azure.png'
import logoStorej from '../../../assets/images/logos/storj.svg'
import logoFilecoin from '../../../assets/images/logos/filecoin.png'
import logoBigchain from '../../../assets/images/logos/bigchain.png'
import logoEos from '../../../assets/images/logos/eos.png'
import logoKubernetes from '../../../assets/images/logos/kubernetes.png'
import logoDocker from '../../../assets/images/logos/docker.png'

import './logos-section.scss';

export class LogosSection extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    return (
      <div className="images pb-4">
        <Container>
          <Row className="mb-5 justify-content-center">
            {[
              logoGolem,
              logoSonm,
              logoAws,
              logoGae,
              logoAzure,
              logoStorej,
              logoFilecoin,
              logoBigchain,
              logoEos,
              logoKubernetes,
              logoDocker
            ].map((img, key) => (
              <Col key={key} xs="4" sm="3" md="2" xl="1" className="d-flex align-items-center">
                <img src={img} alt="" className="img-fluid" />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
