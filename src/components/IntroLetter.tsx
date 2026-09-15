import { useEffect, useMemo, useState } from "react";
import { config } from "../config/birthday";
import { recipientText } from "../data/recipient";

interface IntroLetterProps {
  onReveal: () => void;
}

type LetterStage = "sealed" | "opening" | "open";

const floatingEmojis = [
  "🌹",
  "✨",
  "💌",
  "🫶",
  "🎂",
  "💫",
  "🌸",
  "❤️",
  "🥂",
  "🌙",
  "🦋",
  "🎀",
];

export default function IntroLetter({
  onReveal,
}: IntroLetterProps) {
  const [stage, setStage] =
    useState<LetterStage>("sealed");

  const [visibleParagraphs, setVisibleParagraphs] =
    useState(0);

  const [leaving, setLeaving] =
    useState(false);

  const paragraphs = useMemo(
    () =>
      config.letterText
        .split(/\n+/)
        .map((text) => text.trim())
        .filter(Boolean),
    []
  );

  /*
   * Slowly reveal the letter after it opens.
   */
  useEffect(() => {
    if (stage !== "open") return;

    setVisibleParagraphs(0);

    const timers: number[] = [];

    paragraphs.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setVisibleParagraphs(index + 1);
      }, 450 + index * 420);

      timers.push(timer);
    });

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, [stage, paragraphs]);

  /*
   * Open the envelope.
   */
  const handleOpenLetter = () => {
    if (stage !== "sealed") return;

    setStage("opening");

    window.setTimeout(() => {
      setStage("open");
    }, 950);
  };

  /*
   * Move to the garden.
   */
  const handleContinue = () => {
    if (leaving) return;

    setLeaving(true);

    window.setTimeout(() => {
      onReveal();
    }, 1200);
  };

  return (
    <main
      className={[
        "intro-letter",
        `intro-letter--${stage}`,
        leaving ? "intro-letter--leaving" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
          ===================================================== */}

      <div className="letter-world">
        <div className="letter-world__glow glow-one" />
        <div className="letter-world__glow glow-two" />
        <div className="letter-world__glow glow-three" />

        <div className="letter-stars">
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className={`letter-star star-${index + 1}`}
            >
              {index % 4 === 0 ? "✦" : "·"}
            </span>
          ))}
        </div>

        <div className="letter-emoji-field">
          {floatingEmojis.map((emoji, index) => (
            <span
              key={`${emoji}-${index}`}
              className={`letter-emoji emoji-${index + 1}`}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* =====================================================
          INTRO MESSAGE
          ===================================================== */}

      <div className="letter-intro">
        <span className="letter-intro__eyebrow">
          ✦ something made especially for you ✦
        </span>

        <p className="letter-intro__name">
          {config.recipientName}
        </p>
      </div>

      {/* =====================================================
          ENVELOPE
          ===================================================== */}

      {stage !== "open" && (
        <section
          className="birthday-envelope"
          onClick={handleOpenLetter}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              handleOpenLetter();
            }
          }}
          aria-label="Open birthday letter"
        >
          <div className="envelope-shadow" />

          <div className="envelope">
            <div className="envelope-back" />

            <div className="envelope-paper">
              <span>For you ❤️</span>
            </div>

            <div className="envelope-front" />

            <div className="envelope-flap">
              <div className="envelope-flap__inner" />
            </div>

            <div className="wax-seal">
              <span>🌹</span>
            </div>
          </div>

          <div className="envelope-caption">
            <span className="envelope-caption__main">
              {stage === "sealed"
                ? "There is a little something inside..."
                : "Opening your letter..."}
            </span>

            {stage === "sealed" && (
              <span className="envelope-caption__hint">
                tap the letter 💌
              </span>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          LETTER
          ===================================================== */}

      {stage === "open" && (
        <section
          className="cinematic-letter"
          aria-label="Birthday letter"
        >
          <div className="cinematic-letter__top">
            <span>✦</span>

            <span>
              A LETTER FOR {config.recipientName.toUpperCase()}
            </span>

            <span>✦</span>
          </div>

          <div className="cinematic-letter__body">
            <p className="letter-greeting">
              Hey {config.recipientName}...
            </p>

            <h1>
              Happy
              <span>Birthday</span>
            </h1>

            <div className="letter-flower-line">
              <span>🌸</span>
              <i />
              <span>🌹</span>
              <i />
              <span>✨</span>
            </div>

            <div className="personal-letter">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph.slice(
                    0,
                    15
                  )}`}
                  className={
                    index < visibleParagraphs
                      ? "paragraph-visible"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className={[
                "letter-sign-off",
                visibleParagraphs === paragraphs.length
                  ? "letter-sign-off--visible"
                  : "",
              ].join(" ")}
            >
              <span>with a little craziness,</span>

              <strong>
                {config.senderName} 🌹
              </strong>
            </div>
          </div>

          {/* Little interactive decoration */}
          <div className="letter-floating-note note-one">
            <span>👀</span>
            <small>keep going...</small>
          </div>

          <div className="letter-floating-note note-two">
            <span>🫶</span>
            <small>this part is important</small>
          </div>
        </section>
      )}

      {/* =====================================================
          CONTINUE
          ===================================================== */}

      {stage === "open" &&
        visibleParagraphs === paragraphs.length && (
          <div className="letter-next">
            <div className="letter-next__whisper">
              <span>✨</span>
              <span>
                okay... that's enough sweetness.
              </span>
              <span>🌹</span>
            </div>

            <button
              type="button"
              className="letter-next__button"
              onClick={handleContinue}
            >
              <span>There's more...</span>
              <strong>→</strong>
            </button>

            <p>
              Don't leave yet 👀
            </p>
          </div>
        )}

      {/* =====================================================
          EXIT
          ===================================================== */}

      {leaving && (
        <div className="letter-exit">
          <span>🌹</span>
          <span>✨</span>
          <span>💫</span>
          <span>🌹</span>
        </div>
      )}
    </main>
  );
}