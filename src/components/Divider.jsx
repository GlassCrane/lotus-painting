// The signature Lotus "curved divide" — a sweeping black↔gold split,
// straight off the business card. flip reverses the curve direction.
export default function Divider({ flip = false, from = 'gold' }) {
  return (
    <div className={`divider ${flip ? 'divider--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
        <defs>
          <linearGradient id="divGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#B07F26" />
            <stop offset="0.5" stopColor="#E2B24C" />
            <stop offset="1" stopColor="#F2D27E" />
          </linearGradient>
        </defs>
        <path
          d="M0,160 C420,40 900,200 1440,60 L1440,160 Z"
          fill={from === 'gold' ? 'url(#divGold)' : '#141210'}
        />
      </svg>
    </div>
  )
}
