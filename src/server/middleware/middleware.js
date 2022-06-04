const request = require("request");


const getTokenMNGT = () => {
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
        resolve(JSON.parse(body).access_token);
      } else {
        reject({ error: error });
      }
    });
  });
}

exports.getProfile = async (id) => {
  let token = await getTokenMNGT()

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
        resolve(JSON.parse(body));
      } else {
        reject({ error: error });
      }
    });
  });
}

exports.updateProfile = async (id, body) => {
  let token = await getTokenMNGT()

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
        resolve(JSON.parse(body));
      } else {
        reject({ error: error });
      }
    });
  });
}

exports.getAllUsers = async () => {
  let token = await getTokenMNGT()
  const options = {
    method: 'GET',
    url: `https://${process.env.VITE_AUTH0_DOMAIN}/api/v2/users`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  }

  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject({ error: error });
      }
    });
  });
}
