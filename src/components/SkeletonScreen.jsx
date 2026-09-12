function SkeletonScreen({ isVisible }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-neutral-950 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <div className="skeleton-shimmer h-10 w-16 rounded-xl" />
          <div className="hidden gap-2 sm:flex">
            <div className="skeleton-shimmer h-9 w-16 rounded-lg" />
            <div className="skeleton-shimmer h-9 w-16 rounded-lg" />
            <div className="skeleton-shimmer h-9 w-20 rounded-lg" />
          </div>
          <div className="skeleton-shimmer h-10 w-10 rounded-xl sm:hidden" />
        </div>

        <div className="relative mt-28 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative">
            <div className="skeleton-shimmer h-7 w-48 rounded-full" />
            <div className="skeleton-shimmer mt-6 h-3 w-48 rounded-full" />
            <div className="skeleton-shimmer mt-5 h-14 w-full max-w-xl rounded-xl" />
            <div className="skeleton-shimmer mt-3 h-14 w-4/5 max-w-lg rounded-xl" />
            <div className="skeleton-shimmer mt-7 h-4 w-full max-w-xl rounded-full" />
            <div className="skeleton-shimmer mt-3 h-4 w-4/5 max-w-md rounded-full" />
            <div className="mt-9 flex gap-3">
              <div className="skeleton-shimmer h-12 w-36 rounded-xl" />
              <div className="skeleton-shimmer h-12 w-28 rounded-xl" />
            </div>
            <div className="mt-9 flex gap-3">
              <div className="skeleton-shimmer h-9 w-24 rounded-full" />
              <div className="skeleton-shimmer h-9 w-28 rounded-full" />
            </div>
          </div>

          <div className="skeleton-shimmer h-90 w-full rounded-4xl opacity-80" />
        </div>

        <div className="mt-20 grid grid-cols-2 border-y border-neutral-800 py-8 sm:grid-cols-4">
          <div className="skeleton-shimmer h-8 w-12 rounded-lg" />
          <div className="skeleton-shimmer h-8 w-12 rounded-lg" />
          <div className="skeleton-shimmer h-8 w-12 rounded-lg" />
          <div className="skeleton-shimmer h-8 w-12 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonScreen
