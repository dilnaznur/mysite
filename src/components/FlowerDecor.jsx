export default function FlowerDecor({ size = 40, color = 'var(--pink-mid)', position = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={position}
    >
      <circle cx="50" cy="50" r="8" fill={color} />
      <circle cx="50" cy="20" r="12" fill={color} opacity="0.8" />
      <circle cx="80" cy="30" r="12" fill={color} opacity="0.8" />
      <circle cx="80" cy="70" r="12" fill={color} opacity="0.8" />
      <circle cx="50" cy="80" r="12" fill={color} opacity="0.8" />
      <circle cx="20" cy="70" r="12" fill={color} opacity="0.8" />
      <circle cx="20" cy="30" r="12" fill={color} opacity="0.8" />
    </svg>
  )
}
