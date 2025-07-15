export async function getNumberFact(num: number): Promise<string> {
  const res = await fetch(`http://numbersapi.com/${num}?json`);
  const data = await res.json();
  return data.text;
}
