import { type FormEvent, type ReactNode, useState } from "react";
import { Flame, Lock } from "lucide-react";

const STORAGE_KEY = "chillifeste-private-access";
const SITE_PASSWORD = import.meta.env.VITE_SITE_PASSWORD?.trim() ?? "";

function isUnlocked(): boolean {
  if (!SITE_PASSWORD) return true;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

type Props = {
  children: ReactNode;
};

export default function PrivateGate({ children }: Props) {
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (!SITE_PASSWORD || unlocked) {
    return children;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      setError(false);
      return;
    }
    setError(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-background">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-2xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 border border-primary/40 mb-4">
          <Lock size={22} className="text-primary" aria-hidden />
        </div>
        <div className="flex items-center justify-center gap-1.5 text-accent font-display text-xl mb-1">
          <Flame size={16} aria-hidden />
          chillifestë
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Faqja është private. Shkruaj fjalëkalimin për të hyrë.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Fjalëkalimi"
            autoComplete="current-password"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {error && (
            <p className="text-xs text-primary" role="alert">
              Fjalëkalimi është i gabuar.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-semibold hover:scale-[1.02] transition"
          >
            Hyr
          </button>
        </form>
      </div>
    </div>
  );
}
