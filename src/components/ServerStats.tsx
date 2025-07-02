import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function ServerStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Users" className="text-primary" />
            Онлайн игроков
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold text-primary mb-2">127 / 500</div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Активен
          </Badge>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Zap" className="text-accent" />
            Версия сервера
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-2xl font-bold mb-2">1.20.4</div>
          <div className="text-sm text-muted-foreground">
            Fabric + Оптимизация
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Activity" className="text-emerald-500" />
            Время работы
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-2xl font-bold mb-2">99.8%</div>
          <div className="text-sm text-muted-foreground">Стабильность</div>
        </CardContent>
      </Card>
    </div>
  );
}
