export default function Home() {
  return (
    <div className="page-wrap">
      <header className="logo-row">
        {/* Simple square mark approximating the screenshot logo mark */}
        <div className="h-9 w-9 bg-black" />
        <div className="w-[14px]" />
        <div className="brand text-[34px]">
          Agent & Sons
        </div>
      </header>

      <main className="content">
        <h1>AI agents for small and medium scale businesses.</h1>

        <p>
          We build Artificial Intelligence agents that help SMBs grow their business.
        </p>

        <section className="mt-9">
          <h2 className="subhead">Products</h2>
          <div className="mt-4">
            <h3 className="product">Sally — AI Conversational Agents for SMBs</h3>
            <p>
              Always-on voice and chat agents that qualify leads, plug into your sales pipeline.  <a href="https://sally.agentandsons.com" className="underline">Learn more → /sally</a>
            </p>
          </div>
        </section>

        <p className="contact mt-6">
          <a href="mailto:founders@agentandsons.com">Contact Us.</a>
        </p>
      </main>
    </div>
  );
}
