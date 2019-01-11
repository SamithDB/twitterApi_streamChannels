var nconf = require('nconf');
var Twit = require('twit');
var _ = require('lodash');

nconf.file({ file: 'config.json' }).env(); // Twitter Consumer key & Access key

var twitter = new Twit({
  consumer_key: nconf.get('TWITTER_CONSUMER_KEY'),
  consumer_secret: nconf.get('TWITTER_CONSUMER_SECRET'),
  access_token: nconf.get('TWITTER_ACCESS_TOKEN'),
  access_token_secret: nconf.get('TWITTER_ACCESS_TOKEN_SECRET')
});

// Stream a sample of public statuses ...
/*
var tweetStream = twitter.stream('statuses/sample');

tweetStream.on('tweet', function (tweet) {
  console.log('----------------------------------------');
  console.log('screen_name:', tweet.user.screen_name);
  console.log('text:', tweet.text);
  
}); 
*/

//  filter the twitter public stream by the word 'mango'.

var stream = twitter.stream('statuses/filter', { track: 'mango' })
 
stream.on('tweet', function (tweet) {
  console.log('screen_name:', tweet.user.screen_name);
  console.log('text:', tweet.text);
  console.log('----------------------------------------');
})

