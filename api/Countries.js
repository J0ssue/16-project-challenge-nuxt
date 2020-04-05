// import Repository from './Repository'
import axios from 'axios'
const resource = 'restcountries.eu/rest/v2';

export default {
  index() {
    return axios.get(`https://${resource}/all`);
  },
  filter(settings) {
    return axios.get(`https://${resource}/${settings.searchBy}/${settings.keyword}`)
  }
}
