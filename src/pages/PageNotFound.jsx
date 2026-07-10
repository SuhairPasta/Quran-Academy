import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <div className="pt-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-display text-7xl font-bold text-emerald-900">404</h1>
      <h2 className="mt-4 font-display text-2xl font-semibold text-emerald-950">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button className="rounded-full bg-emerald-800 hover:bg-emerald-900 px-8">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
