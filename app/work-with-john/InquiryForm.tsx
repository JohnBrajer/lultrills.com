'use client';

import { useState, type FormEvent } from 'react';

export default function InquiryForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setError('');
    try {
      const source = new URLSearchParams(window.location.search).get('source') || 'direct';
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(form), consent: form.get('consent') === 'on', source }),
      });
      const result = await response.json();
      if (!response.ok || !result.received) throw new Error(result.error || 'Your inquiry could not be saved. Please try again.');
      setReference(result.reference);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not connect. Please retry or use the email below.');
    } finally {
      setBusy(false);
    }
  }

  if (reference) {
    return (
      <div className="inquiry-received" role="status">
        <h3>Inquiry received.</h3>
        <p>Your brief is saved in John’s private inquiry queue. Keep this reference if you follow up by email.</p>
        <code>{reference}</code>
        <p>No payment was taken. Scope, timing, and price are agreed directly before work starts.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="inquiry-form">
      <div className="form-pair">
        <label>Your name<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>Reply email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
      <label>Your website<input name="website" type="url" placeholder="https://yourwebsite.com" autoComplete="url" required maxLength={1000} /></label>
      <label>What is confusing or broken?<textarea name="problem" required minLength={10} maxLength={3000} rows={4} /></label>
      <label>What would a useful result look like?<textarea name="outcome" required minLength={5} maxLength={1000} rows={3} /></label>
      <div className="form-pair">
        <label>Timeframe <span>(optional)</span><input name="timeframe" maxLength={200} /></label>
        <label>Budget range <span>(optional)</span><input name="budget" maxLength={200} /></label>
      </div>
      <div hidden aria-hidden="true"><label>Leave empty<input name="companyFax" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="inquiry-consent"><input name="consent" type="checkbox" required /> <span>I agree that John Brajer / Trillsverse LLC may store this inquiry and contact me about it. This does not subscribe me to marketing.</span></label>
      <p className="form-note">Please don’t include passwords, payment details, or private customer information. <a href="/privacy">Privacy policy</a>.</p>
      {error && <p role="alert" className="inquiry-error">{error}</p>}
      <button type="submit" className="offer-action" disabled={busy}>{busy ? 'Saving inquiry…' : 'Send inquiry'}</button>
      <noscript><p>This form needs JavaScript. Email your website and the problem to Contact@Trillsverse.com.</p></noscript>
    </form>
  );
}
