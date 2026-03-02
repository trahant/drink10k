"use client";

export function NewsletterForm() {
  return (
    <form
      className="newsletter-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
