import Icon from "@/components/ui/icon";

const ORGANIC_LOGO =
  "https://cdn.poehali.dev/projects/f2be8b48-e6d7-42e1-829c-afac12a15108/files/608e8e17-3c14-4e52-83fe-0c29c836c6f6.jpg";

const DB_PRINT =
  "https://cdn.poehali.dev/projects/f2be8b48-e6d7-42e1-829c-afac12a15108/files/83926cf8-d0e7-447a-9ce7-0bf4b78fdb30.jpg";

const MOTO_REF =
  "https://cdn.poehali.dev/projects/f2be8b48-e6d7-42e1-829c-afac12a15108/bucket/bd92c254-6853-41cd-a2f5-0ac1e0db50fe.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-montserrat text-white overflow-hidden">
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-pink" />
          <span className="font-bold text-sm tracking-[0.3em] uppercase opacity-80">
            Наше Лето
          </span>
        </div>
        <span className="font-caveat text-lg text-sunset-coral opacity-70">
          мерч 2026
        </span>
      </header>

      <section className="relative px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sunset-orange/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-sunset-purple/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="font-caveat text-xl text-sunset-coral/60 mb-3 animate-fade-in-up">
            концепция мерча
          </p>
          <h1 className="font-black text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4 animate-fade-in-up [animation-delay:0.1s] opacity-0">
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B35, #FF5E8A, #E040A0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              НАШЕ ЛЕТО
            </span>
          </h1>
          <p className="text-white/35 font-light text-base md:text-lg max-w-xl leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0">
            Непрямая отсылка к музыке — как «299 km/h» для мотоклуба. 
            Для фестиваля — <span className="text-sunset-coral font-medium">120 dB</span>, уровень звука на живом концерте.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up [animation-delay:0.3s] opacity-0">
            <div className="w-2 h-2 rounded-full bg-sunset-orange" />
            <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Референс → Результат</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up [animation-delay:0.35s] opacity-0">
            <DesignCard
              image={MOTO_REF}
              label="Референс"
              title="Мото клуб — 299 km/h"
              desc="Спидометр на максимуме. Непрямая отсылка к скорости и мотобратству через технический символ."
              accent="border-white/10"
            />
            <DesignCard
              image={DB_PRINT}
              label="Наш принт"
              title="Фестиваль — 120 dB"
              desc="Шкала громкости на пределе. Завуалированная отсылка к музыке и энергии живого звука."
              accent="border-sunset-orange/30"
              featured
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up [animation-delay:0.5s] opacity-0">
            <div className="w-2 h-2 rounded-full bg-sunset-pink" />
            <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Альтернативный вариант</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in-up [animation-delay:0.55s] opacity-0">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl mb-4">
                Органические формы
              </h2>
              <p className="text-white/40 font-light leading-relaxed mb-6">
                Второй вариант — абстрактные биоморфные элементы в закатной палитре.
                Плавные кривые завуалированно передают ритм музыки и тёплую атмосферу летнего вечера.
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag text="Закатная палитра" icon="Palette" />
                <Tag text="Биоморфные формы" icon="Waves" />
                <Tag text="Печать на ткани" icon="Shirt" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/10 to-sunset-purple/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-sunset-pink/20 transition-all duration-500">
                <img
                  src={ORGANIC_LOGO}
                  alt="Органический логотип НАШЕ ЛЕТО"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10 animate-fade-in-up [animation-delay:0.65s] opacity-0">
            <div className="w-2 h-2 rounded-full bg-sunset-magenta" />
            <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Идея принта</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up [animation-delay:0.7s] opacity-0">
            <ConceptCard
              number="299"
              unit="km/h"
              label="Мото"
              desc="Максимум спидометра — скорость, адреналин, братство дороги"
              muted
            />
            <ConceptCard
              number="120"
              unit="dB"
              label="Музыка"
              desc="Уровень звука на концерте — энергия, драйв, единение толпы"
              highlighted
            />
            <ConceptCard
              number="40"
              unit="°C"
              label="Лето"
              desc="Температура на фестивале — жара, свобода, горячая атмосфера"
              muted
            />
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-white/5">
        <p className="text-white/20 text-xs tracking-wider uppercase">
          Наше Лето © 2026
        </p>
      </footer>
    </div>
  );
};

const DesignCard = ({
  image,
  label,
  title,
  desc,
  accent,
  featured,
}: {
  image: string;
  label: string;
  title: string;
  desc: string;
  accent: string;
  featured?: boolean;
}) => (
  <div
    className={`relative bg-white/[0.03] border ${accent} rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 group ${
      featured ? "ring-1 ring-sunset-orange/20" : ""
    }`}
  >
    {featured && (
      <div className="absolute top-4 right-4 z-10 bg-sunset-orange/90 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
        Новый
      </div>
    )}
    <div className="aspect-[4/5] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-5">
      <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">{label}</span>
      <h3 className="font-bold text-lg mt-1 mb-2">{title}</h3>
      <p className="text-white/40 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ConceptCard = ({
  number,
  unit,
  label,
  desc,
  highlighted,
  muted,
}: {
  number: string;
  unit: string;
  label: string;
  desc: string;
  highlighted?: boolean;
  muted?: boolean;
}) => (
  <div
    className={`rounded-2xl p-6 border transition-all duration-300 ${
      highlighted
        ? "bg-gradient-to-br from-sunset-orange/10 to-sunset-pink/5 border-sunset-orange/20"
        : "bg-white/[0.02] border-white/5"
    } ${muted ? "opacity-50 hover:opacity-80" : ""}`}
  >
    <div className="flex items-baseline gap-1 mb-1">
      <span
        className={`font-black text-4xl ${
          highlighted ? "text-sunset-orange" : "text-white/60"
        }`}
        style={{ fontFamily: "'Montserrat', monospace" }}
      >
        {number}
      </span>
      <span className={`text-sm font-light ${highlighted ? "text-sunset-coral" : "text-white/30"}`}>
        {unit}
      </span>
    </div>
    <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">{label}</span>
    <p className="text-white/40 text-xs font-light leading-relaxed mt-3">{desc}</p>
  </div>
);

const Tag = ({ text, icon }: { text: string; icon: string }) => (
  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
    <Icon name={icon} size={14} className="text-sunset-coral" />
    <span className="text-white/60 text-xs">{text}</span>
  </div>
);

export default Index;
