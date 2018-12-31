import React from 'react';

import './ArticleCard.css';

// defaults
import defaultImage from '../../images/sunset.jpg';

// relative time
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);

const defaultDateString = '2018-02-16T18:39:44.651Z';

const timeAgo = new TimeAgo('en-US');
const ArticleCard = props => {
  return (
    <div className="post-card">
      {/* Image */}
      <div
        className="post-img"
        style={{
          backgroundImage: `url('${props.article.image || defaultImage}')`
        }}
      />

      {/* Content */}
      <div className="post-content">
        <time className="date">
          {timeAgo.format(new Date(props.article.date || defaultDateString))}
        </time>
        <div className="category">{props.article.category}</div>
        <h3>
          <a href={props.article.url} target="_blank" rel="noopener noreferrer">
            {props.article.title}
          </a>
        </h3>

        <p className="description">{props.article.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
