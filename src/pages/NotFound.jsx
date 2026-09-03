import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">We couldn&apos;t find that page</h1>
      <p className="mt-2 max-w-md text-black/60">
        The page may have moved. Let&apos;s get you back to somewhere familiar.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button to="/" variant="primary">Back to home</Button>
        <Button to="/events" variant="outlineDark">See what&apos;s on</Button>
      </div>
    </section>
  )
}
