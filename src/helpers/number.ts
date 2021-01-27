export function formatNumber(value: number | string): number | string {
  return typeof value === 'number' ? Math.ceil(value) : value;
}

export function formatToKm(value: number): string {
  const km = value / 1000;
  return `${km} km`;
}

export function formatKmPerSecond(value: number): string {
  const kmh = (value * 3600) / 1000;

  return `${formatNumber(kmh)} km/h`;
}
