export default function PrivacyPolicyPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-light dark:bg-dark">
      <div className="card border-light-content border-2 bg-light-popout text-light-content dark:bg-dark-popout dark:text-dark-content max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="card-body p-8">
          <a
            href="/"
            className="text-sm mb-4 inline-block opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Back
          </a>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-base opacity-70">
            Privacy policy content will be added here.
          </p>
        </div>
      </div>
    </div>
  );
}
