// import Repository from './Repository'
import axios from 'axios'
const resource = 'rel.ink/api/links/';


export default {
  create(url) {
    return axios.post(
      'https://' + resource, {
        url
      }
    )
  },

  show(id) {
    return axios.get(`https://${resource}${id}/`)
  }
};
