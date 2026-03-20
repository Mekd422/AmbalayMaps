
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sora">
      <div className="max-w-4xl mx-auto pt-24 pb-32 px-6 lg:px-0">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-16 font-medium">Last Updated: 28 Jan 2025</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-5 tracking-tight">Introduction</h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Welcome to AmbaLay Maps. We respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5 tracking-tight">Data We Collect</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <span className="text-[#8cff2e]">•</span>
                <span><strong>Personal Information:</strong> Name, email address, phone number, payment details (if applicable), and other identifiers you voluntarily provide.</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <span className="text-[#8cff2e]">•</span>
                <span><strong>Non-Personal Information:</strong> Browser type, IP address, device information, cookies, and usage data (e.g., pages visited).</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;