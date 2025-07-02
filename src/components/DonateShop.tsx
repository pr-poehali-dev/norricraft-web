import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const donatePackages = [
  {
    name: "VIP",
    price: 290,
    originalPrice: null,
    popular: false,
    features: [
      "Приватный чат VIP игроков",
      "Цветной ник в игре",
      "5 дополнительных домов",
      "Приоритет входа на сервер",
      "Доступ к VIP зонам",
      "Специальные эмоции",
    ],
    color: "from-blue-500 to-blue-600",
    icon: "Crown",
  },
  {
    name: "Premium",
    price: 590,
    originalPrice: 690,
    popular: true,
    features: [
      "Все привилегии VIP",
      "Персональный кит каждые 6 часов",
      "10 дополнительных домов",
      "Возможность летать в лобби",
      "Доступ к Premium играм",
      "Скидка 15% в магазине",
      "Премиум поддержка",
    ],
    color: "from-purple-500 to-purple-600",
    icon: "Star",
  },
  {
    name: "Ultimate",
    price: 990,
    originalPrice: 1290,
    popular: false,
    features: [
      "Все привилегии Premium",
      "Персональный кит каждые 3 часа",
      "Безлимитные дома",
      "Креативный режим в личном мире",
      "Администрирование гильдии",
      "Скидка 25% в магазине",
      "Личный менеджер",
      "Эксклюзивные ивенты",
    ],
    color: "from-amber-500 to-amber-600",
    icon: "Gem",
  },
];

const additionalItems = [
  {
    name: "Игровые монеты",
    description: "1000 внутриигровых монет",
    price: 99,
    icon: "Coins",
  },
  {
    name: "Смена ника",
    description: "Изменить никнейм в игре",
    price: 149,
    icon: "Edit",
  },
  {
    name: "Дополнительный дом",
    description: "1 слот под дом навсегда",
    price: 49,
    icon: "Home",
  },
  {
    name: "Кастомный кит",
    description: "Персональный набор предметов",
    price: 199,
    icon: "Package",
  },
];

export default function DonateShop() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Поддержи сервер</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Получи уникальные привилегии и помоги развитию NorriCraft! Все
            средства идут на улучшение сервера.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donatePackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${pkg.popular ? "ring-2 ring-primary scale-105" : ""} hover:shadow-xl transition-all`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-b-lg">
                  Популярный выбор
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />

              <CardHeader className="text-center pt-8">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={pkg.icon as any}
                    className="text-white"
                    size={32}
                  />
                </div>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <div className="flex items-center justify-center gap-2">
                  {pkg.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {pkg.originalPrice}₽
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price}₽
                  </span>
                </div>
                {pkg.originalPrice && (
                  <Badge variant="destructive" className="mx-auto">
                    Скидка{" "}
                    {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Icon
                        name="Check"
                        className="text-green-500 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white border-0`}
                  size="lg"
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Дополнительные услуги</h3>
          <p className="text-muted-foreground">
            Небольшие улучшения для твоего игрового опыта
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalItems.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={item.icon as any}
                    className="text-primary"
                    size={24}
                  />
                </div>
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="text-xl font-bold text-primary mb-4">
                  {item.price}₽
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="Shield" className="text-primary" size={24} />
                <h3 className="text-lg font-semibold">Безопасные платежи</h3>
              </div>
              <p className="text-muted-foreground">
                Мы принимаем все популярные способы оплаты: карты, электронные
                кошельки, криптовалюты. Все транзакции защищены SSL-шифрованием.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
