export default function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomNum = Math.floor(Math.random() * arr.length);
    [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
  }
  return arr;
}
