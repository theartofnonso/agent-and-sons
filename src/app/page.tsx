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
            <h3 className="text-md font-semibold mb-2">FrontDesk — Conversational AI Agent for SMEs</h3>
            <p className="text-sm leading-[1.55]">
              An always-on conversational agent that captures and qualifies leads, then routes them directly into your CRM or sales workflow. Saving your business time and accelerating conversions.
            </p>
            <div className="mt-2">
              <a href="/frontdesk" target="_blank" className="text-sm underline underline-offset-4">Learn more →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10">
        <div className="flex flex-col gap-2">
          <nav aria-label="Social links" className="text-sm">
            <ul className="flex items-center gap-4">
              <li>
                <a href="mailto:founders@agentandsons.com" className="underline underline-offset-4">Email</a>
              </li>
              <li>
                <a href="https://x.com/agentandsons" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">X</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/agent-and-sons" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
