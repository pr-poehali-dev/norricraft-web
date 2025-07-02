import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServerStats from "@/components/ServerStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="container px-4">
        <ServerStats />
      </div>
    </div>
  );
};

export default Index;
