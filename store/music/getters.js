const getters = {
  getData: state => state.data,
  getLoading: state => state.loading,
  getError: state => state.error,
  getHighlight: state => state.highlight,
  getDetail: state => state.detail,
  
};
  
  export default { ...getters };