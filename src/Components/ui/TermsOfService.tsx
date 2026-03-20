
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sora">
      <div className="max-w-4xl mx-auto pt-24 pb-32 px-6 lg:px-0">
        <h1 className="text-5xl font-bold mb-16 tracking-tight">Terms of Service</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-5 tracking-tight">Acceptance of Terms</h2>
            <p className="text-gray-400 text-base leading-relaxed">
              By accessing or using SquareDocs, you agree to comply with these Terms of Service. If you disagree, do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5 tracking-tight">User Responsibilities</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <span className="text-[#8cff2e]">•</span>
                <span>Provide accurate information when creating an account.</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <span className="text-[#8cff2e]">•</span>
                <span>Do not misuse the website (e.g., hacking, spamming).</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <span className="text-[#8cff2e]">•</span>
                <span>Comply with all applicable laws.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5 tracking-tight">Intellectual Property</h2>
            <p className="text-gray-400 text-base leading-relaxed">
              All content (text, images, logos) on this site is owned by SquareDocs or licensors. Unauthorized use is prohibited.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;