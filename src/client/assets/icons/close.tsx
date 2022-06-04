export const Close = ({ light = false, ...props }) => {
  if (light) {
    return (
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M.896 13.06a.73.73 0 00.32.18.702.702 0 00.672-.18l5-5 5 5a.702.702 0 00.672.18.6.6 0 00.32-.18.621.621 0 00.172-.313.702.702 0 000-.36.621.621 0 00-.172-.312l-5-5.008 5-5a.702.702 0 000-.984.64.64 0 00-.32-.18.7.7 0 00-.36 0 .597.597 0 00-.312.18l-5 5-5-5a.6.6 0 00-.32-.18.7.7 0 00-.36 0 .597.597 0 00-.312.18.676.676 0 00-.18.312.836.836 0 000 .36c.031.12.091.224.18.312l5 5-5 5.008a.676.676 0 00-.18.313.763.763 0 00-.008.359c.031.12.094.224.188.312z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.308 8L14 12.308 9.692 8 8 9.692 12.308 14 8 18.308 9.692 20 14 15.692 18.308 20 20 18.308 15.692 14 20 9.692 18.308 8z"
        fill="currentColor"
      />
    </svg>
  )
}