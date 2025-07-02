import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-bold text-primary">NorriCraft</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Форум
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Статистика
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors"
          >
            Правила
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="Sun" size={16} />
            <Switch checked={isDark} onCheckedChange={toggleTheme} />
            <Icon name="Moon" size={16} />
          </div>
          <Button variant="outline" size="sm">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
}
