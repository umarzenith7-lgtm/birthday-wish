
import { useState } from "react";
import confetti from "canvas-confetti";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  Gift,
  Heart,
  Mail,
  MoonStar,
  Sparkles,
  Star,
} from "lucide-react";

const PARTNER_NAME = "Gulab Jamun";
const YOUR_NAME = "With love, from my heart 💙";

const wishes = [
  {
    number: "01",
    title: "For All the Years Between Us",
    subtitle: "A wish from a heart that remembers",
    message:
      "Six years... it's hard to put into words what these years have meant to me. Life took us in directions we never imagined, and circumstances kept us apart even when our hearts had their own feelings to carry. But today, on your birthday, I just want to wish you all the happiness in the world. I hope life has been kind to you, and I hope you have found countless reasons to smile. Some people remain special to us, even when life doesn't let them stay close. You have always been one of those people for me.",
  },
  {
    number: "02",
    title: "For the Words I Never Said",
    subtitle: "A wish wrapped in silence",
    message:
      "There were so many birthdays when I wanted to wish you, so many words that stayed in my heart because the circumstances weren't right. Maybe you will never know how many times a simple birthday wish crossed my mind. I couldn't say it then, but today I finally can. So here's the wish that remained unspoken for all those years: may your heart always find happiness, may your eyes always have reasons to shine, and may life give you the beautiful things you truly deserve. Sometimes silence doesn't mean the absence of feelings; sometimes, it simply means there were things we couldn't say.",
  },
  {
    number: "03",
    title: "For the Distance Between Our Hearts",
    subtitle: "A wish carried across the miles",
    message:
      "Distance has a way of making even the simplest things feel impossible. A conversation, a little greeting, a chance to ask how someone is doing... things that seem so ordinary can become precious when life keeps two people apart. I know we are still far from each other, and I don't know what the future holds. But I hope that wherever you are, life brings warmth to your days and peace to your heart. If I could send one thing across this distance today, it would be a little reminder that I sincerely wish well for you, more than these words could ever fully explain.",
  },
  {
    number: "04",
    title: "For the Love I Still Carry",
    subtitle: "A wish from the deepest part of my heart",
    message:
      "Some feelings are difficult to explain, especially when life doesn't give us the chance to express them the way we want to. There are emotions that words cannot completely hold, and some people who become a part of our hearts in ways time alone cannot explain. I won't pretend that these six years were nothing, or that being far away made every feeling simple. All I know is that you matter to me, and today I wanted my words to carry a little of the affection I have held quietly in my heart. My wish is that you always feel valued, respected, and genuinely happy.",
  },
  {
    number: "05",
    title: "For the Day We Spoke Again",
    subtitle: "A wish filled with gratitude",
    message:
      "After so many years, getting the chance to talk to you again meant more to me than I can easily put into words. After so much time and so many circumstances between us, even that little conversation felt special. I don't know how to explain that feeling without making it sound bigger or smaller than it was. I just know that I was grateful for that moment. Today, I wish that life brings you unexpected happiness, gentle surprises, and moments that make your heart feel lighter. And whatever tomorrow brings, I will always be thankful that, after all this time, we got the chance to speak again.",
  },
  {
    number: "06",
    title: "For You, Today and Always",
    subtitle: "One wish, with all my heart",
    message:
      "If I could make one final wish for you today, it would be that life gives you more happiness than you have ever hoped for. May your dreams come true, may your difficult days become easier, and may you always find reasons to believe in beautiful things. And if there is one thing I want you to know through this little birthday surprise, it is that you are still someone very special to me. Six years have passed, yet here I am, finally wishing you a happy birthday after all this time. I don't know what life has written for us, and I don't want to ask it for answers today. Today, I simply want to celebrate the day you were born and wish you a life filled with love, peace, and happiness. Happy Birthday, from a heart that wishes you nothing but good things.",
  },
];

function StarrySky() {
  const stars = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    left: `${(i * 43 + 7) % 100}%`,
    top: `${(i * 29 + 5) % 100}%`,
    size: `${2 + (i % 3)}px`,
    delay: `${(i % 8) * 0.4}s`,
  }));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B56D]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-[#F5F0E6] sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-7 text-[#C3C9D7] sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

function BirthdayCake({ candlesOut, onBlow }) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="relative mb-1 flex h-32 items-end justify-center gap-6">
        {[0, 1, 2].map((candle) => (
          <div key={candle} className="flex flex-col items-center">
            {!candlesOut && (
              <span className="candle-flame mb-1 text-xl">
                🔥
              </span>
            )}

            <div
              className={`h-12 w-3 rounded-t-sm ${
                candle === 1 ? "bg-[#F0DCA7]" : "bg-[#D6B56D]"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative w-56">
        <div className="absolute -top-4 left-2 right-2 h-9 rounded-full border-2 border-[#F0DCA7] bg-[#D6B56D]" />

        <div className="flex h-20 items-center justify-center rounded-b-2xl rounded-t-lg border-b-4 border-[#8F6B37] bg-[#E7D7B4]">
          <Heart size={30} fill="#243B60" color="#243B60" />
        </div>

        <div className="absolute -bottom-4 -left-3 -right-3 h-7 rounded-full border-b-4 border-[#8F6B37] bg-[#F0DCA7]" />
      </div>

      <p className="mt-9 font-sans text-sm text-[#C3C9D7]">
        {candlesOut
          ? "I hope your wish finds its way to something beautiful. ✨"
          : "Take a breath, close your eyes, and make a wish."}
      </p>

      <button
        onClick={onBlow}
        disabled={candlesOut}
        className="gold-button mt-6 inline-flex items-center gap-2 rounded-full bg-[#D6B56D] px-7 py-3 font-sans text-sm font-bold text-[#101B33] disabled:cursor-default disabled:opacity-60"
      >
        {candlesOut ? "Wish made with love" : "Blow out your candles"}
        <Sparkles size={17} />
      </button>
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [openedWishes, setOpenedWishes] = useState([]);
  const [activeWish, setActiveWish] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [candlesOut, setCandlesOut] = useState(false);
  const [finalOpen, setFinalOpen] = useState(false);

  const allWishesOpened = openedWishes.length === wishes.length;

  const celebrate = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 30,
      origin: { x: 0.5, y: 0.65 },
      colors: ["#D6B56D", "#F0DCA7", "#FFFFFF", "#8198BC"],
    });
  };

  const openWebsite = () => {
    setOpened(true);
  };

  const openWish = (index) => {
    setOpenedWishes((current) =>
      current.includes(index) ? current : [...current, index]
    );

    setActiveWish(index);
  };

  const goToWish = (index) => {
    if (index >= 0 && index < wishes.length) {
      openWish(index);
    }
  };

  const blowCandles = () => {
    if (candlesOut) return;

    setCandlesOut(true);
    celebrate();
  };

  const revealFinal = () => {
    setFinalOpen(true);
    celebrate();
    window.setTimeout(celebrate, 450);
  };

  return (
    <main className="night-sky relative min-h-screen overflow-hidden">
      <StarrySky />

      {!opened ? (
        <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-12">
          <div className="glass-card fade-in w-full max-w-2xl rounded-[2rem] px-6 py-14 text-center sm:px-14 sm:py-16">
            <div className="gold-gradient mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full shadow-lg shadow-black/20">
              <Gift size={34} color="#101B33" />
            </div>

            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-[#D6B56D]">
              A little something for you
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#F5F0E6] sm:text-6xl">
              Some feelings
              <span className="mt-2 block text-[#D6B56D]">
                outlast time.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-md font-sans text-sm leading-7 text-[#C3C9D7] sm:text-base">
              Some words arrive later than we ever imagined. After six
              years, I finally get to wish you on your birthday, and I
              wanted this little surprise to hold a few things my heart
              has wanted to say.
            </p>

            <button
              onClick={openWebsite}
              className="gold-button mt-9 inline-flex items-center gap-3 rounded-full bg-[#D6B56D] px-8 py-4 font-sans text-sm font-bold text-[#101B33]"
            >
              Open your little surprise
              <Heart size={18} />
            </button>

            <p className="mt-7 text-sm text-[#9DA9BF]">
              A little piece of my heart, made just for you. 💙
            </p>
          </div>
        </section>
      ) : (
        <>
          <header className="relative z-10 px-5 pb-20 pt-8 sm:pb-28 sm:pt-12">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3">
              <a
                href="#home"
                className="flex items-center gap-2 text-sm font-bold text-[#F5F0E6] sm:text-base"
              >
                <MoonStar size={22} color="#D6B56D" />
                <span>From My Heart</span>
              </a>

              <a
                href="#letter"
                className="rounded-full border border-[#D6B56D]/40 bg-[#17243D]/70 px-4 py-2 font-sans text-xs text-[#F0DCA7] transition hover:bg-[#243B60] sm:text-sm"
              >
                A letter for you
              </a>
            </nav>

            <div
              id="home"
              className="fade-in mx-auto mt-20 max-w-4xl text-center sm:mt-28"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D6B56D]/30 bg-[#17243D]/70 px-4 py-2 font-sans text-xs text-[#F0DCA7] sm:text-sm">
                <Star size={15} />
                A day worth celebrating
                <Sparkles size={15} />
              </div>

              <h1 className="text-5xl font-bold leading-[1.12] text-[#F5F0E6] sm:text-7xl lg:text-8xl">
                Happy Birthday,
                <span className="mt-3 block text-[#D6B56D]">
                  {PARTNER_NAME}
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl font-sans text-base leading-8 text-[#C3C9D7] sm:text-lg">
                After six years of distance, getting the chance to talk
                to you again made this birthday feel especially meaningful
                to me. These six wishes are a little way of sending you
                the happiness, warmth, and love I sincerely hope life
                brings your way.
              </p>

              <a
                href="#wishes"
                className="gold-button mt-9 inline-flex items-center gap-2 rounded-full bg-[#D6B56D] px-7 py-3 font-sans text-sm font-bold text-[#101B33]"
              >
                Discover your six wishes
                <ArrowDown size={17} />
              </a>
            </div>
          </header>

          <section
            id="wishes"
            className="relative z-10 px-5 py-20 sm:py-24"
          >
            <SectionHeading
              eyebrow="Six years, six wishes"
              title="Six wishes for you"
              subtitle="Each wish holds a little of what time, distance, and silence left unsaid—and a sincere hope for all the happiness you deserve."
            />

            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex items-center justify-between gap-4 font-sans text-xs text-[#C3C9D7] sm:text-sm">
                <span>Wishes opened</span>

                <span className="text-[#F0DCA7]">
                  {openedWishes.length} of {wishes.length}
                </span>
              </div>

              <div className="mb-10 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#D6B56D] transition-all duration-500"
                  style={{
                    width: `${(openedWishes.length / wishes.length) * 100}%`,
                  }}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {wishes.map((wish, index) => {
                  const isOpened = openedWishes.includes(index);
                  const isActive = activeWish === index;

                  return (
                    <button
                      key={wish.number}
                      type="button"
                      onClick={() => openWish(index)}
                      aria-expanded={isActive}
                      className={`wish-card glass-card rounded-2xl p-6 text-left ${
                        isActive
                          ? "border-[#D6B56D]/70 bg-[#243B60]/80"
                          : ""
                      }`}
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-3xl font-bold text-[#D6B56D]">
                          {wish.number}
                        </span>

                        {isOpened ? (
                          <Check size={20} color="#D6B56D" />
                        ) : (
                          <Star size={20} color="#D6B56D" />
                        )}
                      </div>

                      <p className="mb-2 font-sans text-xs uppercase tracking-widest text-[#D6B56D]">
                        {wish.subtitle}
                      </p>

                      <h3 className="text-xl font-bold leading-snug text-[#F5F0E6]">
                        {wish.title}
                      </h3>

                      <p className="mt-5 font-sans text-xs text-[#AEB8CA]">
                        {isOpened ? "Wish discovered" : "Tap to discover"}
                      </p>
                    </button>
                  );
                })}
              </div>

              {activeWish !== null && (
                <article
                  key={activeWish}
                  className="glass-card fade-in mt-8 rounded-3xl p-6 sm:p-10"
                  aria-live="polite"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="gold-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#101B33]">
                      {wishes[activeWish].number}
                    </span>

                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-[#D6B56D]">
                        {wishes[activeWish].subtitle}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-[#F5F0E6]">
                        {wishes[activeWish].title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-sans text-sm leading-8 text-[#D3D8E2] sm:text-base">
                    {wishes[activeWish].message}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
                    <button
                      onClick={() => goToWish(activeWish - 1)}
                      disabled={activeWish === 0}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-sans text-sm text-[#F5F0E6] transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ArrowLeft size={16} />
                      Previous
                    </button>

                    {activeWish < wishes.length - 1 ? (
                      <button
                        onClick={() => goToWish(activeWish + 1)}
                        className="gold-button inline-flex items-center gap-2 rounded-full bg-[#D6B56D] px-5 py-2.5 font-sans text-sm font-bold text-[#101B33]"
                      >
                        Next wish
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <a
                        href="#letter"
                        className="gold-button inline-flex items-center gap-2 rounded-full bg-[#D6B56D] px-5 py-2.5 font-sans text-sm font-bold text-[#101B33]"
                      >
                        A letter for you
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </article>
              )}

              {allWishesOpened && (
                <p className="fade-in mt-8 text-center font-sans text-sm leading-7 text-[#F0DCA7]">
                  You've discovered all six wishes. I hope each one
                  brings a little warmth to your heart. ✨
                </p>
              )}
            </div>
          </section>

          <section
            id="letter"
            className="relative z-10 px-5 py-20 sm:py-24"
          >
            <SectionHeading
              eyebrow="Words from my heart"
              title="A letter for you"
              subtitle="Some feelings take time to find their words. Today, I wanted to share a few of mine with you."
            />

            <div className="glass-card mx-auto max-w-3xl rounded-[2rem] p-6 sm:p-12">
              <div className="mb-7 flex justify-center">
                <div className="gold-gradient flex h-16 w-16 items-center justify-center rounded-full">
                  <Mail size={29} color="#101B33" />
                </div>
              </div>

              {!letterOpen ? (
                <div className="text-center">
                  <p className="text-2xl italic text-[#F0DCA7]">
                    There are a few things I wanted you to know...
                  </p>

                  <button
                    onClick={() => setLetterOpen(true)}
                    className="gold-button mt-7 inline-flex items-center gap-2 rounded-full bg-[#D6B56D] px-7 py-3 font-sans text-sm font-bold text-[#101B33]"
                  >
                    Open your letter
                    <Heart size={17} />
                  </button>
                </div>
              ) : (
                <div className="fade-in">
                  <p className="text-2xl font-bold text-[#F0DCA7]">
                    Dear {PARTNER_NAME},
                  </p>

                  <div className="mt-6 space-y-5 font-sans text-sm leading-8 text-[#D3D8E2] sm:text-base">
                    <p>
                      Happy Birthday. ❤️ I wish I could find the perfect words
                      to express everything I feel today, but maybe some feelings
                      are simply too deep to fit into words. So, for now, I just
                      want to wish you a beautiful birthday filled with happiness,
                      peace, and all the little things that make your heart smile.
                    </p>

                    <p>
                      Six years have passed, and so much has happened in between.
                      Life took us in directions we never imagined, and circumstances
                      kept us apart. There were birthdays I couldn't wish you,
                      words I couldn't say, and moments when all I could do was
                      quietly hope that you were doing well. Time moved forward,
                      but some people never really lose the place they hold in our hearts.
                    </p>

                    <p>
                      And then, after all this time, we finally got the chance to
                      talk again. I don't think I can fully explain what that moment
                      meant to me. After so many years of distance and silence,
                      even that little conversation felt precious. I was simply
                      grateful that, after all this time, we could talk again.
                    </p>

                    <p>
                      Maybe life doesn't always happen the way we once imagined.
                      Sometimes circumstances are beyond our control, and sometimes
                      there are feelings we never get the chance to express.
                      But today, I don't want to think about the distance or the
                      years that have passed. Today is about you, the day you came
                      into this world, and all the happiness I sincerely hope life
                      brings your way.
                    </p>

                    <p>
                      I hope your dreams come closer, your difficult days become
                      easier, and your heart always finds reasons to feel hopeful.
                      I hope you are surrounded by people who value you, moments
                      that bring you peace, and a happiness that stays with you
                      long after the day is over.
                    </p>

                    <p>
                      Six years later, here I am, finally wishing you a happy birthday.
                      I may not have been able to say these words in all those years,
                      but today I wanted you to know that you are still someone
                      very special to me. I don't know what the future holds, and
                      perhaps today doesn't need any answers. I just wanted to make
                      this little surprise for you and send you a wish carrying
                      all the warmth and affection in my heart.
                    </p>

                    <p>
                      Happy Birthday, once again. May life be gentle with you,
                      may happiness find you in unexpected ways, and may the year
                      ahead bring you everything your heart has been hoping for.
                      No matter how difficult it is to put these feelings into words,
                      one thing is simple: I genuinely wish you the most beautiful
                      things life has to offer. 💙
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#D6B56D]/20 pt-6">
                    <p className="text-xl font-bold text-[#F0DCA7]">
                      Take care and stay happy.
                    </p>

                    <p className="mt-2 font-sans text-sm text-[#C3C9D7]">
                      {YOUR_NAME}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section
            id="cake"
            className="relative z-10 px-5 py-20 sm:py-24"
          >
            <SectionHeading
              eyebrow="A birthday moment"
              title="Make a wish"
              subtitle="Close your eyes, make a little wish, and let this moment be a reminder that beautiful things are always worth hoping for."
            />

            <div className="glass-card mx-auto max-w-2xl rounded-[2rem] px-5 py-10 text-center sm:px-10 sm:py-12">
              <BirthdayCake
                candlesOut={candlesOut}
                onBlow={blowCandles}
              />
            </div>
          </section>

          <section className="relative z-10 px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D6B56D]/40 bg-gradient-to-br from-[#243B60] to-[#17243D] px-6 py-14 text-center shadow-2xl shadow-black/20 sm:px-14 sm:py-20">
              <MoonStar
                size={38}
                color="#D6B56D"
                className="mx-auto mb-6"
              />

              <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-[#D6B56D]">
                A little something from my heart
              </p>

              <h2 className="text-4xl font-bold leading-tight text-[#F5F0E6] sm:text-6xl">
                And one last wish for you.
              </h2>

              <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-8 text-[#C3C9D7] sm:text-base">
                I couldn't fit six years of feelings into a few words,
                so I made you six wishes instead. I hope this little
                surprise brings a smile to your face and reminds you
                that, even across time and distance, I sincerely wish
                beautiful things for you.
              </p>

              {!finalOpen ? (
                <button
                  onClick={revealFinal}
                  className="gold-button mt-9 inline-flex items-center gap-2 rounded-full bg-[#D6B56D] px-7 py-4 font-sans text-sm font-bold text-[#101B33]"
                >
                  A little more from my heart
                  <Gift size={18} />
                </button>
              ) : (
                <div className="fade-in mt-10">
                  <Heart
                    size={42}
                    color="#F0DCA7"
                    fill="#D6B56D"
                    className="mx-auto mb-5"
                  />

                  <p className="text-3xl font-bold text-[#F0DCA7] sm:text-4xl">
                    Happy Birthday, {PARTNER_NAME}. 💙
                  </p>

                  <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-8 text-[#F5F0E6] sm:text-base">
                    After all these years, I am grateful for this little
                    chance to wish you again. There is still so much I
                    cannot put into words, but today I hope you feel how
                    sincerely I wish happiness for you. May life bring
                    you beautiful moments, peaceful days, and countless
                    reasons to smile. Take care of yourself, always. 💙
                  </p>

                  <button
                    onClick={celebrate}
                    className="mt-7 rounded-full border border-[#D6B56D]/50 px-6 py-3 font-sans text-sm text-[#F0DCA7] transition hover:bg-white/5"
                  >
                    Celebrate again ✨
                  </button>
                </div>
              )}
            </div>
          </section>

          <footer className="relative z-10 px-5 pb-10 pt-5 text-center">
            <Star size={20} color="#D6B56D" className="mx-auto mb-4" />

            <p className="text-lg font-bold text-[#F0DCA7]">
              A little wish, carried across six years. 💙
            </p>

            <p className="mx-auto mt-2 max-w-md font-sans text-xs leading-6 text-[#9DA9BF] sm:text-sm">
              Some feelings are hard to put into words, but wishing
              you happiness will always come from the heart.
            </p>

            <a
              href="#home"
              className="mt-6 inline-block font-sans text-sm text-[#D6B56D] transition-colors hover:text-[#F0DCA7]"
            >
              Back to the beginning ↑
            </a>
          </footer>
        </>
      )}
    </main>
  );
}

export default App;
