export function getRandomArrayElement<T>(dataList: T[]): T {
  return dataList[Math.floor(Math.random() * dataList.length)];
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function shuffle<T>(array: T[]): T[] {
  const resultArr = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultArr[i], resultArr[j]] = [resultArr[j], resultArr[i]];
  }

  return resultArr;
}
