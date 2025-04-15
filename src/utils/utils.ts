export const parentFilterCorrespond = (a: string[], b: string[]) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsla(${hue}, 70%, 50%, 1)`;
};