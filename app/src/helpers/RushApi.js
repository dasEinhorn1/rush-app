import axios from 'axios'
const RushApi = {
  getRushees: () => {
    return axios.get(`api/rushees`)
      .then(response => response.data.rushees)
  },
  getRushee: (id) => {
    return axios.get(`api/rushees/${id}`)
      .then(response => console.log(response))
  },
  createRushee: (data) => {
    return axios.post(`api/rushees/`)
      .then(response => console.log(response))
  },
  updateRushee: (id, data) => {
    return axios.put(`rushees/${id}`, data)
      .then(response => console.log(response))
  },
  vote: (id, vote) => {
    return axios.post(`rushees/${id}/vote`, { vote: vote })
      .then(response => console.log(response))
  }
}

export default RushApi
