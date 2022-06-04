import auth0 from 'auth0-js'
export const webAuth = new auth0.WebAuth({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  scope: import.meta.env.VITE_AUTH0_SCOPE,
});