const { ScraperService } = require('../../services');

const get = (req, res) => {
  ScraperService.scrape('spfc').then(({ data }) => {
    const tweets = data.tweets.filter(tweet => tweet.content && tweet.content.length > 0);
    res.render('tweets', { tweets });
  });
};

module.exports = {
  get
};
