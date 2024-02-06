
const actions = {
  async storeMusic({ commit }, payload) {
    const user = this.$cookies.get('user');
    commit('setLoading', true);

    return new Promise((resolve, reject) => {
      this.$axios.$post('music/store', {
        ...payload, created_by: user.id
      })
        .then((response) => {
          commit('setData', response.data);
          commit('setLoading', false);
          resolve(response.data);
          this.$router.push('/music/listing');
        })
        .catch(error => {
          console.log('Error', error);
          commit('setError', error.message);
          commit('setLoading', false);
          reject(error);
        }).finally(() => {
          console.log('Finally');
          commit('setLoading', false);
        },);
    });
  },




  async ListMusic({ commit }, data = 1, search) {
    commit('setLoading', true);

    return new Promise((resolve, reject) => {
      this.$axios.$get('music' + `?page=${data.page}`, {
        params: {
          search: data.search
        }
      })
        .then((response) => {
          commit('setData', response);
          commit('setLoading', false);
          resolve(response.data);
        })
        .catch(error => {
          console.log('Error', error);
          commit('setError', error.message);
          commit('setLoading', false);
          reject(error);
        }).finally(() => {
          console.log('Finally');
          commit('setLoading', false);
        },);
    });
  },

 async HighLightMusic({ commit }) {
    commit('setLoading', true);

    return new Promise((resolve, reject) => {
      this.$axios.$get('music/highlight')
        .then((response) => {
          commit('setHighlight', response.data);
          commit('setLoading', false);
          resolve(response.data);
        })
        .catch(error => {
          console.log('Error', error);
          commit('setError', error.message);
          commit('setLoading', false);
          reject(error);
        }).finally(() => {
          console.log('Finally');
          commit('setLoading', false);
        },);
    });
  },

   deleteMusic({ commit }, id) {
    commit('setLoading', true);

    return new Promise((resolve, reject) => {
      this.$axios.$delete(`/music/${id}/destroy`)
        .then((response) => {
          commit('setLoading', false);
          resolve(response.data);
          
        })
        .catch(error => {
          console.log('Error', error);
          commit('setError', error.message);
          commit('setLoading', false);
          reject(error);
        }).finally(() => {
          console.log('Finally');
          commit('setLoading', false);
        },);
    });
  },
};

export default { ...actions };