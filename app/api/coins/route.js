import { NextResponse } from "next/server";
async function fetchCoins() {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  };

  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`,
    { method: "GET", headers: headers }
  );
  const coins = await response.json();
  return coins;
}
export async function GET(request) {
  const coins = await fetchCoins();
  return NextResponse.json(coins);
}
