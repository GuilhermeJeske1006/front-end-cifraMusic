
const actions = {
  async getSingers({ commit }, data) {
    commit('setLoading', true);

    return new Promise((resolve, reject) => {
      this.$axios.$get(`singer`, {
        params: {
          page: data.page,
          search: data.search
        }
      })
        .then((response) => {
          commit('setData', response);
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
