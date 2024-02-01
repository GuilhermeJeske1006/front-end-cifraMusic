const getters = {
  getData: state => state.data,
  getLoading: state => state.loading,
  getError: state => state.error,
  
};
  
  export default { ...getters };