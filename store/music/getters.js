const getters = {
  getData: state => state.data,
  getLoading: state => state.loading,
  getError: state => state.error,
  getHighlight: state => state.highlight,
  
};
  
  export default { ...getters };