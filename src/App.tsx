import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, GlassWater, MapPin, Music, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-cream selection:bg-amber selection:text-charcoal bg-texture relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 flex justify-between items-center bg-charcoal/80 backdrop-blur-md border-b border-cream/10">
        <div className="text-2xl font-heading uppercase tracking-wider text-amber">TBL</div>
        <div className="hidden md:flex space-x-8 text-sm font-body tracking-widest uppercase text-cream/70">
          <a href="#about" className="hover:text-amber transition-colors">О нас</a>
          <a href="#experience" className="hover:text-amber transition-colors">Атмосфера</a>
          <a href="#events" className="hover:text-amber transition-colors">События</a>
          <a href="#menu" className="hover:text-amber transition-colors">Меню</a>
        </div>
        <a href="#menu" className="px-5 py-2 border border-amber text-amber font-body text-sm uppercase tracking-widest hover:bg-amber hover:text-charcoal transition-all">
          Смотреть меню
        </a>
      </nav>

      {/* Status Section */}
      <section className="w-full bg-charcoal border-b border-cream/10 mt-20 py-3 flex justify-center items-center relative z-40">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-amber">Мы открыты</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/darkbar/1920/1080?blur=2" 
            alt="Black Lantern Bar" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/80 to-charcoal"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-subheading text-amber uppercase tracking-[0.3em] text-sm md:text-base mb-6"
          >
            Крафтовые напитки • Живая музыка • Ночи на крыше
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-heading uppercase tracking-wider mb-8 text-cream drop-shadow-lg"
          >
            BLACK LANTERN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Скрытый в тихих полях Грейпсид, Black Lantern — это современный крафтовый бар и лаунж на крыше, где музыка, общение и ночная энергия сливаются воедино.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#events" className="px-8 py-4 bg-amber text-charcoal font-subheading uppercase tracking-widest hover:bg-cream transition-colors w-full sm:w-auto text-center">
              События
            </a>
            <a href="#menu" className="px-8 py-4 border border-cream/30 text-cream font-subheading uppercase tracking-widest hover:border-amber hover:text-amber transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
              Смотреть меню <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tagline Divider */}
      <div className="py-20 border-y border-cream/5 bg-wood/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-subheading text-2xl md:text-4xl text-cream/40 uppercase tracking-widest">
            Где свет остается приглушенным, а ночи длятся долго.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading uppercase text-amber mb-6">Место для ночи</h2>
            <div className="space-y-6 font-body text-cream/70 text-lg leading-relaxed">
              <p>
                Black Lantern был создан как место, где люди могут замедлиться, разделить напиток и насладиться хорошей музыкой вдали от городского хаоса.
              </p>
              <p>
                Внутри теплое освещение, текстуры дерева и расслабленная атмосфера лаунжа создают идеальное пространство для общения, живых выступлений и поздних напитков.
              </p>
              <p>
                Над баром наша крыша открывает ночь небу — здесь проходят вечеринки на закате, диджей-сеты и частные встречи с видом на тихую сельскую местность.
              </p>
              <p className="text-cream font-medium pt-4 border-t border-cream/10">
                Будь вы здесь ради напитка, выступления или просто атмосферы, Black Lantern приветствует вас.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            <img 
              src="https://picsum.photos/seed/lounge/800/1200" 
              alt="Lounge Interior" 
              className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber p-6 flex items-center justify-center">
              <p className="font-heading uppercase text-charcoal text-3xl text-center leading-none">
                Открыты допоздна.<br/>Оставайтесь дольше.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Experience */}
      <section id="experience" className="py-32 bg-wood/10 border-y border-cream/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-heading uppercase text-cream mb-4">Атмосфера</h2>
            <div className="w-24 h-1 bg-amber mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Inside */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden"
            >
              <div className="h-[500px] relative">
                <img 
                  src="https://picsum.photos/seed/jazzbar/800/800" 
                  alt="Inside the Lantern" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-4xl font-heading uppercase text-amber mb-4">Внутри фонаря</h3>
                  <p className="font-body text-cream/80 mb-4">
                    Наш главный зал предлагает теплую и интимную обстановку, созданную для общения и живой музыки. Ожидайте инди-выступления, джазовые вечера, акустические сессии и тщательно приготовленные коктейли в расслабленной атмосфере.
                  </p>
                  <p className="font-subheading uppercase text-sm tracking-widest text-cream/50">
                    Создано для ночей, которые начинаются медленно и длятся дольше.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rooftop */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="h-[500px] relative">
                <img 
                  src="https://picsum.photos/seed/rooftop/800/800" 
                  alt="Rooftop Lounge" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-4xl font-heading uppercase text-amber mb-4">Лаунж на крыше</h3>
                  <p className="font-body text-cream/80 mb-4">
                    Когда солнце садится, крыша оживает. С местами на открытом воздухе, музыкой и мягким светом над полями Грейпсид, крыша — идеальное место для напитков на закате, диджей-сетов и поздних встреч.
                  </p>
                  <p className="font-subheading uppercase text-sm tracking-widest text-cream/50">
                    Некоторые ночи спокойны. Некоторые превращаются в незабываемые вечеринки.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music & Events */}
      <section id="events" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <Music className="text-amber mb-6" size={48} strokeWidth={1} />
              <h2 className="text-5xl md:text-7xl font-heading uppercase text-cream mb-6">Звук & События</h2>
              <p className="font-body text-cream/70 text-lg max-w-xl">
                Музыка — это сердце Black Lantern. Наша программа смешивает разные звуки, чтобы соответствовать настроению ночи. Каждая неделя приносит что-то новое.
              </p>
            </div>
            <div className="flex gap-12 lg:justify-end">
              <div>
                <h4 className="font-subheading text-amber uppercase tracking-widest mb-4 border-b border-cream/10 pb-2">Внутри</h4>
                <ul className="space-y-2 font-body text-cream/80 text-sm">
                  <li>Инди & Альтернатива</li>
                  <li>Джаз & Блюз</li>
                  <li>Акустические сессии</li>
                </ul>
              </div>
              <div>
                <h4 className="font-subheading text-amber uppercase tracking-widest mb-4 border-b border-cream/10 pb-2">На крыше</h4>
                <ul className="space-y-2 font-body text-cream/80 text-sm">
                  <li>House & Deep House</li>
                  <li>Nu-Disco & Indie Dance</li>
                  <li>Sunset DJ Sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Event Posters Carousel */}
        <div className="w-full overflow-x-auto pb-12 pt-4 px-6 hide-scrollbar cursor-grab active:cursor-grabbing">
          <div className="flex gap-6 md:gap-8 w-max mx-auto px-4 md:px-12">
            {[
              { day: "Понедельник", event: "Lo-Fi Lounge", desc: "Спокойные биты и расслабленная атмосфера для начала недели.", img: "lofi" },
              { day: "Вторник", event: "Jazz & Whiskey", desc: "Живые джазовые выступления в паре со специальными предложениями на виски.", img: "jazz" },
              { day: "Среда", event: "Indie Acoustic", desc: "Местные артисты с интимными акустическими сетами.", img: "acoustic" },
              { day: "Четверг", event: "Deep House", desc: "Ритмы под звездами в преддверии выходных.", img: "deephouse" },
              { day: "Пятница", event: "Rooftop Party", desc: "Высокая энергия, отличные напитки и полный танцпол.", img: "party" },
              { day: "Суббота", event: "DJ Night", desc: "Приглашенные диджеи играют лучшие треки до поздней ночи.", img: "dj" },
              { day: "Воскресенье", event: "Sunset Lounge", desc: "Завершите выходные с видом на закат и мягкими мелодиями.", img: "sunset" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative w-72 md:w-80 shrink-0 aspect-[3/4] overflow-hidden group border border-cream/10 hover:border-amber/50 transition-colors bg-charcoal"
              >
                <img 
                  src={`https://picsum.photos/seed/${item.img}/600/800`} 
                  alt={item.event}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity group-hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
                <div className="absolute inset-0 bg-texture opacity-50 mix-blend-overlay"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="font-subheading text-xs uppercase tracking-[0.2em] text-amber bg-charcoal/80 px-2 py-1 backdrop-blur-sm border border-amber/20">{item.day}</span>
                    <span className="font-subheading text-[10px] uppercase tracking-widest text-cream/50 border border-cream/20 px-2 py-1 backdrop-blur-sm">TBL</span>
                  </div>
                  
                  <div>
                    <p className="font-subheading text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2">Black Lantern Presents</p>
                    <h3 className="font-heading uppercase text-4xl md:text-5xl text-cream leading-none mb-3 group-hover:text-amber transition-colors">{item.event}</h3>
                    <p className="font-body text-sm text-cream/70 line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="p-8 bg-wood/30 border border-amber/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading uppercase text-3xl text-amber mb-2">Частные мероприятия</h3>
              <p className="font-body text-cream/70 max-w-2xl">
                Black Lantern также доступен для частных встреч. Устройте свою собственную вечеринку на крыше, праздник или специальное мероприятие в одном из самых уникальных мест в Грейпсид.
              </p>
            </div>
            <a href="#contact" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-charcoal border border-amber text-amber font-subheading uppercase tracking-widest text-sm hover:bg-amber hover:text-charcoal transition-colors">
              Связаться <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Drink Menu Intro */}
      <section id="menu" className="py-32 bg-charcoal relative overflow-hidden border-y border-cream/5">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img 
            src="https://picsum.photos/seed/cocktails/1000/1000" 
            alt="Cocktails" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <GlassWater className="text-amber mb-6" size={48} strokeWidth={1} />
            <h2 className="text-5xl md:text-7xl font-heading uppercase text-cream mb-6">Крафтовые напитки &<br/>Классика</h2>
            <p className="font-body text-cream/70 text-lg mb-12 leading-relaxed">
              Наш бар фокусируется на качественных ингредиентах и простых, но хорошо сбалансированных напитках. От классического виски и крафтовых коктейлей до сезонных новинок — каждый напиток готовится с заботой.
            </p>
            
            <h4 className="font-subheading text-amber uppercase tracking-widest mb-6">Популярный выбор</h4>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {[
                "Lantern Old Fashioned",
                "Smoked Whiskey Sour",
                "Midnight Mule",
                "Grapeseed Spritz"
              ].map((drink, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-cream/10 pb-4">
                  <div className="w-2 h-2 bg-amber rounded-full"></div>
                  <span className="font-heading uppercase text-xl tracking-wide">{drink}</span>
                </div>
              ))}
            </div>
            
            <p className="font-subheading text-cream/50 uppercase tracking-widest text-sm italic">
              Спросите наших барменов о рекомендациях.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl font-heading uppercase text-amber mb-4">Моменты из Фонаря</h2>
          <p className="font-body text-cream/60">Живая музыка, закаты на крыше, поздние разговоры и незабываемые вечера.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            "bar1", "rooftop2", "jazz3", "cocktail4", 
            "lounge5", "dj6", "drinks7", "night8"
          ].map((seed, i) => (
            <div key={i} className="aspect-square relative overflow-hidden group">
              <img 
                src={`https://picsum.photos/seed/${seed}/600/600`} 
                alt={`Gallery image ${i+1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="contact" className="py-32 px-6 bg-wood/10 border-t border-cream/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl font-heading uppercase text-cream mb-12">Локация</h2>
          <div className="grid md:grid-cols-3 gap-12 w-full">
            <div className="flex flex-col items-center gap-4">
              <MapPin className="text-amber" size={32} />
              <div>
                <h4 className="font-subheading uppercase tracking-widest text-amber mb-2">Адрес</h4>
                <p className="font-body text-cream/70">Black Lantern<br/>Grapeseed, Blaine County</p>
                <p className="font-body text-cream/50 text-sm mt-2 italic">Скрытое место, которое стоит найти.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Clock className="text-amber" size={32} />
              <div>
                <h4 className="font-subheading uppercase tracking-widest text-amber mb-2">Часы работы</h4>
                <p className="font-body text-cream/70">Пн - Вс: 18:00 - 03:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Phone className="text-amber" size={32} />
              <div>
                <h4 className="font-subheading uppercase tracking-widest text-amber mb-2">Контакты</h4>
                <p className="font-body text-cream/70">Discord: discord.gg/blacklantern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cream/10 bg-charcoal text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-heading uppercase tracking-widest text-amber mb-4">BLACK LANTERN</h2>
          <p className="font-subheading uppercase tracking-[0.2em] text-xs text-cream/50 mb-8">
            Крафтовые напитки • Живая музыка • Ночи на крыше
          </p>
          <div className="flex justify-center gap-8 font-body text-sm text-cream/60 mb-12">
            <a href="#" className="hover:text-amber transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber transition-colors">Discord</a>
            <a href="#contact" className="hover:text-amber transition-colors">Контакты</a>
          </div>
          <p className="font-body text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Black Lantern. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
