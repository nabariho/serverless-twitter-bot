'use strict';

import {fetchJoke} from './clients/dad-joke-client'
import {tweet} from './clients/twitter-client'

module.exports.publishJoke = async (event, context, callback) => {
  fetchJoke()
    .then(joke => {
      tweet(joke);
      return callback(null,{statusCode: 200});
    })
    .catch(error => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });



  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};
