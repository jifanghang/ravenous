const apiKey = 't-uaMyIxJCiJFCOXxsRKzez5cF15YY5Y7FXCqNAsFQf2k7CdtUazj5qKrM1EHaTZ_5nXeWPQftWwdeC-4qku_jY-E9RwhV7DkwxGKXpd6hvdUXEPgamerK1pVOI7XHYx';

Yelp = {};

function search(term, location, sortBy) {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
} 