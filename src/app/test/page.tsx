import React from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export default async function Page() {
  return (
    <main>
      <h1>A: {Date.now()}</h1>
      <Link href="/">Back</Link>
    </main>
  );
}
