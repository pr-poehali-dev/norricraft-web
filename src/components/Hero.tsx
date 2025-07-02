import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            Лучший Minecraft сервер в СНГ
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            NorriCraft
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйся к самому дружелюбному сообществу! Выживание,
            мини-игры, экономика и множество развлечений ждут тебя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать лаунчер
            </Button>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4 text-2xl font-mono font-bold">
                <span className="text-muted-foreground">IP:</span>
                <span className="text-primary bg-primary/10 px-4 py-2 rounded-lg">
                  play.norricraft.net
                </span>
                <Button variant="ghost" size="sm">
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
