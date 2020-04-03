import Repository from './Repository'
const resource = 'restcountries.eu/rest/v2';

export default {
  index() {
    return Repository.get(`${resource}/all`);
  },
  filter(settings) {
    return Repository.get(`${resource}/${settings.searchBy}/${settings.keyword}`)
  }
}
