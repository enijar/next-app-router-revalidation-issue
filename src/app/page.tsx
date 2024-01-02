"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <section>
        <h1>This is not working as expected</h1>
        <Link href="/test">Test</Link>
      </section>
      <section>
        <h1>This works, but is a hack</h1>
        <button
          type="button"
          onClick={() => {
            router.push("/test");
            router.refresh();
          }}
        >
          Test
        </button>
      </section>
    </main>
  );
}
