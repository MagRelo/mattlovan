import React from 'react';

import './ArticleCard.css';

import defaultImage from '../../images/sunset.jpg';

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
        <time className="date">{props.article.date}</time>
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
