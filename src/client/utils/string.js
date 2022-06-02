export const getInitials = (name = '') => {
  return name?.match(/\b\w/g)?.slice(0, 2)?.join('') || ''
}
