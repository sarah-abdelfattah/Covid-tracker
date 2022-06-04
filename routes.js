import { Loading } from "@/client/layout"
import { Dashboard, DashboardLoading, Statistics, Measures, Settings, Profile, ProfileLoading } from "@/client/pages"

const routes = [
  {
    path: '/',
    name: "/",
    element: Dashboard,
    shimmer: DashboardLoading,
  },
  {
    path: 'dashboard',
    name: "dashboard",
    element: Dashboard,
    shimmer: DashboardLoading,
  },
  {
    path: 'statistics',
    name: "statistics",
    element: Statistics,
    shimmer: Loading,
  },
  {
    path: 'measures',
    name: "measures",
    element: Measures,
    shimmer: Loading,
  },
  {
    path: 'settings',
    name: "settings",
    element: Settings,
    shimmer: Loading,
  },
  {
    path: '/profile',
    name: "/profile",
    element: Profile,
    shimmer: ProfileLoading,
  },
]

export default routes
