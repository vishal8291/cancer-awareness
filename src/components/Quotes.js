import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Stay strong. Every small step is progress.");
      setAuthor("Support Team");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-pink-300/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8 shadow-2xl">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.25),_transparent_55%)]" />

      <div className="relative space-y-4">
        <div className="flex items-center gap-2 text-pink-300 text-xs uppercase tracking-[0.25em]">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          <span>Daily motivation</span>
        </div>

        {loading ? (
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-pink-400 border-t-transparent" />
            Loading quote…
          </div>
        ) : (
          <>
            <p className="text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed text-slate-50">
              “{quote}”
            </p>
            <p className="text-sm md:text-base font-semibold text-pink-200">
              — {author || "Unknown"}
            </p>
          </>
        )}

        <button
          onClick={getQuote}
          disabled={loading}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-pink-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="text-base">🔄</span>
          {loading ? "Refreshing..." : "Refresh Quote"}
        </button>

        <p className="text-[11px] text-slate-400 mt-2">
          Quotes are fetched live from a public inspiration API.
        </p>
      </div>
    </div>
  );
};

export default Quotes;
