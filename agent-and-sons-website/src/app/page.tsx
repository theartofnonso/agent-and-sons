export default function Home() {
  return (
    <div className="page-wrap">
      <header className="logo-row">
        {/* Simple square mark approximating the screenshot's logo mark */}
        <div style={{ width: 44, height: 44, background: "#0a0a0a" }} />
        <div style={{ width: 16 }} />
        <div className="brand" style={{ fontSize: 44 }}>
          agentandsons
        </div>
      </header>

      <main className="content">
        <h1>Agent & Sons is building the network behind agentic intelligence.</h1>

        <p>
          We are an AI-research lab building a complete network
          <br />
          for agentic systems discovery and development. So far, we've built a
          unified agent engine which can reason across modalities.
        </p>

        <p>
          We ground this in massively parallelized evaluation to solve the
          <br />
          <em>asymmetry of verification</em> issue in deployment.
        </p>

        <p>
          In short, we're a group of scientists engineering and validating
          autonomous systems for human and planetary benefit. At operational
          scale. With unprecedented control.
        </p>

        <p className="contact" style={{ marginTop: 28 }}>
          <a href="mailto:hello@agentandsons.com">Contact Us.</a>
        </p>
      </main>
    </div>
  );
}
