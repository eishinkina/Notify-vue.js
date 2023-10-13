export default function loadMore (res) {
  const messages = [];

  let count = 0;
  for (let i = 0; i < res.length && count < 2; i++) {
    if (res[i].main === false) {
      res[i].main = true;
      messages.push(res[i]);
      count++;
    }
  }

  return messages;
}
