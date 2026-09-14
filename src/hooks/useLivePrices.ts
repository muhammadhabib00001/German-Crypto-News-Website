'use client';

import { useState, useEffect, useRef } from 'react';
import { CryptoPrice } from '@/types';
import { CRYPTO_PRICES } from '@/data/crypto-prices';

export function useLivePrices(tickIntervalMs = 800) {
  const [prices, setPrices] = useState<CryptoPrice[]>(CRYPTO_PRICES);
  const [isLive, setIsLive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Keep reference to latest prices to calculate tick directions
  const pricesRef = useRef(prices);
  pricesRef.current = prices;

  // 1. Periodic background fetch from API every 10 seconds
  useEffect(() => {
    let isMounted = true;

    async function fetchApiPrices() {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.prices && Array.isArray(data.prices)) {
            setPrices((prev) => {
              return data.prices.map((newCoin: CryptoPrice) => {
                const existing = prev.find((p) => p.symbol === newCoin.symbol);
                let tickDir: 'up' | 'down' | 'neutral' = 'neutral';
                if (existing) {
                  if (newCoin.priceEur > existing.priceEur) tickDir = 'up';
                  else if (newCoin.priceEur < existing.priceEur) tickDir = 'down';
                }
                return {
                  ...newCoin,
                  tickDirection: tickDir,
                };
              });
            });
            setIsLive(true);
            setLastUpdated(new Date());
          }
        }
      } catch (err) {
        console.warn('API price sync warning:', err);
      }
    }

    fetchApiPrices();
    const syncInterval = setInterval(fetchApiPrices, 10000);

    return () => {
      isMounted = false;
      clearInterval(syncInterval);
    };
  }, []);

  // 2. High-frequency sub-second millisecond ticker simulation
  useEffect(() => {
    const tickTimer = setInterval(() => {
      setPrices((prevPrices) => {
        // Pick 1 to 4 random coins to update per millisecond tick
        const updated = [...prevPrices];
        const numToUpdate = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < numToUpdate; i++) {
          const randIdx = Math.floor(Math.random() * updated.length);
          const coin = updated[randIdx];

          // Skip stablecoins for micro fluctuations
          if (coin.category === 'stable') continue;

          // Tiny micro percentage fluctuation (-0.05% to +0.05%)
          const deltaPct = (Math.random() * 0.1 - 0.048) / 100;
          const newPriceEur = Math.max(0.0000001, coin.priceEur * (1 + deltaPct));
          const newPriceUsd = Math.max(0.0000001, coin.priceUsd * (1 + deltaPct));
          const tickDir: 'up' | 'down' | 'neutral' = deltaPct >= 0 ? 'up' : 'down';

          updated[randIdx] = {
            ...coin,
            priceEur: newPriceEur,
            priceUsd: newPriceUsd,
            tickDirection: tickDir,
          };
        }
        return updated;
      });
    }, tickIntervalMs);

    return () => clearInterval(tickTimer);
  }, [tickIntervalMs]);

  return { prices, isLive, lastUpdated };
}
