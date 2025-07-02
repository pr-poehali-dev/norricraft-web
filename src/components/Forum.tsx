import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const forumCategories = [
  {
    title: "Общие обсуждения",
    description: "General чат и обсуждение игрового процесса",
    topics: 245,
    posts: 1847,
    lastPost: {
      author: "Steve_Craft",
      time: "2 часа назад",
    },
    color: "bg-blue-500",
  },
  {
    title: "Помощь новичкам",
    description: "Вопросы и ответы для начинающих игроков",
    topics: 89,
    posts: 623,
    lastPost: {
      author: "AdminNorri",
      time: "30 минут назад",
    },
    color: "bg-green-500",
  },
  {
    title: "Предложения",
    description: "Идеи по улучшению сервера",
    topics: 67,
    posts: 432,
    lastPost: {
      author: "CrafterPro",
      time: "1 час назад",
    },
    color: "bg-purple-500",
  },
  {
    title: "Жалобы и репорты",
    description: "Сообщения о нарушениях и багах",
    topics: 34,
    posts: 187,
    lastPost: {
      author: "ModerNorri",
      time: "4 часа назад",
    },
    color: "bg-red-500",
  },
];

const recentTopics = [
  {
    title: "Обновление сервера до версии 1.20.4",
    author: "AdminNorri",
    replies: 23,
    views: 456,
    time: "1 час назад",
    pinned: true,
  },
  {
    title: "Конкурс на лучшую постройку - призы 10000 монет!",
    author: "EventManager",
    replies: 45,
    views: 789,
    time: "2 часа назад",
    hot: true,
  },
  {
    title: "Помогите с настройкой фермы в новом чанке",
    author: "NewPlayer123",
    replies: 8,
    views: 124,
    time: "3 часа назад",
  },
  {
    title: "Предложение: добавить новые мини-игры",
    author: "GameMaster",
    replies: 15,
    views: 267,
    time: "5 часов назад",
  },
];

export default function Forum() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Форум сообщества</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Общайся с другими игроками, делись опытом и получай помощь от
            сообщества
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Категории форума</h3>
            <div className="space-y-4">
              {forumCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}
                      >
                        <Icon
                          name="MessageSquare"
                          className="text-white"
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">
                          {category.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span>{category.topics} тем</span>
                          <span>{category.posts} сообщений</span>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-medium">
                          {category.lastPost.author}
                        </div>
                        <div className="text-muted-foreground">
                          {category.lastPost.time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Последние темы</h3>
            <div className="space-y-4">
              {recentTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {topic.author.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {topic.pinned && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="Pin" size={12} className="mr-1" />
                              Закреплено
                            </Badge>
                          )}
                          {topic.hot && (
                            <Badge variant="destructive" className="text-xs">
                              <Icon name="Flame" size={12} className="mr-1" />
                              Горячее
                            </Badge>
                          )}
                        </div>
                        <h4 className="font-medium text-sm leading-tight mb-2 line-clamp-2">
                          {topic.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>от {topic.author}</span>
                          <span>{topic.time}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={12} />
                            {topic.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={12} />
                            {topic.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full mt-6">
              <Icon name="Plus" size={16} className="mr-2" />
              Создать новую тему
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
