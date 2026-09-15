'use client';

import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {submitted ? (
        <div className="text-center py-4 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
          <h4 className="font-bold text-lg">Vielen Dank für Ihre Anmeldung!</h4>
          <p className="text-xs text-blue-200">
            Wir haben eine Bestätigungs-E-Mail an <span className="font-semibold text-white">{email}</span> gesendet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600/30 rounded-lg">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-bold text-base tracking-tight">NEWSKRYPT Daily Newsletter</h3>
          </div>

          <p className="text-xs text-blue-100/90 leading-relaxed">
            Erhalten Sie jeden Morgen die wichtigsten Krypto-News, Marktanalysen und MiCA-Regulierungs-Updates direkt in Ihr Postfach. Kostenlos und jederzeit abbestellbar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              required
              placeholder="Ihre E-Mail-Adresse..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-blue-500/30 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white shadow-md transition-colors"
            >
              Kostenlos abonnieren
            </button>
            <p className="text-[10px] text-blue-200/70 text-center">
              Mit Ihrer Anmeldung stimmen Sie unserer <a href="/datenschutz" className="underline hover:text-white">Datenschutzerklärung</a> zu.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
