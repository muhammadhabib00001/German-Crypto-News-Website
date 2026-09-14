'use client';

import { useState } from 'react';
import { Share2, Twitter, Linkedin, MessageCircle, Send, Check, Copy } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 my-6 py-3 border-y border-slate-200 dark:border-slate-800 text-xs">
      <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 mr-2">
        <Share2 className="w-4 h-4 text-blue-600" /> Artikel teilen:
      </span>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-black hover:text-white dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
      >
        <Twitter className="w-3.5 h-3.5" /> X (Twitter)
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-700 hover:text-white dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
      >
        <Linkedin className="w-3.5 h-3.5" /> LinkedIn
      </a>

      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
      </a>

      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
      >
        <Send className="w-3.5 h-3.5" /> Telegram
      </a>

      <button
        onClick={handleCopy}
        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors ml-auto"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Kopiert!
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-slate-400" /> Link kopieren
          </>
        )}
      </button>
    </div>
  );
}
