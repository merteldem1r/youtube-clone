export default function timerFormat(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return `${String(min).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`;
}
