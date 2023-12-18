import axios from 'axios';

const actions = {
    listingHighlight({ commit }) {
        commit('setLoading', true);
        commit('setError', null);
    
        // Simulando uma requisição assíncrona com uma Promise
        return new Promise((resolve, reject) => {
          axios.get('http://api.test/api/music/highlight')
            .then(response => {
              commit('setData', response.data);
              commit('setLoading', false);
              resolve(response.data);
            })
            .catch(error => {
              commit('setError', error.message);
              commit('setLoading', false);
              reject(error);
            });
        });
      },
};
  
export default { ...actions };