'use client';

import { useEffect, useState } from 'react';
import { Sparkles, TrendingUp, ShieldAlert, RefreshCw, CheckCircle2 } from 'lucide-react';

interface AnalysisData {
  sentiment: string;
  score: number;
  summary: string;
  highlights: string[];
  recommendation: string;
}

export default function GeminiMarketAnalysis() {
  const [data, setData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAnalysis = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/ai-analysis');
      const json = await res.json();
      if (json.success && json.analysis) {
        setData(json.analysis);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-indigo-500/20 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              Gemini AI Markt-Stimmungsanalyse
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Gemini 3.7 Flash
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Echtzeit-KI-Bewertung basierend auf Live-Marktdaten
            </p>
          </div>
        </div>

        <button
          onClick={fetchAnalysis}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition border border-slate-700 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Analysiere...' : 'Aktualisieren'}
        </button>
      </div>

      {/* Content Body */}
      {loading ? (
        <div className="py-8 flex flex-col items-center justify-center space-y-3 text-center">
          <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin" />
          <p className="text-sm font-medium text-slate-300">
            Generiere Marktanalyse mit Gemini 3.7 Flash...
          </p>
        </div>
      ) : error || !data ? (
        <div className="py-6 text-center text-rose-400 text-sm">
          Marktanalyse konnte momentan nicht geladen werden. Bitte versuchen Sie es erneut.
        </div>
      ) : (
        <div className="space-y-6 relative z-10">
          {/* Sentiment Badge & Score */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1 bg-slate-800/60 backdrop-blur border border-indigo-500/20 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                  Marktsignal
                </span>
                <span className="text-xl font-black text-emerald-400 block mt-0.5">
                  {data.sentiment}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-white">{data.score}</span>
                <span className="text-xs text-slate-400">/100</span>
              </div>
            </div>

            <div className="sm:col-span-2 bg-slate-800/60 backdrop-blur border border-indigo-500/20 rounded-xl p-4 flex items-center">
              <p className="text-sm text-slate-200 leading-relaxed">
                {data.summary}
              </p>
            </div>
          </div>

          {/* Highlights & Recommendation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
                Kern-Treiber & Impulse
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {data.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Strategischer Hinweis (DACH)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  {data.recommendation}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/50 text-[11px] text-slate-400">
                ⚡ Aktualisiert via Gemini API (`gemini-3.7-flash`)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
