import auth0 from 'auth0-js'

export const auth = new auth0.WebAuth0[{
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  scope: import.meta.env.VITE_AUTH0_USER_SCOPE,
}]