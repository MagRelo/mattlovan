var express = require('express');
var router = express.Router();

const path = require('path');
const fs = require('fs');

let pub = {
  title: 'Matt Lovan is a Software Engineer',
  description: 'Articles, Concepts & Demos by Matt Lovan',
  url: 'https://mattlovan.dev',
  og_title: 'Matt Lovan is a Software Engineer',
  og_description: 'Articles, Concepts & Demos by Matt Lovan',
  og_image: 'https://mattlovan.dev/facebook_820x360.png',
  twitter_title: 'Matt Lovan is a Software Engineer',
  twitter_description: 'Articles, Concepts & Demos by Matt Lovan',
  twitter_image: 'https://mattlovan.dev/twitter_600x300.png',
};

// default
router.get('*', function (req, res) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', async function (err, data) {
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
