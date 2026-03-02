const BOTTLE_GROUP = "/images/10k bottle.png";
const FRUIT_PUNCH = "/images/fruit punch.png";
const ORANGE_BOTTLE = "/images/organge bottle.png";
const LEMON_LIME = "/images/lemon lime.png";
const BLUE_WAVE = "/images/blue wave.png";
const LOGO = "/images/10K_logo.png";
const WHO_RUNNER =
  "https://cdn.prod.website-files.com/67eae30daa9a30d4e194c70e/6988b3d7c4d3002b8b35c513_XiZ7pRvCzro.jpg";
const WHO_REC =
  "https://cdn.prod.website-files.com/67eae30daa9a30d4e194c70e/6988b32e29cc0902815eeba8_u_yi-1kUh2o.jpg";
const WHO_PARENT =
  "https://cdn.prod.website-files.com/67eae30daa9a30d4e194c70e/6988b46bc00b0452ddc1731a_mse1vdzZXjA.jpg";
const WHO_BIKE =
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800";
const MERCH_TEE =
  "https://cdn.prod.website-files.com/67eae30daa9a30d4e194c70e/687599d0a086126efcbfe263_Classic10-kshirt.png";
const COACH_VIDEO = "/images/coachvideo.mp4";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      {/* TICKER */}
      <div className="ticker" aria-hidden>
        <div className="ticker-inner">
          <span className="ticker-item">Clean Ingredients</span>
          <span className="ticker-item">No Artificial Dyes</span>
          <span className="ticker-item">Real Cane Sugar</span>
          <span className="ticker-item">No Artificial Sweeteners</span>
          <span className="ticker-item">Electrolytes That Work</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">Clean Ingredients</span>
          <span className="ticker-item">No Artificial Dyes</span>
          <span className="ticker-item">Real Cane Sugar</span>
          <span className="ticker-item">No Artificial Sweeteners</span>
          <span className="ticker-item">Electrolytes That Work</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <ul className="nav-links nav-links-left">
          <li>
            <a href="#flavors">Flavors</a>
          </li>
          <li>
            <a href="#ingredients">Ingredients</a>
          </li>
        </ul>
        <a href="#" className="nav-logo">
          <span className="nav-logo-bump">
            <img src={LOGO} alt="10-K Thirst Quencher" />
          </span>
        </a>
        <ul className="nav-links nav-links-right">
          <li>
            <a href="#find-us">Find Us</a>
          </li>
          <li>
            <a href="#merch" className="nav-cta">
              Shop Merch
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>★</span> 10-K is back <span>★</span>
          </div>
          <h1 className="hero-headline">
            The Natural Thirst Quencher
          </h1>
          <p className="hero-sub">
            No artificial dyes. No artificial sweeteners. Real cane sugar.
            Electrolytes that actually work. Hydration you can read on the
            label.
          </p>
          <div className="hero-actions">
            <a href="#flavors" className="btn-primary">
              See the Flavors
            </a>
            <a href="#merch" className="btn-secondary">
              Shop Merch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-bg" />
          <div className="hero-bottles">
            <img
              src={BOTTLE_GROUP}
              alt="10-K Thirst Quencher - Fruit Punch, Orange, Lemon-Lime, Blue Wave"
            />
          </div>
          <div className="hero-badge">Real Hydration. Real Effort.</div>
        </div>
      </section>

      {/* FLAVORS */}
      <section className="flavor-strip" id="flavors">
        <div className="flavor-strip-header reveal">
          <p className="section-label">The Lineup</p>
          <h2 className="section-title">
            Flavors Worth <em>Finishing</em>
          </h2>
        </div>
        <div className="flavors-grid">
          <div
            className="flavor-card reveal reveal-delay-1"
            data-flavor="fruit-punch"
          >
            <div className="flavor-card-img">
              <img src={FRUIT_PUNCH} alt="10-K Fruit Punch" />
            </div>
            <div className="flavor-card-body">
              <div className="flavor-name">
                <span
                  className="flavor-dot"
                  style={{ background: "var(--fruit-punch)" }}
                />
                Fruit Punch
              </div>
              <div className="flavor-desc">
                Bold and balanced. The flavor that started it all.
              </div>
            </div>
          </div>
          <div className="flavor-card reveal reveal-delay-2" data-flavor="orange">
            <div className="flavor-card-img">
              <img src={ORANGE_BOTTLE} alt="10-K Orange" />
            </div>
            <div className="flavor-card-body">
              <div className="flavor-name">
                <span
                  className="flavor-dot"
                  style={{ background: "var(--orange)" }}
                />
                Orange
              </div>
              <div className="flavor-desc">
                Clean citrus. Real color. Nothing you can&apos;t pronounce.
              </div>
            </div>
          </div>
          <div
            className="flavor-card reveal reveal-delay-3"
            data-flavor="lemon-lime"
          >
            <div className="flavor-card-img">
              <img src={LEMON_LIME} alt="10-K Lemon-Lime" />
            </div>
            <div className="flavor-card-body">
              <div className="flavor-name">
                <span
                  className="flavor-dot"
                  style={{ background: "var(--lemon-lime)" }}
                />
                Lemon-Lime
              </div>
              <div className="flavor-desc">
                Tart, bright, and cold. Works on every court and every field.
              </div>
            </div>
          </div>
          <div
            className="flavor-card reveal reveal-delay-4"
            data-flavor="blue-wave"
          >
            <div className="flavor-card-img">
              <img src={BLUE_WAVE} alt="10-K Blue Wave" />
            </div>
            <div className="flavor-card-body">
              <div className="flavor-name">
                <span
                  className="flavor-dot"
                  style={{ background: "#4AA8D8" }}
                />
                Blue Wave
              </div>
              <div className="flavor-desc">
                Light, crisp, and easy to drink from the first sip to the last.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="brand-story">
        <div className="brand-story-content reveal">
          <p className="section-label">Est. 1985</p>
          <h2 className="section-title">
            We Never Left.
            <br />
            We Just <em>Waited.</em>
          </h2>
          <p>
            10-K started on sidelines. Little league dugouts. Basketball
            halftimes. Friday night football. We were never just about the
            trophies.
          </p>
          <p>
            We were about showing up and putting in the work. Now we are back
            with the{" "}
            <strong>
              same name, same spirit, and a better formula
            </strong>
            . No artificial dyes. No artificial sweeteners. No fillers. Just
            hydration that respects what you put in.
          </p>
        </div>
        <div className="brand-story-visual">
          <div className="brand-story-video-wrap">
            <video
              className="brand-story-video"
              src={COACH_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
            <div className="brand-story-video-overlay" aria-hidden />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="features-header reveal">
          <p className="section-label">What&apos;s in the Bottle</p>
          <h2 className="section-title">
            Clean Label. <em>Real</em> Hydration.
          </h2>
        </div>
        <div className="features-grid">
          <div className="feature-card reveal reveal-delay-1">
            <span className="feature-icon">🚫</span>
            <div className="feature-title">No Artificial Dyes</div>
            <p className="feature-body">
              The color comes from the flavor. Nothing synthetic. Nothing you
              cannot pronounce.
            </p>
          </div>
          <div className="feature-card reveal reveal-delay-2">
            <span className="feature-icon">🍬</span>
            <div className="feature-title">No Artificial Sweeteners</div>
            <p className="feature-body">
              Sweetened with real cane sugar. No aspartame. No sucralose. No
              stevia aftertaste.
            </p>
          </div>
          <div className="feature-card reveal reveal-delay-3">
            <span className="feature-icon">⚡</span>
            <div className="feature-title">Electrolytes That Work</div>
            <p className="feature-body">
              Sodium and potassium in ratios designed for actual hydration, not
              label decoration.
            </p>
          </div>
          <div className="feature-card reveal reveal-delay-4">
            <span className="feature-icon">✓</span>
            <div className="feature-title">No Fillers</div>
            <p className="feature-body">
              Every ingredient earns its place. If it does not help you hydrate,
              it is not in the bottle.
            </p>
          </div>
        </div>
      </section>

      {/* NATURAL THIRST QUENCHER RIBBON SEPARATOR */}
      <div className="ticker ticker-separator" aria-hidden>
        <div className="ticker-inner ticker-natural">
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
          <span className="ticker-item">The Natural Thirst Quencher</span>
        </div>
      </div>

      {/* INGREDIENTS COMPARE */}
      <section className="ingredients" id="ingredients">
        <div className="ingredients-header reveal">
          <p className="section-label">Label Transparency</p>
          <h2 className="section-title">
            Read the <em>Label.</em>
            <br />
            Then Read Theirs.
          </h2>
        </div>
        <div className="compare-table reveal">
          <div className="compare-head">
            <div>Category</div>
            <div>The Other Guys</div>
            <div>10-K Thirst Quencher</div>
          </div>
          <div className="compare-row">
            <div>Color</div>
            <div className="bad">
              <span className="badge-x">✗</span>Red 40, Blue 1, Yellow 5
            </div>
            <div className="good">
              <span className="badge-check">✓</span>Natural colors from real
              sources
            </div>
          </div>
          <div className="compare-row">
            <div>Sweetener</div>
            <div className="bad">
              <span className="badge-x">✗</span>Sucralose or Aspartame
            </div>
            <div className="good">
              <span className="badge-check">✓</span>Real cane sugar
            </div>
          </div>
          <div className="compare-row">
            <div>Sugar Source</div>
            <div className="bad">
              <span className="badge-x">✗</span>High fructose corn syrup
            </div>
            <div className="good">
              <span className="badge-check">✓</span>Simple, clean ingredients
            </div>
          </div>
          <div className="compare-row">
            <div>Additives</div>
            <div className="bad">
              <span className="badge-x">✗</span>Brominated vegetable oil
            </div>
            <div className="good">
              <span className="badge-check">✓</span>Nothing you need to Google
            </div>
          </div>
          <div className="compare-row">
            <div>Label</div>
            <div className="bad">
              <span className="badge-x">✗</span>Glycerol ester of rosin
            </div>
            <div className="good">
              <span className="badge-check">✓</span>A clean label you can read
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            marginTop: "1.2rem",
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          *Ingredient comparisons are based on publicly available label
          information from leading sports drink brands. Individual product
          formulas may vary.
        </p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="who-for" id="who-for">
        <div className="who-for-header reveal">
          <p className="section-label">The Audience</p>
          <h2 className="section-title">
            10-K Is For the <em>Everyday Effort.</em>
          </h2>
        </div>
        <div className="who-grid">
          <div className="who-card reveal reveal-delay-1">
            <div className="who-card-img">
              <div
                className="who-card-img-bg"
                style={{ backgroundImage: `url('${WHO_RUNNER}')` }}
              />
              <div className="who-card-img-overlay" aria-hidden />
            </div>
            <div className="who-card-body">
              <div className="who-card-title">The Weekend Runner</div>
              <div className="who-card-desc">
                The 5K on Saturday morning. The trail run before the weather
                turns. You do not need a sponsor. You just need a drink that
                keeps up.
              </div>
            </div>
          </div>
          <div className="who-card reveal reveal-delay-2">
            <div className="who-card-img">
              <div
                className="who-card-img-bg"
                style={{ backgroundImage: `url('${WHO_REC}')` }}
              />
              <div className="who-card-img-overlay" aria-hidden />
            </div>
            <div className="who-card-body">
              <div className="who-card-title">The Rec League Regular</div>
              <div className="who-card-desc">
                Tuesday night basketball. Sunday flag football. The competition
                is real even if the stakes are not. Hydration should be, too.
              </div>
            </div>
          </div>
          <div className="who-card reveal reveal-delay-3">
            <div className="who-card-img">
              <div
                className="who-card-img-bg"
                style={{ backgroundImage: `url('${WHO_PARENT}')` }}
              />
              <div className="who-card-img-overlay" aria-hidden />
            </div>
            <div className="who-card-body">
              <div className="who-card-title">The Sideline Parent</div>
              <div className="who-card-desc">
                Coaching the team. Filling the cooler. Teaching kids what effort
                looks like. You remember 10-K. Now your kids get to as well.
              </div>
            </div>
          </div>
          <div className="who-card reveal reveal-delay-4">
            <div className="who-card-img">
              <div
                className="who-card-img-bg"
                style={{ backgroundImage: `url('${WHO_BIKE}')` }}
              />
              <div className="who-card-img-overlay" aria-hidden />
            </div>
            <div className="who-card-body">
              <div className="who-card-title">The Saturday Morning Bike Ride</div>
              <div className="who-card-desc">
                Miles before the rest of the world wakes up. The road. The wind.
                The burn. You earned that drink at the end.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCH */}
      <section className="merch" id="merch">
        <div className="merch-content reveal">
          <p className="section-label">Limited Run</p>
          <h2 className="section-title">
            The Classic
            <br />
            <em>10-K Tee</em>
          </h2>
          <p>
            The original mark. On a tee built to last. Limited stock. No
            restocks planned.
          </p>
          <a
            href="https://checkout.drink10k.com/b/8x2cN5all6Mc0an7lE6oo00"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the Classic Tee
          </a>
        </div>
        <div className="merch-image reveal">
          <img src={MERCH_TEE} alt="10-K Classic Tee" />
        </div>
      </section>

      {/* FIND US */}
      <section className="find-us" id="find-us">
        <div className="find-us-header reveal">
          <p className="section-label">Retail</p>
          <h2 className="section-title">
            Find <em>10-K</em>
          </h2>
        </div>
        <div className="find-us-retail reveal">
          <img
            src="/images/rouses.png"
            alt="Rouses Markets"
            className="find-us-logo"
          />
          <div className="retail-grid">
            <div className="retail-item">New Orleans, LA</div>
            <div className="retail-item">Baton Rouge, LA</div>
            <div className="retail-item">Slidell, LA</div>
            <div className="retail-item">Mandeville, LA</div>
            <div className="retail-item">Houma, LA</div>
            <div className="retail-item">Lafayette, LA</div>
            <div className="retail-item">Lake Charles, LA</div>
            <div className="retail-item">Gulfport, MS</div>
          </div>
          <p className="find-us-more">More coming soon.</p>
        </div>
        <p className="find-us-note reveal">
          <a href="#newsletter" style={{ color: "var(--navy)", fontWeight: 600 }}>
            Sign up for retail drop alerts.
          </a>
        </p>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter" id="newsletter">
        <p className="section-label">Stay in the Loop</p>
        <h2>
          New Flavors. Retail Drops.
          <br />
          Merch Updates.
        </h2>
        <p>No noise. Just updates when something worth knowing happens.</p>
        <form className="newsletter-form" action="#" method="get">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img src={LOGO} alt="10-K Thirst Quencher" />
            <p>The Natural Thirst Quencher</p>
            <div className="footer-tagline">
              Show up. Put in the work. Hydrate. Repeat.
            </div>
          </div>
          <div className="footer-col">
            <h4>Flavors</h4>
            <ul>
              <li>
                <a href="#flavors">Fruit Punch</a>
              </li>
              <li>
                <a href="#flavors">Orange</a>
              </li>
              <li>
                <a href="#flavors">Lemon-Lime</a>
              </li>
              <li>
                <a href="#flavors">Blue Wave</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#merch">Shop Merch</a>
              </li>
              <li>
                <a href="#find-us">Find Us</a>
                <span className="footer-coming-soon">(coming soon)</span>
              </li>
              <li>
                <a href="#">Careers</a>
                <span className="footer-coming-soon">(coming soon)</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact">
              <a href="tel:5042300001">(504) 230-0001</a>
              <a href="mailto:contact@drink10k.com">contact@drink10k.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Drink 10K, LLC. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
