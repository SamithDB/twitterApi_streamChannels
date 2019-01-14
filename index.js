var nconf = require('nconf');
var Twit = require('twit');
var _ = require('lodash');

var TwitterStreamChannels = require('twitter-stream-channels');

nconf.file({ file: 'config.json' }).env(); // Twitter Consumer key & Access key

var credentials = require('./config.json')
var client = new TwitterStreamChannels(credentials);

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

//-----------------------------------------------------------------------------------------------------------------

var srilanka = [ '79.6951668639', '5.96836985923', '81.7879590189', '9.82407766361' ]

//  filter the twitter public stream 

var stream = twitter.stream('statuses/filter', { track:['Apple','Mango'] })
 
stream.on('tweet', function (tweet) {
  console.log('screen_name:', tweet.user.screen_name);
  console.log('text:', tweet.text);
  console.log('----------------------------------------');
})
*/

//-----------------------------------------------------------------------------------------------------------------


