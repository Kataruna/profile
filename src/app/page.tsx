"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-light dark:bg-dark">
      <div className="card border-light-content border-2 bg-light-popout text-light-content dark:bg-dark-popout dark:text-dark-content max-w-xl p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg mb-6">
          This is the new home page. Visit the profile page to see the original content.
        </p>
        <Link
          href="/profile"
          className="btn btn-primary"
        >
          Go to Profile
        </Link>
      </div>
    </div>
  );
}
