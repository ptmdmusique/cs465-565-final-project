export default function inRange(
  score: number,
  min: number,
  max: number
): boolean {
  if (score >= min && score <= max) return true;
  return false;
}
