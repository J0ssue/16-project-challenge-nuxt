import Repository from './Repository'
const resource = 'rel.ink/api/links/';


export default {
  create(url) {
    return Repository.post(
      resource, {
        url
      }
    )
  },

  show(id) {
    return Repository.get(`/${resource}${id}/`)
  }
};
