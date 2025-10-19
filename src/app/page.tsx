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
        <h1 className="text-[20px] leading-[1.2] font-semibold mb-7">AI agents for small and medium scale businesses.</h1>

        <p className="text-[16px] leading-[1.55] mb-5">
          We build Artificial Intelligence agents that help SMBs grow their business.
        </p>

        <section className="mt-9">
          <h2 className="uppercase tracking-wide font-semibold text-[14px]">Products</h2>
          <div className="mt-4">
            <h3 className="text-[16px] font-semibold mb-2">Sally — AI Conversational Agents for SMBs</h3>
            <p className="text-[16px] leading-[1.55]">
              Sally is an always-on conversational agent that engages prospects 24/7 across chat and voice.
              She captures leads, asks the right qualifying questions, and routes them directly into your CRM or sales workflow — saving your team time and accelerating conversions.
              {" "}
              <a href="https://sally.agentandsons.com" className="underline underline-offset-4">Learn more → /sally</a>
            </p>
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
