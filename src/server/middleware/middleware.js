const request = require("request");

exports.getTokenMNGT = () => {
  const options = {
    method: 'POST',
    url: `https://${process.env.VITE_AUTH0_DOMAIN}/oauth/token`,
    headers: {
      'content-type': 'application/json'
    },
    body: `{"client_id": "${process.env.client_id}", "client_secret":"${process.env.client_secret}","audience": "https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/","grant_type":"client_credentials"}`
  };

  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve({ data: JSON.parse(body) });
      } else {
        reject({ error: error });
      }
    });
  });
}

exports.getProfile = (token, id) => {
  const options = {
    method: 'GET',
    url: `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${id}?include_fields=false`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  }

  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve({ data: JSON.parse(body) });
      } else {
        reject({ error: error });
      }
    });
  });
}

exports.updateProfile = (token, id, body) => {
  const options = {
    method: 'PATCH',
    url: `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users/${id}`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body:
      JSON.stringify(body)
  }

  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve({ data: JSON.parse(body) });
      } else {
        reject({ error: error });
      }
    });
  });
}

