import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import './use-cases-blocks.scss';

import { useCases } from '../../content/useCases';

@translate('other')
export class UseCasesBlocks extends Component {
  static propTypes = {
    t: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    const { t, title, content } = this.props;

    return (
      <div className="use-cases-blocks my-5 py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" lg="8" className="mb-5 text-center">
              <h3>{title}</h3>
              <p className="mt-3">{content}</p>
            </Col>
          </Row>
          <Row>
            {useCases(t).map((uc, key) => (
              <Col key={key} xs="12" lg="6" className="mb-4">
                <div className="block">
                  {uc.image && <img src={uc.image} alt="" className="img-fluid" />}
                  <div>
                    <h5 dangerouslySetInnerHTML={{ __html: uc.title }} />
                    <p>{uc.content}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
