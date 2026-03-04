import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Page not found</h1>
      <p className="text-slate-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-slate-900 text-white px-5 py-2 rounded font-medium hover:bg-slate-800"
      >
        Back to home
      </Link>
    </div>
  );
}
