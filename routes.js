import { Dashboard, Statistics, Measures, Settings, Profile, ProfileLoading } from "@/client/pages"
import { Session } from "@/client/config"

const routes = [
  {
    path: '/',
    name: "/",
    element: Dashboard,
  },
  {
    path: '/authenticate',
    name: "authenticate",
    element: Session,
  },
  {
    path: 'dashboard',
    name: "dashboard",
    element: Dashboard,
  },
  {
    path: 'statistics',
    name: "statistics",
    element: Statistics,
  },
  {
    path: 'measures',
    name: "measures",
    element: Measures,
  },
  {
    path: 'settings',
    name: "settings",
    element: Settings,
  },
  {
    path: '/profile',
    name: "/profile",
    element: Profile,
    shimmer: ProfileLoading,
  },
]

export default routes
