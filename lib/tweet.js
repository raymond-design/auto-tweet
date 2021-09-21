let tweet = '';

module.exports={
  updateTweet: (text) => {
    tweet=text;
  },
  getTweet: () => {
    if(tweet)
      return tweet;
    else
      console.log('Error: Tweet Empty');
      process.exit(1);
  }
}