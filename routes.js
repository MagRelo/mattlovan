var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');

let url = null;
let key = null;
const GhostContentAPI = require('@tryghost/content-api');

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:8000';
  key = '0885c91fec23401bae1a8b9988';
} else {
  url = 'https://content.mattlovan.com';
  key = '5655d677448a3ab09c8d14f1b4';
}

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: url,
  key: key,
  version: 'v3',
});

// get single post
async function getPost(postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      { include: 'tags,authors' }
    )
    .catch((error) => {
      // swallow errors, let the front-end handle it
      console.log(error.errorType);
      return {};
    });
}

// async function getTag(slug) {
//   return await api.posts.browse({
//     filter: `tags:[${slug}]`,
//     include: 'tags,authors',
//   });
// }

async function getSettings(slug) {
  return await api.settings.browse();
}

// get publication settings from Ghost Content API
let pub = {
  title: 'Matt Lovan is a Web Developer',
  description: 'Articles, Concepts & Demos by Matt Lovan',
  url: 'https://mattlovan.com',
  og_title: 'Matt Lovan is a Web Developer',
  og_description: 'Articles, Concepts & Demos by Matt Lovan',
  og_image: 'https://mattlovan.com/facebook_820x360.png',
  twitter_title: 'Matt Lovan is a Web Developer',
  twitter_description: 'Articles, Concepts & Demos by Matt Lovan',
  twitter_image: 'https://mattlovan.com/twitter_600x300.png',
};

getSettings()
  .then((settings) => {
    pub = settings;
    // console.log(pub);
  })
  .catch((error) => console.log('load ghostsettings', error.code));

//
// ROUTES
//

// individual post
router.get('/blog/:slug', async function(req, res) {
  try {
    // get post
    const post = await getPost(req.params.slug);

    // get index page and replace meta values
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', async function(err, data) {
      if (err) {
        res.sendFile('index.html', { root: './build' });
      }

      // find best value
      const meta_description = findFirstValue([
        post.meta_description,
        post.custom_excerpt,
        pub.description,
      ]);
      const og_title = findFirstValue([post.og_title, post.title, pub.title]);
      const og_description = findFirstValue([
        post.og_description,
        post.custom_excerpt,
        pub.description,
      ]);
      const og_image = findFirstValue([post.og_image, pub.og_image]);
      const twitter_title = findFirstValue([
        post.twitter_title,
        post.title,
        pub.twitter_title,
      ]);
      const twitter_desc = findFirstValue([
        post.twitter_description,
        post.custom_excerpt,
        pub.twitter_description,
      ]);
      const twitter_image = findFirstValue([
        post.twitter_image,
        pub.twitter_image,
      ]);

      // replace values in index.html
      data = data.replace(/\$META_TITLE/g, post.title);
      data = data.replace(/\$META_CANONICAL/g, post.url);
      data = data.replace(/\$META_DESCRIPTION/g, meta_description);
      data = data.replace(/\$OG_TITLE/g, og_title);
      data = data.replace(/\$OG_DESCRIPTION/g, og_description);
      data = data.replace(/\$OG_IMAGE/g, og_image);
      data = data.replace(/\$TWITTER_TITLE/g, twitter_title);
      data = data.replace(/\$TWITTER_DESCRIPTION/g, twitter_desc);
      data = data.replace(/\$TWITTER_IMAGE/g, twitter_image);

      // send to client
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('error');
  }
});

// default
router.get('*', function(req, res) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', async function(err, data) {
    if (err) {
      res.sendFile('index.html', { root: './build' });
    }

    // replace values in index.html
    data = data.replace(/\$META_TITLE/g, pub.title);
    data = data.replace(/\$META_DESCRIPTION/g, pub.description);
    data = data.replace(/\$META_CANONICAL/g, pub.url);
    data = data.replace(/\$OG_TITLE/g, pub.og_title);
    data = data.replace(/\$OG_DESCRIPTION/g, pub.og_description);
    data = data.replace(/\$OG_IMAGE/g, pub.og_image);
    data = data.replace(/\$TWITTER_TITLE/g, pub.twitter_title);
    data = data.replace(/\$TWITTER_DESCRIPTION/g, pub.twitter_description);
    data = data.replace(/\$TWITTER_IMAGE/g, pub.twitter_image);

    // send to client
    res.send(data);
  });
});

module.exports = router;

function findFirstValue(array) {
  const values = array.filter((item) => !!item);
  return values[0] ? values[0] : '';
}
