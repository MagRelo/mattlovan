import GhostContentAPI from '@tryghost/content-api';

let url = null;
let key = null;
if (process.env.REACT_APP_ENV === 'dev') {
  url = 'http://localhost:8000';
  key = '0778794241ead3cf6ddc1d5126';
} else {
  url = 'http://content.mattlovan.com';
  key = '';
}

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: url,
  key: key,
  version: 'v3',
});

// get posts
export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err);
    });
}

// get single post
export async function getPost(postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      { include: 'tags,authors' }
    )
    .catch((err) => {
      console.error(err);
    });
}

export async function getTag(slug) {
  return await api.posts
    .browse({
      filter: `tags:[${slug}]`,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err);
    });
}
