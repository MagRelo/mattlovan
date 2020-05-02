import GhostContentAPI from '@tryghost/content-api';

let url = null;
let key = null;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:2368';
  key = '1fc7e25f67b8d101115c0f07c1';
} else {
  url = 'https://content.mattlovan.com';
  key = '56c748b686a94f2f5ea7cd0f64';
}

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: url,
  key: key,
  version: 'v3',
});

// get posts
export async function getPosts() {
  return await api.posts.browse({
    limit: 'all',
    include: 'tags,authors',
  });
}

// get single post
export async function getPost(postSlug) {
  return await api.posts.read(
    {
      slug: postSlug,
    },
    { include: 'tags,authors' }
  );
}

export async function getTag(slug) {
  return await api.posts.browse({
    filter: `tags:[${slug}]`,
    include: 'tags,authors',
  });
}

export async function getSettings(slug) {
  return await api.settings.browse();
}

export async function getNextPost(tags, id) {
  return await api.posts
    .browse({
      filter: `tags:[${tags}]+id:-${id}`,
      include: 'tags,authors',
    })
    .then((postArray) => {
      return postArray[0] || {};
    });
}

export async function subscribe() {}
