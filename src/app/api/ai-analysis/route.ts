import { NextResponse } from 'next';
import { GoogleGenAI } from '@google/genai';
import { CRYPTO_PRICES } from '@/data/crypto-prices';

export const revalidate = 300; // Cache for 5 mins

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      // Fallback response if no env key present
      return NextResponse.json({
        success: true,
        fallback: true,
        timestamp: new Date().toISOString(),
        analysis: {
          sentiment: "Bullisch",
          score: 74,
          summary: "Der Gesamtmarkt zeigt eine solide Konsolidierung auf hohem Niveau, angeführt von erhöhter Zuversicht bei Bitcoin und führenden Layer-1 Netzwerken.",
          highlights: [
            "Bitcoin hält eine stabile Markt-Dominanz über 56%",
            "Erhöhte Aktivität und Zuflüsse bei institutionellen Instrumenten",
            "Solana & Ethereum verzeichnen stabile Transaktionsvolumina"
          ],
          recommendation: "Geduldiges Portfoliomanagement und Beobachtung wichtiger Widerstandsmarken empfohlen."
        }
      });
    }
    const ai = new GoogleGenAI({ apiKey });

    const priceSummary = CRYPTO_PRICES.slice(0, 6).map(
      (c) => `${c.name} (${c.symbol}): ${c.priceEur}€, 24h Change: ${c.change24h}%`
    ).join('; ');

    const prompt = `Du bist ein führender Krypto-Finanzanalyst für KryptoPulse DE.
Analysiere die folgenden aktuellen Markt-Daten der Kryptowährungen:
${priceSummary}

Erstelle eine professionelle, kompakte Marktanalyse auf Deutsch im JSON-Format mit genau folgender Struktur:
{
  "sentiment": "Stark Bullisch" | "Bullisch" | "Neutral" | "Bärisch" | "Stark Bärisch",
  "score": 78,
  "summary": "Kompakte 2-Satz Zusammenfassung der aktuellen Marktlage in verständlichem Deutsch.",
  "highlights": [
    "Wichtigstes Signal oder Treiber 1",
    "Wichtigstes Signal oder Treiber 2",
    "Wichtigstes Signal oder Treiber 3"
  ],
  "recommendation": "Strategischer Hinweis für Anleger im DACH-Raum (1 Satz)."
}

Wichtig: Antworte NUR im gültigen JSON-Format ohne Markdown-Codeblöcke.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
    });

    const rawText = response.text || '';
    const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsedData = JSON.parse(cleanJson);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      analysis: parsedData,
    });
  } catch (error: any) {
    console.error('Gemini AI Analysis Error:', error);
    
    // Fallback response if API fails or rate limited
    return NextResponse.json({
      success: true,
      fallback: true,
      timestamp: new Date().toISOString(),
      analysis: {
        sentiment: "Bullisch",
        score: 74,
        summary: "Der Gesamtmarkt zeigt eine solide Konsolidierung auf hohem Niveau, angeführt von erhöhter Zuversicht bei Bitcoin und führenden Layer-1 Netzwerken.",
        highlights: [
          "Bitcoin hält eine stabile Markt-Dominanz über 56%",
          "Erhöhte Aktivität und Zuflüsse bei institutionellen Instrumenten",
          "Solana & Ethereum verzeichnen stabile Transaktionsvolumina"
        ],
        recommendation: "Geduldiges Portfoliomanagement und Beobachtung wichtiger Widerstandsmarken empfohlen."
      }
    });
  }
}
