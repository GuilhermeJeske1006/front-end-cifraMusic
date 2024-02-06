export default {
    setData(state, data) {
        state.data = data;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setError(state, error) {
        state.error = error;
      },

      setPage(state, page) {
        console.log('state', state);
      },
};