import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="hero-gradient">
        <div className="container pt-24 pb-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Agent & Sons is building the network for agentic intelligence.
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            We design, validate, and deploy autonomous systems that coordinate across
            modalities—grounded by rigorous evaluation and real-world feedback.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="subtle-border rounded-full px-5 py-2 text-sm hover:bg-white/5">
              Contact Us
            </a>
            <a href="#features" className="rounded-full px-5 py-2 text-sm bg-white text-black hover:opacity-90">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="subtle-border rounded-lg p-6">
            <h3 className="text-lg font-medium">Unified Agent Engine</h3>
            <p className="mt-2 text-white/70">
              A single runtime for planning, tools, memory, and evaluation—built for
              reliability at scale.
            </p>
          </div>
          <div className="subtle-border rounded-lg p-6">
            <h3 className="text-lg font-medium">Parallelized Evaluation</h3>
            <p className="mt-2 text-white/70">
              Close the loop with massively parallel testbeds to resolve the
              asymmetry of verification.
            </p>
          </div>
          <div className="subtle-border rounded-lg p-6">
            <h3 className="text-lg font-medium">Multi-Objective Design</h3>
            <p className="mt-2 text-white/70">
              Optimize across quality, latency, and cost—without compromising safety
              or control.
            </p>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="container py-12">
        <h2 className="text-2xl font-semibold">News</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="subtle-border rounded-lg p-4">
            <p className="text-sm text-white/60">Research Note</p>
            <h3 className="mt-1 font-medium">Introducing our agent evaluation harness.</h3>
            <p className="mt-2 text-white/70">
              A framework for reproducible, multi-task assessment with composable
              metrics. API in early access.
            </p>
          </article>
          <article className="subtle-border rounded-lg p-4">
            <p className="text-sm text-white/60">Update</p>
            <h3 className="mt-1 font-medium">Private beta for select partners.</h3>
            <p className="mt-2 text-white/70">
              We are onboarding teams building mission-critical agentic workflows.
            </p>
          </article>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container py-16">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Founder/CEO", "CTO", "Head of Platform"].map((role) => (
            <div key={role} className="subtle-border rounded-lg p-5">
              <div className="h-10 w-10 rounded-full bg-white/10" />
              <h3 className="mt-3 font-medium">Your Name</h3>
              <p className="text-sm text-white/60">{role}</p>
              <p className="mt-2 text-sm text-white/70">
                Brief background and focus area.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="container py-16">
        <h2 className="text-2xl font-semibold">Investors</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="subtle-border rounded-lg p-6 text-center text-white/70">
              Investor Name
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20">
        <div className="subtle-border rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Work with us</h2>
            <p className="mt-2 text-white/70 max-w-xl">
              We collaborate with partners to deploy safe, reliable agent systems.
              Reach out for early access and research partnerships.
            </p>
          </div>
          <a href="mailto:hello@agentandsons.com" className="rounded-full px-5 py-2 text-sm bg-white text-black hover:opacity-90">
            hello@agentandsons.com
          </a>
        </div>
      </section>
    </div>
  );
}
