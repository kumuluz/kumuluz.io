import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './donut-chart.scss';

export class DonutChart extends Component {
  static propTypes = {
    values: PropTypes.array,
    rotation: PropTypes.number
  };

  render() {
    const { values, rotation } = this.props;

    const calcValues = [];
    let sumAngle = 0;
    for (let v of values) {
      if (v.percentage <= 0.5) {
        calcValues.push({ angle: 360 * v.percentage, color: v.color, sumAngle: sumAngle });
        sumAngle += 360 * v.percentage;
      } else {
        calcValues.push({ angle: 360 * 0.5, color: v.color, sumAngle: sumAngle });
        sumAngle += 360 * 0.5;
        const remainingPercentage = v.percentage - 0.5;
        calcValues.push({ angle: 360 * remainingPercentage, color: v.color, sumAngle: sumAngle });
        sumAngle += 360 * remainingPercentage;
      }
    }
    let rotate = rotation || 0;

    return (
      <div className="donut-chart-section">
        <div className="donut-chart-block block">
          <div className="donut-chart" style={{ transform: `rotate(${rotate}deg)` }}>
            {calcValues.map((v, key) => (
              <div key={key} className="portion-block" style={{ transform: `rotate(${v.sumAngle}deg)` }}>
                <div className="circle" style={{ backgroundColor: v.color, transform: `rotate(${v.angle}deg)` }} />
              </div>
            ))}

            <p className="center" />
          </div>
        </div>
      </div>
    );
  }
}
