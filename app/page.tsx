import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <h2>
        <Link href="/week-2" className="text-red large">
          {" "}
          Goto week-2{" "}
        </Link>
      </h2>
    </main>
  );
}
