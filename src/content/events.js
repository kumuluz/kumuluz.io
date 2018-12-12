import React from 'react';
import { Badge } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import imgEvent2013 from '../assets/images/events/event-2013.png'
import imgSunesis2014 from '../assets/images/events/sunesis-2014.png'
import imgAwards2014 from '../assets/images/events/awards-2014.png'
import imgSep2014 from '../assets/images/events/sep-2014.png'
import imgJune2015 from '../assets/images/events/june-2015.png'
import imgSep2015 from '../assets/images/events/sep-2015.jpg'
import imgJan2016 from '../assets/images/events/jan-2016.jpg'
import imgApr2016 from '../assets/images/events/apr-2016.png'
import imgFeb2017 from '../assets/images/events/feb-2017.png'
import imgAvg2017 from '../assets/images/events/avg-2017.jpg'
import imgOct2017 from '../assets/images/events/oct-2017.svg'

export const eventsInPast = t => [
  {
    time: t('timeline.events.oct2013.time'),
    title: t('timeline.events.oct2013.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.oct2013.content1')}} />
        <img src={imgEvent2013} alt={t('timeline.events.oct2013.title')} className="img-fluid my-3 d-block mx-auto" />
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.oct2013.content2')}} />
      </span>
    )
  },
  {
    time: t('timeline.events.feb2014.time'),
    title: t('timeline.events.feb2014.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.feb2014.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.feb2014.content2')}} />
        <img src={imgSunesis2014} alt={t('timeline.events.feb2014.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('timeline.events.apr2014.time'),
    title: t('timeline.events.apr2014.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.apr2014.content')}} />
        <img src={imgAwards2014} alt={t('timeline.events.apr2014.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('timeline.events.sep2014.time'),
    title: t('timeline.events.sep2014.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.sep2014.content')}} />
        <img
          src={imgSep2014}
          alt={t('timeline.events.sep2014.title')}
          className="img-fluid my-3 d-block mx-auto"
          style={{ width: '200px' }}
        />
      </span>
    )
  },
  {
    time: t('timeline.events.jan2015.time'),
    title: t('timeline.events.jan2015.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.jan2015.content')}} />
      </span>
    )
  },
  {
    time: t('timeline.events.jun2015.time'),
    title: t('timeline.events.jun2015.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.jun2015.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.jun2015.content2')}} />
        <img src={imgJune2015} alt={t('timeline.events.jun2015.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('timeline.events.sep2015.time'),
    title: t('timeline.events.sep2015.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.sep2015.content')}} />
        <img src={imgSep2015} alt={t('timeline.events.sep2015.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('timeline.events.jan2016.time'),
    title: t('timeline.events.jan2016.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{ __html: t('timeline.events.jan2016.content') }} />
        <img src={imgJan2016} alt={t('timeline.events.jan2016.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('timeline.events.feb2016.time'),
    title: t('timeline.events.feb2016.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.content') }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.point1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.point2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.point3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.point4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.point5') }} />
          <li dangerouslySetInnerHTML={{ __html: t('timeline.events.feb2016.point6') }} />
        </ul>
      </span>
    )
  },
  {
    time: t('timeline.events.mar2016.time'),
    title: t('timeline.events.mar2016.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.mar2016.content')}} />
      </span>
    )
  },
  {
    time: t('timeline.events.apr2016.time'),
    title: t('timeline.events.apr2016.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.apr2016.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.apr2016.content2')}} />
        <img src={imgApr2016} alt={t('timeline.events.placeholder.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('timeline.events.sep2016.time'),
    title: t('timeline.events.sep2016.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.sep2016.content')}} />
        <div className="youtube-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/s95NonOYflk"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullscreen
          />
        </div>
      </span>
    )
  },
  {
    time: t('timeline.events.jan2017.time'),
    title: t('timeline.events.jan2017.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{ __html: t('timeline.events.jan2017.content1') }} />
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.jan2017.content2')}} />
      </span>
    )
  },
  {
    time: t('timeline.events.feb2017.time'),
    title: t('timeline.events.feb2017.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.feb2017.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.feb2017.content2')}} />
        <a href="http://microprofile.io" target="_blank" rel="noopener noreferrer">
          <img src={imgFeb2017} alt={t('timeline.events.feb2017.title')} className="img-fluid my-3 d-block mx-auto" />
        </a>
      </span>
    )
  },
  {
    time: t('timeline.events.apr2017.time'),
    title: t('timeline.events.apr2017.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.apr2017.content1')}} />
        <ol>
          <li>{t('timeline.events.apr2017.point1')}</li>
          <li>{t('timeline.events.apr2017.point2')}</li>
          <li>{t('timeline.events.apr2017.point3')}</li>
          <li>{t('timeline.events.apr2017.point4')}</li>
          <li>{t('timeline.events.apr2017.point5')}</li>
          <li>{t('timeline.events.apr2017.point6')}</li>
        </ol>
        <p dangerouslySetInnerHTML={{__html: t('timeline.events.apr2017.content2')}} />
      </span>
    )
  },
  {
    time: t('timeline.events.aug2017.time'),
    title: t('timeline.events.aug2017.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{ __html: t('timeline.events.aug2017.content') }} />
        <img src={imgAvg2017} alt={t('timeline.events.aug2017.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  }
];

export const eventsInFuture = t => [
  {
    time: t('upcoming.events.oct2017.time'),
    title: t('upcoming.events.oct2017.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.oct2017.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.oct2017.content2')}} />
        <img src={imgOct2017} alt={t('upcoming.events.oct2017.title')} className="img-fluid my-3 d-block mx-auto" />
      </span>
    )
  },
  {
    time: t('upcoming.events.q4-2017.time'),
    title: t('upcoming.events.q4-2017.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q4-2017.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q4-2017.content2')}} />
        <ul>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2017.milestone1') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-swagger">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href=" https://blog.kumuluz.com/kumuluzee/swagger/2017/10/24/kumuluzee-swagger-release">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2017.milestone2') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-openapi">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/openapi/2017/10/26/kumuluzee-openapi-release">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2017.milestone3') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/architecture/2017/11/09/microprofile-12-with-kumuluzee-microprofile">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2017.milestone4') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-health">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/health/2017/12/06/kumuluzee-health-update">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2017.milestone5') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-reactive">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/reactive/2017/12/17/kumuluzee-reactive-release">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
        </ul>
      </span>
    )
  },
  {
    time: t('upcoming.events.jan2018.time'),
    title: t('upcoming.events.jan2018.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.jan2018.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.jan2018.content2')}} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.jan2018.point1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.jan2018.point2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.jan2018.point3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.jan2018.point4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.jan2018.point5') }} />
        </ul>
      </span>
    )
  },
  {
    time: t('upcoming.events.q1-2018.time'),
    title: t('upcoming.events.q1-2018.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q1-2018.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q1-2018.content2')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q1-2018.content3')}} />
        <ul>
          <li>
            <Badge color="primary" className="mr-2">Updated</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone1') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-swagger">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/swagger/2018/01/14/kumuluzee-swagger-usage-updated">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Updated</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone2') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-openapi">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/openapi/2018/01/14/kumuluzee-openapi-usage-updated">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone3') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-config">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/config/2018/01/19/kumuluzee-config-release-1.1">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone4') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-metrics">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/metrics/2018/01/24/kumuluzee-microprofile-metrics-1.1-updated">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone5') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-discovery">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/discovery/2018/01/25/kumuluzee-discovery-release-1.1">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone6') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/2018/02/09/kumuluzee-release-2.5.2">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="primary" className="mr-2">Delivered</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone7') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee-testing">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/testing/arquillian/2018/03/13/introducing-arquillian-support">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
          <li>
            <Badge color="warning" className="mr-2">Pre-release</Badge>
            <span dangerouslySetInnerHTML={{ __html: t('upcoming.events.q1-2018.milestone8') }}></span>
            <a className="ml-2" target="_blank" rel="noopener noreferrer" href="https://github.com/kumuluz/kumuluzee">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="ml-1" target="_blank" rel="noopener noreferrer" href="https://blog.kumuluz.com/kumuluzee/2018/03/11/kumuluzee-3.0.0-beta.1-release">
              <FontAwesomeIcon icon="at" />
            </a>
          </li>
        </ul>
      </span>
    )
  },
  {
    time: t('upcoming.events.q2-2018.time'),
    title: t('upcoming.events.q2-2018.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q2-2018.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q2-2018.content2')}} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone5') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone6') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone7') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone8') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone9') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone10') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone11') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q2-2018.milestone12') }} />
        </ul>
      </span>
    )
  },
  {
    time: t('upcoming.events.q3-2018.time'),
    title: t('upcoming.events.q3-2018.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q3-2018.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q3-2018.content2')}} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone5') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone6') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone7') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone8') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone9') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone10') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone11') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone12') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone13') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone14') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q3-2018.milestone15') }} />
        </ul>
      </span>
    )
  },
  {
    time: t('upcoming.events.q4-2018.time'),
    title: t('upcoming.events.q4-2018.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q4-2018.content1')}} />
        <p dangerouslySetInnerHTML={{__html: t('upcoming.events.q4-2018.content2')}} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone5') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone6') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone7') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone8') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone9') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone10') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone11') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone12') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone13') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.q4-2018.milestone14') }} />
        </ul>
      </span>
    )
  },
  {
    time: t('upcoming.events.2019.time'),
    title: t('upcoming.events.2019.title'),
    content: (
      <span>
        <p dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.content1')}} />
        <p dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.content2') }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone5') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone6') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone7') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone8') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone9') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone10') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone11') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone12') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone13') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone14') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone15') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone16') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone17') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone18') }} />
          <li dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.milestone19') }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: t('upcoming.events.2019.content5') }} />
      </span>
    )
  }
];
