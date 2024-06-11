export function Icon({ icon, iconSize = 24 }) {
  const CurrentIcon = icon;

  if (!icon) return null;

  return <CurrentIcon size={iconSize} />;
}
