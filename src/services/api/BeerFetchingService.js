import axios from 'axios'

export const fetchBeers = () => {
  return axios.get('https://api.punkapi.com/v2/beers').then(response => response.data)
}
