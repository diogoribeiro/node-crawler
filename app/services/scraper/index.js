const sanitizeHtml = require('sanitize-html');
const scrapeIt = require('scrape-it');

const scrape = (hastag) => {
  const options = {
    tweets: {
      listItem: '.stream-item',
      data: {
        avatar: {
          selector: '.avatar',
          attr: 'src',
        },
        name: '.fullname',
        content: {
          convert: (data) => data && sanitizeHtml(data, {
            allowedTags: [ 'b', 's', 'strong' ],
          }),
          selector: '.tweet-text',
          how: 'html'
        },
        userName: '.stream-item-header .username b',
      }
    }
  };

  return scrapeIt(`https://twitter.com/search?q=%23${hastag}`, options);
};

module.exports = {
  scrape,
};
