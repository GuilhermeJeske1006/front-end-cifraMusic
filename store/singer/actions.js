
const actions = {
  async getSingers({ commit }) {
    commit('setLoading', true);

    return new Promise((resolve, reject) => {
      this.$axios.$get('singer')
        .then((response) => {
          commit('setData', response.data);
          commit('setLoading', false);
          resolve(response.data);
        })
        .catch(error => {
          commit('setError', error.message);
          commit('setLoading', false);
          reject(error);
        }).finally(() => {
        console.log('Finally');
        commit('setLoading', false);
      }, );
    });
  },
};

export default { ...actions };
