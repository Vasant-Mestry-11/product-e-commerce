import HeroBanner from "./_sections/HeroBanner";
import OurKitchen from "./_sections/OurKitchen";
import Trusts from "./_sections/Trusts";
import WhereToBuy from "./_sections/WhereToBuy";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Trusts />
      <WhereToBuy />
      <OurKitchen />
    </main>
  );
}
