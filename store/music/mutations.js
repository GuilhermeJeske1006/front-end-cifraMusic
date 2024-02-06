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
      setHighlight(state, highlight) {
        state.highlight = highlight;
      },
      setDetail(state, detail) {
        state.detail = detail;
      },
      
};