const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

// eslint-disable-next-line react-hooks/exhaustive-deps
export default getError;
