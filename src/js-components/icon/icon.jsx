export function Icon({ icon, iconSize = 24, iconColor }) {
  const CurrentIcon = icon;

  if (!icon) return null;

  return <CurrentIcon size={iconSize} color={iconColor} />;
}
