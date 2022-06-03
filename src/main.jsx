import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID
const audience = import.meta.env.VITE_AUTH0_AUDIENCE
// const audience = import.meta.env.VITE_MNGT_API_IDENTIFIER
const scope = import.meta.env.VITE_AUTH0_SCOPE
const appContainer = document.getElementById('root')

ReactDOM.createRoot(appContainer).render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
    audience={audience}
    scope={scope}>
    <App />
  </Auth0Provider>
)
