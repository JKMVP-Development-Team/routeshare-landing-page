import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8"> 
        {/* Left: Text + Buttons */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-7xl md:text-[10rem] text-white font-normal leading-[0.8] text-center md:text-left mb-14">
            <span className="block">Route</span>
            <span className="block">Share</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
            Road trips have never been safer and easier.
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
            Begin your journey today.
          </p>
        
        {/* iOS and Android Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">
              Download on App Store
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">
              Get it on Google Play
            </button>
          </div>
        </div>

        {/* Right: image goes here */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-64 h-96 bg-[var(--color-panel)] rounded-xl flex items-center justify-center">
              <span className="text-sm">[ app preview ]</span>
              {/*
              <Image
                src="/temp.png"
                alt="App Preview"
                fill
                className="object-cover rounded-xl"
              />
              */}
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 bg-white">
        {/* Left: Placeholder image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-96 bg-[var(--color-panel)] rounded-xl flex items-center justify-center">
            <span className="text-sm">[ app preview ]</span>
          </div>
        </div>

        {/* Right: Stacked text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">Why RouteShare?</h3>
          <ul className="space-y-4">
            <li>✔ Feature one</li>
            <li>✔ Feature two</li>
            <li>✔ Feature three</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-bg text-xs text-center py-2">
        <p>© {new Date().getFullYear()} RouteShare. All rights reserved.</p>
      </footer>
    </div>
  );
}
