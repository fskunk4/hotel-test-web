import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Hotel Aureline for reservations, events, and concierge assistance.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team planning your stay."
        intro="Whether you need a room recommendation, airport transfer, dining reservation, or a private event setup, the Aureline team can help."
      />

      <section className="shell contact-grid">
        <article className="card">
          <h2>Reach us directly</h2>
          <ul className="stack-list contact-list">
            <li>
              <strong>Phone</strong>
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>Address</strong>
              <span>{site.address}</span>
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>Send an enquiry</h2>
          <form className="form-grid">
            <label>
              Full name
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              Email address
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              Topic
              <select name="topic" defaultValue="reservations">
                <option value="reservations">Reservations</option>
                <option value="events">Private events</option>
                <option value="wellness">Wellness</option>
                <option value="dining">Dining</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows={5} />
            </label>
            <button className="button button-primary" type="submit">
              Send enquiry
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
