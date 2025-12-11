'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(formElement) as any).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <input
        type="text"
        name="name"
        placeholder="Your Name *"
        required
        value={formState.name}
        onChange={(e) => setFormState({...formState, name: e.target.value})}
        className="input input-bordered w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email *"
        required
        value={formState.email}
        onChange={(e) => setFormState({...formState, email: e.target.value})}
        className="input input-bordered w-full"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formState.subject}
        onChange={(e) => setFormState({...formState, subject: e.target.value})}
        className="input input-bordered w-full"
      />

      <textarea
        name="message"
        className="textarea textarea-bordered w-full h-32"
        placeholder="Your Message *"
        required
        value={formState.message}
        onChange={(e) => setFormState({...formState, message: e.target.value})}
      />

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="alert alert-success">
          <span>Thank you! Your message has been sent.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="alert alert-error">
          <span>Error sending message. Please try again.</span>
        </div>
      )}
    </form>
  );
}
