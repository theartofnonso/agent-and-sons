export default function Home() {
  return (
    <div className="px-16 py-12 min-h-screen flex flex-col">
      <header className="flex items-center">
        {/* Simple square mark approximating the screenshot logo mark */}
        <div className="h-4 w-4 bg-black" />
        <div className="w-3.5" />
        <div className="font-bold tracking-tight text-[20px]">Agent & Sons</div>
      </header>

      <main className="mt-10 max-w-[760px] flex-1">
        <h1 className="text-md leading-[1.2] font-semibold mb-2">AI agents for small and medium scale enterprises.</h1>

        <p className="text-sm leading-[1.55] mb-5">
          We build Artificial Intelligence agents that help SMEs grow their business.
        </p>

        <section className="mt-8">
          <h2 className="uppercase tracking-wide font-semibold text-[14px]">Products</h2>
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-2">Sally — Conversational AI Agents for SMEs</h3>
            <p className="text-sm leading-[1.55]">
              An always-on conversational agent that captures and qualifies leads, then routes them directly into your CRM or sales workflow. Saving your business time and accelerating conversions.
            </p>
            <div className="mt-2">
              <a href="/sally" target="_blank" className="text-sm underline underline-offset-4">Learn more →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10">
        <p>
          <a href="mailto:founders@agentandsons.com" className="underline underline-offset-4">Contact Us.</a>
        </p>
      </footer>
    </div>
  );
}
