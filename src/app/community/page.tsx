import { Suspense } from "react";
import { Sketches } from "./components";
import Link from "next/link";
import { Button } from "@/ui";

export default function Community() {
  return (
    <div className="app-container pb-16 pt-36">
      <h3 className="mb-14 text-center">
        Explore images generated by other users
      </h3>
      <div className="mb-24">
        <Suspense fallback="loading">
          <Sketches />
        </Suspense>
      </div>
      <p className="text-center">
        <Link href="/generate">
          <Button variant="link" className="text-base">
            generate your own images
          </Button>
        </Link>
      </p>
    </div>
  );
}
