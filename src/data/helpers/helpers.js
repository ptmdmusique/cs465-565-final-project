export default function inRange(score, min, max) {
    if (score >= min && score <= max) return true;
    return false;
}