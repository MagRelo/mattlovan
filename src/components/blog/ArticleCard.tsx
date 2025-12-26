import React from 'react';

const defaultImage =
  'https://cdn-images-1.medium.com/max/2000/1*T1NrRFtxijHcsiQVRjRNJA@2x.jpeg';

function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

interface Article {
  external_url: string;
  id?: string;
  created_at: string;
  feature_image?: string;
  title: string;
  excerpt: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <a href={article.external_url} key={article.id}>
      <div className="post-card">
        <div className="date">
          <span style={{ float: 'right' }}>
            {formatDate(article.created_at)}
          </span>
        </div>

        <div
          className="post-img"
          style={{
            backgroundImage: `url('${article.feature_image || defaultImage}')`,
          }}
        />

        <div className="post-title">{article.title}</div>

        <div>
          <p className="excerpt">{article.excerpt}</p>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;

