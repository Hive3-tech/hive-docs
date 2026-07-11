import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
  <main className="min-h-screen bg-background text-foreground flex items-center">
      <div className="w-full px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm text-primary font-semibold mb-3">404</p>
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t find that page. It might have moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-95 transition-opacity"
            >
              <Home className="w-4 h-4" />
              Back to docs home
            </Link>
            <Link
              to="/membership-plans"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              Membership plans
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
