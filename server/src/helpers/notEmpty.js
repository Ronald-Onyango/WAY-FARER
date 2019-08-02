/**
 * Function to check if value is empty
 * @param {string} value
 * @param {string} msg
 */
const notEmpty = (value, msg) => {
  if (value === '') {
    throw new Error(msg);
  }

  return true;
};

export default notEmpty;
