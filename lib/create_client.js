const {TwitterClient} = require('twitter-api-client');
const secret = require('../config');

module.exports={
  getClient: () => {
    return new TwitterClient(secret.secrets);
  }
}

 