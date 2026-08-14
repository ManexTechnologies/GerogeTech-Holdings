'use client'

const highlights = [
  '📱 Latest iPhone 15 Pro Max in stock',
  '🚚 Free delivery in Mutare on orders over $200',
  '💬 Order any product on WhatsApp',
  '✅ Genuine & warranty-backed electronics',
  '🎁 New Samsung Galaxy S24 now available',
]

export default function NewsHighlights() {
  return (
    <div className="sticky top-[60px] sm:top-[68px] z-40 bg-gradient-to-r from-gtred via-gtred to-gtreddark text-white py-3 sm:py-4 border-b border-gtreddark/30">
      <div className="container">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live indicator */}
          <div className="shrink-0 flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">LIVE</span>
          </div>
          
          {/* Scrolling ticker wrapper */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div 
              className="flex gap-20 items-center"
              style={{ 
                animation: 'scroll 50s linear infinite',
                width: 'max-content'
              }}
            >
              {[...highlights, ...highlights].map((highlight, idx) => (
                <div key={idx} className="flex-shrink-0 text-sm sm:text-base font-bold text-white drop-shadow-lg">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
