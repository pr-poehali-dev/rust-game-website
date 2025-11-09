import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const servers = [
    { name: 'RustPRO #1 x2 Solo', online: 142, max: 200, wipe: '10.11.2025', map: '3500' },
    { name: 'RustPRO #2 x3 Duo/Trio', online: 187, max: 200, wipe: '10.11.2025', map: '4000' },
    { name: 'RustPRO #3 x5 No Limit', online: 165, max: 250, wipe: '13.11.2025', map: '4500' },
  ];

  const topPlayers = [
    { name: 'DeadShot', kills: 1248, deaths: 342, kd: 3.65, hours: 428, trend: 'up' },
    { name: 'RustKing', kills: 1156, deaths: 398, kd: 2.90, hours: 502, trend: 'up' },
    { name: 'ShadowHunter', kills: 1089, deaths: 421, kd: 2.59, hours: 445, trend: 'down' },
    { name: 'IronFist', kills: 987, deaths: 389, kd: 2.54, hours: 391, trend: 'up' },
    { name: 'NightRider', kills: 945, deaths: 412, kd: 2.29, hours: 467, trend: 'same' },
  ];

  const topClans = [
    { name: 'LEGENDS', members: 8, kills: 4521, raids: 156, points: 8942 },
    { name: 'WARRIORS', members: 7, kills: 4123, raids: 142, points: 8234 },
    { name: 'TITANS', members: 6, kills: 3845, raids: 134, points: 7654 },
    { name: 'PHOENIX', members: 8, kills: 3698, raids: 128, points: 7321 },
    { name: 'RAIDERS', members: 5, kills: 3421, raids: 119, points: 6987 },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">RUSTPRO</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'servers', 'rules', 'donate', 'rating', 'wipes', 'help', 'contacts'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
                >
                  {item === 'home' ? 'Главная' : 
                   item === 'servers' ? 'Серверы' :
                   item === 'rules' ? 'Правила' :
                   item === 'donate' ? 'Донат' :
                   item === 'rating' ? 'Рейтинг' :
                   item === 'wipes' ? 'Вайпы' :
                   item === 'help' ? 'Помощь' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.85)), url('https://cdn.poehali.dev/projects/6ab4b85c-25b5-4567-84c7-9b7dacf2c657/files/24a2ef32-3645-4194-b6e3-c4c53d4695e0.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              ДОБРО ПОЖАЛОВАТЬ В <span className="text-primary">RUST</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Лучшие русскоязычные серверы с честной администрацией и активным комьюнити
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Gamepad2" className="mr-2" size={20} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Discord
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  Онлайн сейчас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">494</p>
                <p className="text-sm text-muted-foreground">из 650 игроков</p>
                <Progress value={76} className="mt-4" />
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-secondary" size={24} />
                  Следующий вайп
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-secondary">3 дня</p>
                <p className="text-sm text-muted-foreground">13 ноября 2025</p>
                <div className="mt-4 flex items-center gap-2">
                  <Icon name="Calendar" className="text-secondary" size={16} />
                  <span className="text-sm">18:00 МСК</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" className="text-accent" size={24} />
                  Активных кланов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent">127</p>
                <p className="text-sm text-muted-foreground">За последнюю неделю</p>
                <div className="mt-4 flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-accent" size={16} />
                  <span className="text-sm">+15% к прошлой неделе</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="servers" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Server" className="inline mr-3 text-primary" size={36} />
            Наши серверы
          </h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {servers.map((server, idx) => (
              <Card key={idx} className="hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{server.name}</CardTitle>
                      <CardDescription>Карта: {server.map}m² • Вайп: {server.wipe}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                      {server.online}/{server.max}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={(server.online / server.max) * 100} className="h-2" />
                    <div className="flex gap-4">
                      <Button className="flex-1">
                        <Icon name="Play" className="mr-2" size={18} />
                        Подключиться
                      </Button>
                      <Button variant="outline">
                        <Icon name="Info" className="mr-2" size={18} />
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="BookOpen" className="inline mr-3 text-secondary" size={36} />
            Правила сервера
          </h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {[
                  { icon: 'ShieldAlert', title: 'Запрещены читы и баги', desc: 'Использование программ для получения преимущества приведет к бану' },
                  { icon: 'MessageSquareOff', title: 'Уважение к игрокам', desc: 'Оскорбления, расизм и токсичное поведение караются мутом или баном' },
                  { icon: 'Users', title: 'Соблюдайте лимиты', desc: 'На каждом сервере установлен лимит игроков в клане' },
                  { icon: 'Home', title: 'Правила строительства', desc: 'Запрещено блокировать памятники и спавны игроков' },
                ].map((rule, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Icon name={rule.icon as any} className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{rule.title}</h3>
                      <p className="text-sm text-muted-foreground">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="donate" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Gift" className="inline mr-3 text-primary" size={36} />
            Поддержать проект
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Starter', price: 299, features: ['500 монет', 'VIP чат', 'Цветной ник'] },
              { name: 'Premium', price: 599, features: ['1200 монет', 'VIP чат', 'Цветной ник', 'Приоритет в очереди', 'Кит раз в день'] },
              { name: 'Ultimate', price: 999, features: ['2500 монет', 'VIP чат', 'Цветной ник', 'Приоритет в очереди', 'Кит 2 раза в день', 'Уникальный значок'] },
            ].map((pack, idx) => (
              <Card key={idx} className={idx === 1 ? 'border-primary shadow-lg shadow-primary/20' : ''}>
                <CardHeader>
                  <CardTitle className="text-2xl">{pack.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-primary">{pack.price}₽</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={idx === 1 ? 'default' : 'outline'}>
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rating" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Award" className="inline mr-3 text-secondary" size={36} />
            Рейтинг игроков и кланов
          </h2>
          
          <Tabs defaultValue="players" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="players" className="text-lg">
                <Icon name="User" className="mr-2" size={20} />
                Игроки
              </TabsTrigger>
              <TabsTrigger value="clans" className="text-lg">
                <Icon name="Users" className="mr-2" size={20} />
                Кланы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="players">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {topPlayers.map((player, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                            idx === 0 ? 'bg-yellow-500/20 text-yellow-500' :
                            idx === 1 ? 'bg-gray-400/20 text-gray-400' :
                            idx === 2 ? 'bg-orange-500/20 text-orange-500' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {idx + 1}
                          </div>
                          <Avatar className="w-12 h-12 border-2 border-primary">
                            <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-bold text-lg">{player.name}</p>
                              {player.trend === 'up' && <Icon name="TrendingUp" className="text-green-500" size={18} />}
                              {player.trend === 'down' && <Icon name="TrendingDown" className="text-red-500" size={18} />}
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>K/D: <span className="text-primary font-semibold">{player.kd}</span></span>
                              <span>Убийств: {player.kills}</span>
                              <span>Смертей: {player.deaths}</span>
                              <span>Часов: {player.hours}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-32">
                            <div className="text-xs text-muted-foreground mb-1">Прогресс</div>
                            <Progress value={65 + idx * 3} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clans">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {topClans.map((clan, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                          idx === 0 ? 'bg-yellow-500/20 text-yellow-500' :
                          idx === 1 ? 'bg-gray-400/20 text-gray-400' :
                          idx === 2 ? 'bg-orange-500/20 text-orange-500' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <p className="font-bold text-xl">{clan.name}</p>
                            <Badge variant="outline">{clan.members} игроков</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Убийств</p>
                              <p className="font-semibold text-lg">{clan.kills}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Рейдов</p>
                              <p className="font-semibold text-lg">{clan.raids}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Очков</p>
                              <p className="font-semibold text-lg text-primary">{clan.points}</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-32">
                          <div className="text-xs text-muted-foreground mb-1">Рейтинг</div>
                          <Progress value={100 - idx * 10} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="wipes" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="CalendarDays" className="inline mr-3 text-primary" size={36} />
            Расписание вайпов
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { server: 'RustPRO #1 x2 Solo', date: '10.11.2025', time: '18:00', status: 'today' },
                  { server: 'RustPRO #2 x3 Duo/Trio', date: '10.11.2025', time: '18:00', status: 'today' },
                  { server: 'RustPRO #3 x5 No Limit', date: '13.11.2025', time: '18:00', status: 'upcoming' },
                ].map((wipe, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all">
                    <div>
                      <p className="font-bold text-lg mb-1">{wipe.server}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          {wipe.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {wipe.time} МСК
                        </span>
                      </div>
                    </div>
                    <Badge variant={wipe.status === 'today' ? 'default' : 'outline'} className="text-sm px-4 py-2">
                      {wipe.status === 'today' ? 'Сегодня' : 'Скоро'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="help" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Lightbulb" className="inline mr-3 text-secondary" size={36} />
            Помощь новичкам
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Map', title: 'Как начать играть?', desc: 'Подключитесь к серверу, соберите ресурсы и постройте первую базу' },
              { icon: 'Hammer', title: 'Крафт предметов', desc: 'Изучайте чертежи на верстаке и создавайте улучшенное оружие' },
              { icon: 'Shield', title: 'Защита базы', desc: 'Используйте металлические двери, кодовые замки и ловушки' },
              { icon: 'Zap', title: 'Электричество', desc: 'Подключите солнечные панели и ветряки для автоматизации' },
            ].map((tip, idx) => (
              <Card key={idx} className="hover:border-secondary/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon name={tip.icon as any} className="text-secondary" size={28} />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <Icon name="MessageSquare" className="inline mr-3 text-primary" size={36} />
            Контакты
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  Discord сервер
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Send" className="mr-2" size={24} />
                  Telegram канал
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="AtSign" className="mr-2" size={24} />
                  support@rustpro.ru
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 RUSTPRO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
