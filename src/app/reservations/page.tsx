import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { bookingPerks, roomHighlights } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'Book a stay at Hotel Aureline and explore direct booking benefits.',
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Reserve a stay with direct-booking benefits built in."
        intro="Use the enquiry form below to request your preferred dates, room type, and any extras. A reservations host will confirm availability and tailor the stay."
      />

      <section className="shell contact-grid">
        <article className="card accent-card">
          <h2>When you book direct</h2>
          <ul className="check-list compact-list">
            {bookingPerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Booking request</h2>
          <form className="form-grid booking-form">
            <label>
              Arrival
              <input type="date" name="arrival" />
            </label>
            <label>
              Departure
              <input type="date" name="departure" />
            </label>
            <label>
              Guests
              <select name="guests" defaultValue="2">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
              </select>
            </label>
            <label>
              Room type
              <select name="roomType" defaultValue={roomHighlights[0].name}>
                {roomHighlights.map((room) => (
                  <option key={room.name} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="full-span">
              Special requests
              <textarea name="requests" rows={5} placeholder="Airport transfer, spa treatments, dietary notes, celebration details..." />
            </label>
            <button className="button button-primary" type="submit">
              Request reservation
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
