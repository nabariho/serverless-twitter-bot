const fetchJoke = () => {
  const options = {
    method: 'post',
    headers: {
      Accept: "text/plain"
    }
  };

  return fetch(process.env.dadJokeClientURL, options);
};

module exports = {
  fetchJoke
};
