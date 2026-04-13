import Link from "next/link";
import variables from "./styles/variables.module.scss";

export default function Home() {
  return (
    <div>
      <h1 className={variables.title}>
        Hello Product 
        <Link href="/contact">Contact</Link>
      </h1>
    </div>
  );
}
