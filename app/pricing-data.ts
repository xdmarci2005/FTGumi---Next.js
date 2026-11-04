export const pricingData = {
  "13-14": {
    title: '13" - 14" Méret',
    tireSwap: { price: "19 000 Ft", suffix: "/ szett" },
    wheelSwap: { price: "10 000 Ft", suffix: "/ szett" },
  },
  "15": {
    title: '15" Méret',
    tireSwap: { price: "21 000 Ft", suffix: "/ szett" },
    wheelSwap: { price: "10 500 Ft", suffix: "/ szett" },
  },
  "16": {
    title: '16" Méret',
    tireSwap: { price: "23 200 Ft", suffix: "/ szett" },
    wheelSwap: { price: "12 600 Ft", suffix: "/ szett" },
  },
  "17": {
    title: '17" Méret',
    tireSwap: { price: "25 300 Ft", suffix: "/ szett" },
    wheelSwap: { price: "14 700 Ft", suffix: "/ szett" },
  },
  "18": {
    title: '18" Méret',
    tireSwap: { price: "27 400 Ft", suffix: "/ szett" },
    wheelSwap: { price: "16 900 Ft", suffix: "/ szett" },
  },
  "19-20": {
    title: '19" - 20" Méret',
    tireSwap: { price: "29 600 Ft", suffix: "/ szett" },
    wheelSwap: { price: "19 000 Ft", suffix: "/ szett" },
  },
} as const;

export type PricingData = typeof pricingData;
export type SizeKey = keyof PricingData;
export type ServiceKey = "tireSwap" | "wheelSwap";

export const sizeOrder: SizeKey[] = ["13-14", "15", "16", "17", "18", "19-20"];
