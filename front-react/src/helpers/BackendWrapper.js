const axios = require('axios');

const backendNode = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

class BackendWrapper {
  getHeroes() {
    backendNode
      .get('/heroes')
      .then(function(response) {
        console.log(`BEW: heroes = ${response.data}`);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return [];
      });
  }
  getHero(id) {
    backendNode
      .get(`/heroes/${id}`)
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(function(error) {
        console.log(error);
        return {};
      });
  }
}
export default BackendWrapper;
