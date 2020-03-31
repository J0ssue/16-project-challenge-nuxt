import UrlShortener from "./UrlShortener";

const repositories = {
  urlShortener: UrlShortener
};

export default {
  get: (name) => repositories[name]
};
