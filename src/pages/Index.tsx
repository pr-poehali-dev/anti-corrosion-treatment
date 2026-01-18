import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const materials = [
  {
    id: 1,
    name: 'Битумная мастика',
    price: '2500₽',
    thickness: '2-3 мм',
    durability: '3-5 лет',
    waterResistance: 'Отличная',
    temperature: '-40°C до +80°C',
    application: 'Валик, кисть',
    drying: '24 часа',
    description: 'Экономичное решение для базовой защиты днища автомобиля',
    icon: 'Droplet',
    color: 'bg-orange-500'
  },
  {
    id: 2,
    name: 'Резинобитумная мастика',
    price: '3500₽',
    thickness: '3-4 мм',
    durability: '5-7 лет',
    waterResistance: 'Отличная',
    temperature: '-50°C до +100°C',
    application: 'Распыление',
    drying: '12 часов',
    description: 'Усиленная защита с повышенной эластичностью',
    icon: 'Shield',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    name: 'Полимерная композиция',
    price: '5000₽',
    thickness: '4-5 мм',
    durability: '7-10 лет',
    waterResistance: 'Превосходная',
    temperature: '-60°C до +120°C',
    application: 'Распыление',
    drying: '8 часов',
    description: 'Профессиональная защита премиум-класса',
    icon: 'Star',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'Жидкий пластик',
    price: '6500₽',
    thickness: '5-6 мм',
    durability: '10+ лет',
    waterResistance: 'Максимальная',
    temperature: '-70°C до +150°C',
    application: 'Распыление',
    drying: '6 часов',
    description: 'Максимальная защита для экстремальных условий',
    icon: 'Zap',
    color: 'bg-red-500'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Диагностика и подготовка',
    description: 'Осмотр днища, выявление дефектов, мойка и сушка',
    icon: 'Search',
    duration: '30-60 мин'
  },
  {
    step: 2,
    title: 'Очистка и обезжиривание',
    description: 'Удаление старого покрытия, ржавчины, обработка растворителем',
    icon: 'Sparkles',
    duration: '60-90 мин'
  },
  {
    step: 3,
    title: 'Нанесение состава',
    description: 'Профессиональное нанесение выбранного материала в 2-3 слоя',
    icon: 'Paintbrush',
    duration: '90-120 мин'
  },
  {
    step: 4,
    title: 'Сушка и контроль',
    description: 'Выдержка для полимеризации, проверка качества покрытия',
    icon: 'CheckCircle2',
    duration: '6-24 часа'
  }
];

export default function Index() {
  const [selectedMaterials, setSelectedMaterials] = useState<number[]>([]);

  const toggleMaterial = (id: number) => {
    setSelectedMaterials(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const comparisonMaterials = selectedMaterials.length > 0
    ? materials.filter(m => selectedMaterials.includes(m.id))
    : materials;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-accent">АнтиКор Pro</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#materials" className="text-foreground hover:text-primary transition-colors">Материалы</a>
            <a href="#comparison" className="text-foreground hover:text-primary transition-colors">Сравнение</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg">
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать
          </Button>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 text-lg px-4 py-2">
            <Icon name="Award" size={18} className="mr-2" />
            Гарантия до 10 лет
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-purple-600 bg-clip-text text-transparent">
            Антикоррозийная обработка днища
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Профессиональная защита вашего автомобиля от коррозии с использованием современных материалов
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="materials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог материалов</h2>
          <p className="text-xl text-muted-foreground">Выберите оптимальное решение для вашего автомобиля</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <Card 
              key={material.id} 
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-scale-in border-2 hover:border-primary"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleMaterial(material.id)}
            >
              <CardHeader>
                <div className={`w-16 h-16 ${material.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={material.icon as any} className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">{material.name}</CardTitle>
                <CardDescription className="text-lg">{material.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Цена:</span>
                    <span className="text-2xl font-bold text-primary">{material.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Срок службы:</span>
                    <Badge variant="secondary">{material.durability}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Толщина:</span>
                    <span className="font-semibold">{material.thickness}</span>
                  </div>
                  {selectedMaterials.includes(material.id) && (
                    <Badge className="w-full justify-center">
                      <Icon name="Check" size={16} className="mr-1" />
                      Выбрано для сравнения
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="comparison" className="bg-gradient-to-r from-primary/5 via-secondary/5 to-purple-500/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Таблица сравнения материалов</h2>
            <p className="text-xl text-muted-foreground mb-4">
              {selectedMaterials.length > 0 
                ? `Сравнение выбранных материалов (${selectedMaterials.length})`
                : 'Нажмите на карточки материалов выше для выбора'
              }
            </p>
            {selectedMaterials.length > 0 && (
              <Button variant="outline" onClick={() => setSelectedMaterials([])}>
                <Icon name="X" size={16} className="mr-2" />
                Сбросить выбор
              </Button>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-primary to-secondary text-white">
                    <TableHead className="text-white font-bold text-lg">Характеристика</TableHead>
                    {comparisonMaterials.map(material => (
                      <TableHead key={material.id} className="text-white font-bold text-lg text-center">
                        {material.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-orange-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="DollarSign" size={18} className="inline mr-2 text-primary" />
                      Цена
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center font-bold text-primary text-lg">
                        {material.price}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow className="hover:bg-blue-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="Layers" size={18} className="inline mr-2 text-secondary" />
                      Толщина покрытия
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center">{material.thickness}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow className="hover:bg-orange-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="Clock" size={18} className="inline mr-2 text-primary" />
                      Срок службы
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center font-semibold">{material.durability}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow className="hover:bg-blue-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="Droplets" size={18} className="inline mr-2 text-secondary" />
                      Влагостойкость
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center">{material.waterResistance}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow className="hover:bg-orange-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="Thermometer" size={18} className="inline mr-2 text-primary" />
                      Температурный диапазон
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center">{material.temperature}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow className="hover:bg-blue-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="Paintbrush" size={18} className="inline mr-2 text-secondary" />
                      Способ нанесения
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center">{material.application}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow className="hover:bg-orange-50 transition-colors">
                    <TableCell className="font-semibold">
                      <Icon name="Timer" size={18} className="inline mr-2 text-primary" />
                      Время сушки
                    </TableCell>
                    {comparisonMaterials.map(material => (
                      <TableCell key={material.id} className="text-center">{material.drying}</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
          <p className="text-xl text-muted-foreground">Профессиональный подход на каждом этапе</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card 
              key={step.step}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full" />
              <CardHeader>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} className="text-white" size={28} />
                  </div>
                  <Badge className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                    {step.step}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm font-semibold">{step.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать обработку</h2>
              <p className="text-xl opacity-90">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
            </div>

            <Card className="bg-white/95 backdrop-blur">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Ваше имя</label>
                      <Input placeholder="Иван Иванов" className="text-lg" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" className="text-lg" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Марка и модель автомобиля</label>
                    <Input placeholder="Toyota Camry 2020" className="text-lg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Комментарий</label>
                    <Textarea placeholder="Опишите дополнительные пожелания..." className="min-h-32" />
                  </div>
                  <Button size="lg" className="w-full text-lg bg-accent hover:bg-accent/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <Icon name="Phone" className="mx-auto text-primary" size={32} />
                      <h3 className="font-bold text-foreground">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                    <div className="space-y-2">
                      <Icon name="Mail" className="mx-auto text-primary" size={32} />
                      <h3 className="font-bold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@antikorpro.ru</p>
                    </div>
                    <div className="space-y-2">
                      <Icon name="MapPin" className="mx-auto text-primary" size={32} />
                      <h3 className="font-bold text-foreground">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, 123</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} />
                <span className="text-xl font-bold">АнтиКор Pro</span>
              </div>
              <p className="text-sm opacity-80">Профессиональная защита вашего автомобиля</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Антикор днища</li>
                <li>Защита арок</li>
                <li>Обработка порогов</li>
                <li>Скрытые полости</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Гарантии</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Icon name="MessageCircle" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
                <Icon name="Instagram" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
                <Icon name="Youtube" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 АнтиКор Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
