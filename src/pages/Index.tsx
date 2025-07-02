import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServerStats from "@/components/ServerStats";
import Forum from "@/components/Forum";
import DonateShop from "@/components/DonateShop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="container px-4">
        <ServerStats />
      </div>
      <Forum />
      <DonateShop />
    </div>
  );
};

export default Index;
