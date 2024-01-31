
const actions = {
  async login({ commit }, payload) {
    commit('setLoading', true);

     return new Promise((resolve, reject) => {
       this.$axios.$post('login', {
            email: payload.email,
            password: payload.password
       })
         .then((response) => {
           commit('setData', response.authorisation.token);
           commit('setLoading', false);
           resolve(response.data);
           this.$cookies.set('token', response.authorisation.token, {
             path: '/',
             maxAge: 60 * 60 * 24 * 7
           });
           this.$router.push('/');
         })
         .catch(error => {
           console.log('Error', error);
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
