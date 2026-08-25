import { useState } from "react";
import { profile } from "@data/profile";

export default function ContactActions() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const body = [
      name.trim() ? `Hi Akhila,` : "Hi Akhila,",
      "",
      message.trim() || "Say hello",
      "",
      name.trim() ? `From, ${name.trim()}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = new URL(`mailto:${profile.email}`);
    mailto.searchParams.set("subject", subject.trim() || "Hello from your portfolio");
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
  }

  return (
    <div className="contact-panel">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <label>
            <span>Your name</span>
            <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
          </label>
          <label>
            <span>Subject</span>
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="what's this about?"
            />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="say hello"
            rows={7}
          />
        </label>
        <div className="contact-form-footer">
          <button type="submit">
            send <span aria-hidden="true">→</span>
          </button>
          <small>opens in your mail app</small>
        </div>
      </form>
      <div className="contact-side-links" aria-label="Other contact links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.linkedin} rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.medium} rel="noreferrer">
          Medium
        </a>
        <a href={profile.resume} download>
          Resume
        </a>
      </div>
    </div>
  );
}
