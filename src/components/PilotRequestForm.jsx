import { useRef, useState } from "react";

export default function PilotRequestForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const confirmation = useRef(null);

  async function submit(event) {
    event.preventDefault();
    if (pending.current || status === "saved") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    for (const key of Object.keys(data)) data[key] = data[key].trim();
    if (!data.name || !data.company) {
      setError("Please enter your name and company.");
      return;
    }
    pending.current = true;
    setStatus("saving");
    setError("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 22000);
    try {
      const response = await fetch("/api/efs-pilot", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.saved !== true) {
        throw new Error(response.status === 429 ? "Please wait one minute before trying again." : "We couldn’t confirm your request. Please try again.");
      }
      form.reset();
      setStatus("saved");
      requestAnimationFrame(() => confirmation.current?.focus());
    } catch (failure) {
      setStatus("idle");
      setError(failure.name === "AbortError" ? "The connection timed out. Please try again." : "We couldn’t confirm your request. " + (failure.message.startsWith("Please wait") ? failure.message : "Please check your connection and try again."));
    } finally {
      clearTimeout(timeout);
      pending.current = false;
    }
  }

  if (status === "saved") return (
    <div className="pilot-confirmation" role="status" tabIndex={-1} ref={confirmation}>
      <h3>Thanks. Your pilot request is saved.</h3>
      <p>The EFS team has your details and can follow up at the email you provided.</p>
    </div>
  );

  return (
    <form className="pilot-form" onSubmit={submit} aria-label="Request a corporate pilot">
      <p>Tell us a little about your team. Fields marked * are required.</p>
      <fieldset disabled={status === "saving"}>
        <div className="pilot-fields">
          <label>Full name *<input name="name" autoComplete="name" required maxLength={120} /></label>
          <label>Work email *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label>Company *<input name="company" autoComplete="organization" required maxLength={200} /></label>
          <label>Team size (optional)<select name="teamSize" defaultValue=""><option value="">Select team size</option><option>1–10</option><option>11–25</option><option>26–50</option><option>51–100</option><option>101+</option><option>Not sure yet</option></select></label>
        </div>
        <label>What would you like your team to accomplish? (optional)<textarea name="goals" maxLength={2000} rows={4} /></label>
        <div className="pilot-trap" aria-hidden="true"><label>Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <p className="pilot-privacy">Your details will be shared with the EFS team to discuss your pilot request.</p>
        <button type="submit">{status === "saving" ? "Saving your request…" : "Request a pilot →"}</button>
      </fieldset>
      {error && <p className="pilot-error" role="alert">{error}</p>}
      <span className="sr-only" role="status">{status === "saving" ? "Saving your request" : ""}</span>
    </form>
  );
}
