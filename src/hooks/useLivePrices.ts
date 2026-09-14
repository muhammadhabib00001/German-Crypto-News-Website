'use client';

import { useState, useEffect } from 'react';
import { CryptoPrice } from '@/types';
import { CRYPTO_PRICES } from '@/data/crypto-prices';

export function useLivePrices(pollIntervalMs = 15000) {
  const [prices, setPrices] = useState<CryptoPrice[]>(CRYPTO_PRICES);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPrices() {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.prices) {
            setPrices(data.prices);
            setIsLive(true);
            setLastUpdated(new Date());
          }
        }
      } catch (err) {
        console.warn('Could not fetch live price update:', err);
      }
    }

    // Fetch immediately on mount
    fetchPrices();

    // Set up polling interval
    const interval = setInterval(fetchPrices, pollIntervalMs);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [pollIntervalMs]);

  return { prices, isLive, lastUpdated };
}
