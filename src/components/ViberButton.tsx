import { CONTACT } from '@/lib/content'

export function ViberButton() {
  return (
    <a
      href={`viber://chat?number=+359${CONTACT.warehouse.phone.replace(/\D/g, '').slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Пишете ни в Viber"
      title="Пишете ни в Viber"
      className="fixed z-40 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 active:scale-100 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7360F2]"
      style={{
        bottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))',
        right: '2rem',
        backgroundColor: '#7360F2',
        boxShadow: '0 0 18px rgba(115,96,242,0.45), 0 4px 16px rgba(0,0,0,0.18)',
      }}
    >
      {/* Viber icon */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="white"
        aria-hidden="true"
        role="img"
      >
        <path d="M26.1 5.7C23.5 3.3 19.9 2 16 2c-4 0-7.6 1.4-10.2 3.8C3 8.2 1.7 11.5 1.7 15.1c0 2.7.7 5.3 2.2 7.6L2 30l7.5-1.9c2.1 1.2 4.5 1.9 7 1.9 3.9 0 7.5-1.4 10.2-3.8 2.7-2.5 4.2-5.8 4.2-9.2-.1-3.6-1.5-6.9-4.8-11.3zm-2.3 16.7c-.6.7-1.5 1.1-2.4 1.1-.3 0-.5 0-.8-.1-1.5-.4-3.1-1.2-4.7-2.5-1.4-1.1-2.8-2.6-4-4.2-1.1-1.5-1.9-3-2.3-4.4-.3-1.1-.1-2.1.5-2.9.5-.6 1.1-.9 1.8-.9.3 0 .6.1.8.2.5.3 1.3 1.2 1.9 2.1.4.6.6 1.1.6 1.5 0 .5-.2.9-.5 1.2l-.5.5c-.1.1-.2.3-.2.4 0 .2.2.5.3.7.8 1.4 1.8 2.5 3 3.4.3.2.6.4.8.4.2 0 .3-.1.5-.3l.5-.5c.3-.3.8-.5 1.3-.5.5 0 1 .2 1.6.6 1 .7 1.9 1.5 2.1 2 .2.5.1 1-.3 1.7z"/>
      </svg>
    </a>
  )
}
