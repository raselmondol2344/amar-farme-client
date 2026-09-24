import Marquee from "react-fast-marquee";

export default function Marqueee() {
  return (
    <div className="w-full border-y border-green-100 bg-green-50/80">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-2 py-2 sm:gap-3 sm:px-4 md:px-6 lg:py-3">
        {/* Message Button */}
        <button className="shrink-0 rounded-md bg-green-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-green-700 sm:px-4 sm:py-2 sm:text-sm">
          বার্তা{" "}
        </button>

        {/* Marquee */}
        <div className="min-w-0 flex-1 overflow-hidden rounded-md bg-white/70 py-1.5 shadow-sm sm:py-2">
          <Marquee
            speed={45}
            pauseOnHover={true}
            gradient={true}
            gradientColor="#f0fdf4"
            gradientWidth={40}
          >
            <p className="whitespace-nowrap px-4 text-xs font-medium text-gray-700 sm:px-6 sm:text-sm md:text-base">
              🌱 নিজের খামারের উৎপাদন
              <span className="mx-3 text-green-500">•</span>
              🥬 টাটকা শাক-সবজি
              <span className="mx-3 text-green-500">•</span>
              🥛 খাঁটি গরুর দুধ
              <span className="mx-3 text-green-500">•</span>
              🐟 তাজা মাছ
              <span className="mx-3 text-green-500">•</span>
              🐔 দেশি মুরগি
              <span className="mx-3 text-green-500">•</span>
              🦆 হাঁস
              <span className="mx-3 text-green-500">•</span>
              🚚 সতেজ পণ্য সরাসরি আপনার ঘরে
              <span className="mx-3 text-green-500">•</span>
              💚 খামার থেকে সরাসরি আপনার ঘরে — টাটকা, খাঁটি ও স্বাস্থ্যকর
              খাবারের নিশ্চয়তা!
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
