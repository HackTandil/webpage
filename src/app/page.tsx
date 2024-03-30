import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            HackTandil
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            A community event for programmers in Tandil. Join us for a day of
            learning and collaboration.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Register
          </Link>
          <Link
            className="inline-flex h-11 items-center justify-center rounded-md border-gray-200 bg-white ml-4 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
            href="#"
          >
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
}
