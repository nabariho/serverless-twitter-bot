const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.twitterConsumerKey,
  consumer_secret: process.env.twitterConsumerSecret,
  access_token_key: process.env.twitterAccessToKenKey,
  access_token_secret: process.env.twitterAccessTokenSecret
});

const tweet = (message) => {
  return client.post('statuses/update', { status: message });
};

module.exports = {
  tweet
};
