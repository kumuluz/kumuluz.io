import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { SideMenu } from '../../sub-pages';

import './faq-content.scss';

import { categories, QAndAs } from '../../../content/faq';

@translate()
export class FAQContent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
      qas: QAndAs
    };
    if (this.state.qas.length > 0) {
      this.state.qas[0].open = true;
    }
  }

  selectCategory(category) {
    const newState = this.state;
    newState.category = category;

    if (!category || category === 'all') {
      newState.qas = QAndAs;
      this.setState(newState);
      return;
    }

    newState.qas = QAndAs.filter(q => q.categories.includes(category));
    newState.qas.forEach(qa => (qa.open = false));
    if (newState.qas.length > 0) {
      newState.qas[0].open = true;
    }

    this.setState(newState);
  }

  search(event) {
    const keyword = event.target.value;
    const newState = this.state;

    if (newState.category && newState.category !== 'all') {
      newState.qas = QAndAs.filter(q => q.categories.includes(newState.category));
    } else {
      newState.qas = QAndAs;
    }

    if (newState.qas.length > 0 && keyword.length > 0) {
      newState.qas = newState.qas.filter(q => q.question.toLowerCase().includes(keyword.toLowerCase()));
      newState.qas.forEach(qa => (qa.open = true));
    } else {
      newState.qas.forEach(qa => (qa.open = false));
    }

    this.setState(newState);
  }

  toggleQA(qa) {
    this.state.qas.forEach(q => {
      if (q !== qa) q.open = false;
    });
    const trueQA = this.state.qas.find(q => q == qa);
    trueQA.open = !trueQA.open;

    this.setState(this.state);
  }

  render() {
    const { t } = this.props;
    const { qas, category } = this.state;

    const parsedCategories = Object.keys(categories).map(key => Object.assign({}, { key: key, name: categories[key] }));

    return (
      <div className="faq-content">
        <SideMenu
          selectedItem={category}
          menuItems={parsedCategories}
          menuHeader={<h5 className="mt-2 mb-0 pt-2">{t('categories')}</h5>}
          onSelect={category => this.selectCategory(category)}
          onSearch={event => this.search(event)}
          showContentHeader={true}
        >
          {qas.map((qa, key) => (
            <div key={key} className="qa">
              <div className="icon px-3 clickable" onClick={() => this.toggleQA(qa)}>
                {(qa.open && <FontAwesomeIcon icon="minus" />) || <FontAwesomeIcon icon="plus" />}
              </div>
              <div>
                <h5 className="clickable" onClick={() => this.toggleQA(qa)}>
                  {qa.question}
                </h5>
                {qa.open && <div className="content">{qa.anwser}</div>}
              </div>
            </div>
          ))}
        </SideMenu>
      </div>
    );
  }
}
