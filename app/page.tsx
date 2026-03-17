export default function Home() {
  return (
    <>
      <header>
        <h1>Our Pricing</h1>

        <section>Annually Monthly</section>
      </header>

      <main>
        <section>
          <h3>Basic</h3>

          <h4>&dollar;19.99</h4>
          <h4>&dollar;199.99</h4>

          <span>500 GB Storage</span>
          <span>2 Users Allowed</span>
          <span>Send up to 3 GB</span>

          <button>Learn More</button>
        </section>

        <section>
          Professional &dollar;24.99 &dollar;249.99 1 TB Storage 5 Users Allowed
          Send up to 10 GB Learn More
        </section>

        <section>
          Master &dollar;39.99 &dollar;399.99 2 TB Storage 10 Users Allowed Send
          up to 20 GB Learn More
        </section>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}
