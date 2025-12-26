import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Card from 'components/blog/ArticleCard';

interface Article {
  type: string;
  created_at: string;
  feature_image?: string;
  image_credit?: string;
  image_alt?: string;
  title: string;
  excerpt: string;
  tech?: string[];
  featured: boolean;
  external_url: string;
  id?: string;
}

const networkURL =
  'https://medium.com/@mattlovan/run-a-public-ethereum-testnet-f0e40cefc1f2';
const articles: Article[] = [
  {
    type: 'article',
    created_at: '2019-06-03T15:43:46.739Z',
    feature_image:
      'https://cdn-images-1.medium.com/max/1200/1*2d9jmfyEXTKndCbBeOlihA.png',
    image_credit: 'Photo by Thomas Kvistholt on Unsplash',
    image_alt: '',
    title: 'Run your own Public Ethereum Testnet',
    excerpt:
      'Set up a Proof-of-Authority testnet that is available from the public internet.',
    tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
    featured: false,
    external_url: networkURL,
  },
  {
    type: 'article',
    created_at: '2018-12-05T15:43:46.739Z',
    feature_image:
      'https://cdn-images-1.medium.com/max/2000/1*6K5vmzalJUxn44v3cm6wBw.jpeg',
    image_credit: 'Photo by Thomas Kvistholt on Unsplash',
    image_alt: '',
    title: 'Deploy a Scalable Open-Source Architecture',
    excerpt:
      'The architecture of Servesa – provisioning a virtual machine, installing SSL certificates, defining a network of Docker containers, and tweaking the configuration for local development. ',
    tech: ['Docker', 'NGINX', 'SSL', 'Networking'],
    featured: false,
    external_url:
      'https://medium.com/@mattlovan/deploy-a-scalable-open-source-architecture-4349cfe27e',
  },
  {
    type: 'concept',
    created_at: '2018-07-16T18:39:44.651Z',
    title: 'Priority Pricing',
    excerpt:
      'Protocol for demand-based pricing to reduce transaction costs for freelance workers.',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    external_url:
      'https://github.com/MagRelo/laborMarket/blob/master/README.md',
  },
  {
    type: 'article',
    created_at: '2018-02-16T18:39:44.651Z',
    title: 'Curation Tournament',
    feature_image:
      'https://cdn-images-1.medium.com/max/2000/1*CfvgTvNenSNTKXhDFUbLtg.jpeg',
    image_credit: 'Photo by Michał Parzuchowski on Unsplash',
    image_alt: '',
    excerpt:
      'Modeled on a poker tournament, this game is designed to encourage a group of players to reach consensus around a list of items. Players can increase their share of the pot by predicting the group consensus around adding or removing items from the list.',
    tech: ['Mechanism Design'],
    featured: false,
    external_url:
      'https://medium.com/@mattlovan/curation-tournament-babbf0155a36',
  },
  {
    type: 'article',
    created_at: '2017-08-18T21:40:42.442',
    title: 'Reputation and Identity in Decentralized Systems',
    feature_image:
      'https://cdn-images-1.medium.com/max/1915/1*Q9uMiib0_ejNQHG8-xp5-Q.jpeg',
    image_credit: 'Photo by Michał Parzuchowski on Unsplash',
    image_alt: '',
    excerpt:
      "A survey of centralized and decentralized reputation and identity systems. Also summarizes research on social credit schemes such as 'Trust is Risk' and 'Trust in Friends'.",
    tech: ['Identity', 'Reputation'],
    featured: false,
    external_url:
      'https://medium.com/@mattlovan/reputation-and-identity-in-decentralized-systems-ba4a7ff99cc4',
  },
];

function BlogHome() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter='1rem'>
        {articles.map((post, index) => {
          return <Card article={post} key={post.id || index} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default BlogHome;

