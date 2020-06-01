import UrlShortener from "./UrlShortener";
import Countries from "./Countries";

const repositories = {
  urlShortener: UrlShortener,
  countries: Countries
};

export default {
  get: (name) => repositories[name]
};
