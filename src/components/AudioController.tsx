import { useEffect, useRef, useState } from "react";

interface Props {
  visible: boolean;
}

/**
 * Plays the real birthday-music.mp3 from public/assets/audio/.
 *
 * IMPORTANT:
 * The previous controller generated its own Web Audio guitar progression,
 * so replacing birthday-music.mp3 could never change the music being heard.
 * This controller uses the actual file instead.
 *
 * The cache-busting query is intentional: it makes a newly replaced MP3
 * available during local development instead of letting the browser reuse
 * an older cached audio response.
 */

const MUSIC_PATH = "/assets/audio/birthday-music.mp3";

export function AudioController({ visible }: Props) {
  const [enabled, setEnabled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!visible) {
      setShowPrompt(false);
      return;
    }

    const timer = window.setTimeout(() => {
      if (!enabled) setShowPrompt(true);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, [visible, enabled]);

  const startAudio = async () => {
    const existing = audioRef.current;

    try {
      let audio = existing;

      if (!audio) {
        audio = new Audio(
          `${MUSIC_PATH}?v=${Date.now()}`
        );
        // Do NOT loop automatically. When the file finishes, we reset it to
        // 0 so the next manual play starts from the beginning.
        // A pause in the middle is never reset, so resume continues there.
        audio.loop = false;
        audio.preload = "auto";
        audio.volume = 0.62;

        audio.addEventListener("ended", () => {
          if (audio) {
  audio.pause();
  audio.currentTime = 0;
}
        });

        audioRef.current = audio;
      }

      // The query string prevents the browser from reusing an older MP3
      // during local development after the file has been replaced.
      if (!existing) {
        audio.src = `${MUSIC_PATH}?v=${Date.now()}`;
      }

      await audio.play();

      setEnabled(true);
      setShowPrompt(false);
    } catch (error) {
      console.warn("Birthday music could not start.", error);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Pause only. Keep the exact playback position so the next Play
    // resumes from where the user stopped it.
    audio.pause();
    setEnabled(false);
  };

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
      }
      audioRef.current = null;
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {showPrompt && !enabled && (
        <div style={styles.prompt}>
          <p style={styles.promptText}>
            🎵 A little song for you?
          </p>

          <span style={styles.promptSubtext}>
            the music I chose for this little journey ♡
          </span>

          <button
            style={styles.promptBtn}
            onClick={startAudio}
          >
            Play the music 🌹
          </button>

          <button
            style={styles.promptBtnNo}
            onClick={() => setShowPrompt(false)}
          >
            Maybe later
          </button>
        </div>
      )}

      <button
        style={styles.toggleBtn}
        onClick={enabled ? stopAudio : startAudio}
        aria-label={
          enabled
            ? "Mute birthday music"
            : "Play birthday music"
        }
      >
        {enabled ? "🎵" : "🔇"}
      </button>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  prompt: {
    position: "fixed",
    top: "max(1rem, env(safe-area-inset-top))",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.45rem",
    zIndex: 1000,
    width: "min(330px, calc(100vw - 32px))",
    background:
      "linear-gradient(145deg, rgba(31,13,24,.94), rgba(11,7,14,.94))",
    backdropFilter: "blur(18px)",
    padding: "1rem 1.25rem 0.9rem",
    borderRadius: "18px",
    border: "1px solid rgba(224,173,105,.28)",
    boxShadow: "0 18px 50px rgba(0,0,0,.45)",
  },
  promptText: {
    fontFamily: "var(--font-hand)",
    fontSize: "1.25rem",
    color: "#fff8e7",
    margin: 0,
  },
  promptSubtext: {
    fontFamily: "var(--font-serif)",
    fontSize: "0.72rem",
    letterSpacing: "0.05em",
    color: "rgba(232,205,164,.65)",
    textAlign: "center",
  },
  promptBtn: {
    marginTop: "0.25rem",
    fontFamily: "var(--font-hand)",
    fontSize: "1rem",
    padding: "0.5rem 1.2rem",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg, #9d2847, #d04b68)",
    color: "#fff",
    border: "1px solid rgba(255,220,177,.18)",
    cursor: "pointer",
  },
  promptBtnNo: {
    fontFamily: "var(--font-serif)",
    fontSize: "0.82rem",
    padding: "0.2rem 0.8rem",
    borderRadius: "999px",
    background: "transparent",
    color: "rgba(255,255,255,.42)",
    border: "none",
    cursor: "pointer",
  },
  toggleBtn: {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    zIndex: 1000,
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "1px solid rgba(255,220,177,.22)",
    background: "rgba(17,8,14,.72)",
    color: "#fff",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,.3)",
    cursor: "pointer",
    fontSize: "19px",
  },
};
