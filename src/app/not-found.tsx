import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grain flex min-h-[70vh] items-center bg-espresso py-32">
      <div className="container-brand text-center">
        <p className="font-display text-6xl text-gold">404</p>
        <h1 className="mt-5 text-3xl text-cream md:text-4xl">
          That page has gone out with the morning run.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[1rem] leading-relaxed text-cream/70">
          The page you were after does not exist. Try our product catalogue, or get
          in touch and we will point you in the right direction.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn btn-primary btn-lg">
            Browse products
          </Link>
          <Link href="/" className="btn btn-outline-light btn-lg">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
