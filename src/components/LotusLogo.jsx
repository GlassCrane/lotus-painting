// Stylized gold lotus mark — evokes the business-card logo.
// Swap for the real logo any time: drop a PNG in /public and use <img> instead.

export default function LotusLogo({ className = '', gradientId = 'lotusGold' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 170"
      role="img"
      aria-label="Lotus logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7E0A0" />
          <stop offset="0.45" stopColor="#E2B24C" />
          <stop offset="1" stopColor="#B07F26" />
        </linearGradient>
      </defs>

      <g fill={`url(#${gradientId})`} stroke="#141210" strokeWidth="1.4" strokeLinejoin="round">
        {/* center petal */}
        <path d="M100 18 C114 56 114 104 100 134 C86 104 86 56 100 18 Z" />
        {/* left petals */}
        <path d="M100 136 C74 112 61 74 67 48 C88 72 98 106 100 136 Z" />
        <path d="M100 139 C57 126 31 97 23 70 C54 90 87 116 100 139 Z" />
        <path d="M100 142 C49 140 21 122 9 102 C44 116 84 128 100 142 Z" />
        {/* right petals (mirrored) */}
        <g transform="translate(200,0) scale(-1,1)">
          <path d="M100 136 C74 112 61 74 67 48 C88 72 98 106 100 136 Z" />
          <path d="M100 139 C57 126 31 97 23 70 C54 90 87 116 100 139 Z" />
          <path d="M100 142 C49 140 21 122 9 102 C44 116 84 128 100 142 Z" />
        </g>
        {/* water cradle */}
        <path
          d="M40 138 C64 162 136 162 160 138 C150 156 122 164 100 164 C78 164 50 156 40 138 Z"
          stroke="none"
        />
      </g>
    </svg>
  )
}
