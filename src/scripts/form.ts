// Small enhancement for the static contact form. Because the site has
// no backend, submitting composes a pre-filled email to the company
// address in the visitor's own mail app — and always offers the phone
// as the fastest alternative.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quote-form') as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const org = String(data.get('org') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const eventType = String(data.get('eventType') ?? '');
    const dates = String(data.get('dates') ?? '').trim();
    const attendance = String(data.get('attendance') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = encodeURIComponent(`Cleanup scope request — ${eventType}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Organization: ${org}`,
        `Phone: ${phone}`,
        `Event type: ${eventType}`,
        `Dates: ${dates}`,
        `Expected attendance: ${attendance}`,
        '',
        message,
        '',
        '— sent from the A Better Clean website',
      ].join('\n')
    );

    const email = form.dataset.email ?? '';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
});
