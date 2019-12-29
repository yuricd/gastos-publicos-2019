export function formatMonetary(input: number): string {
  const val = Number(Math.round(input));
  return (val >= 10**3 && val < 10**6) 
    ? `${formatThous(val, 10**3)} mil`
      : (val >= 10**6 && val < 10**9)
      ? `${formatThous(val, 10**6)} ${getMiText(formatThous(val, 10**6))}`
      : `${val}`;
}

export function formatThous(val: number, div: number) {
  return String((val/div).toFixed(1)).replace('.', ',');
}

export function getMiText(val: string): string {
  return (Number(val.replace(',', '.')) < 2) ? 'milhão' : 'milhões';
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
