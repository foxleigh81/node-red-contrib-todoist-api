const axios = require('axios');

/**
 * A function to interact with the Todoist API.
 * @param {string} token // Todoist api token (from https://todoist.com/app/settings/integrations)
 * @param {string} endpoint // Endpoint to call (e.g. 'tasks')
 * @param {object} headers // Additional headers to be sent with the request (optional)
 * @param {string} method // HTTP method to use (e.g. 'post', 'get', 'put', 'delete')
 * @param {object} data // Data to be sent with the request (optional - only required if method is 'post' or 'put')
 */
module.exports = function buildQuery({
  token,
  endpoint,
  headers,
  method,
  data
}) {
  const _currentDate = new Date();
  const x_request_id = _currentDate.getTime() * 1000 + Math.random() * 1000;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'X-Request-Id': x_request_id,
    Authorization: 'Bearer ' + token
  };

  const url = `https://api.todoist.com/rest/v2/${endpoint}`;
  const theHeaders = headers || defaultHeaders;
  const theMethod = method || 'get';

  return axios({
    method: theMethod,
    url,
    headers: theHeaders,
    data
  });
};
