import Icon from "@/components/ui/icon";

const LOGO_URL =
  "https://cdn.poehali.dev/projects/f2be8b48-e6d7-42e1-829c-afac12a15108/files/608e8e17-3c14-4e52-83fe-0c29c836c6f6.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sunset-deep via-sunset-purple to-[#1a0a2e] font-montserrat text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-sunset-orange/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-sunset-pink/10 blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-sunset-magenta/8 blur-[80px] animate-pulse-glow [animation-delay:0.8s]" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-pink" />
          <span className="font-montserrat font-bold text-sm tracking-[0.3em] uppercase opacity-80">
            Наше Лето
          </span>
        </div>
        <span className="font-caveat text-lg text-sunset-coral opacity-70">
          2026
        </span>
      </header>

      <main className="relative z-10 flex flex-col items-center px-6 pt-8 md:pt-16 pb-20">
        <div className="animate-fade-in-up">
          <p className="text-center font-caveat text-xl md:text-2xl text-sunset-coral/80 mb-4">
            музыкальный фестиваль
          </p>
        </div>

        <h1
          className="text-center font-montserrat font-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-2 animate-fade-in-up [animation-delay:0.15s] opacity-0"
          style={{
            background: "linear-gradient(135deg, #FF6B35, #FF5E8A, #E040A0, #7B2D8E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          НАШЕ ЛЕТО
        </h1>

        <p className="text-center text-white/40 font-light text-sm tracking-[0.2em] uppercase mb-12 animate-fade-in-up [animation-delay:0.3s] opacity-0">
          Когда звук становится формой
        </p>

        <div className="relative animate-fade-in-up [animation-delay:0.45s] opacity-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-orange/20 via-sunset-pink/10 to-sunset-purple/20 rounded-3xl blur-2xl scale-110 animate-pulse-glow" />

          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 md:p-8 max-w-lg">
            <img
              src={LOGO_URL}
              alt="НАШЕ ЛЕТО — логотип фестиваля"
              className="w-full rounded-2xl animate-float"
            />
          </div>
        </div>

        <div className="mt-16 max-w-2xl text-center animate-fade-in-up [animation-delay:0.6s] opacity-0">
          <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
            Абстрактные органические формы в закатной палитре — 
            плавные кривые, которые завуалированно передают ритм музыки 
            и тёплую атмосферу летнего вечера
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full animate-fade-in-up [animation-delay:0.75s] opacity-0">
          <InfoCard
            icon="Palette"
            title="Закатная палитра"
            desc="Оранжевый, розовый, фиолетовый — цвета летнего неба"
          />
          <InfoCard
            icon="Waves"
            title="Биоморфные формы"
            desc="Органические кривые, намекающие на звуковые волны"
          />
          <InfoCard
            icon="Shirt"
            title="Готов к печати"
            desc="Яркий контраст для нанесения на ткань любого цвета"
          />
        </div>
      </main>

      <footer className="relative z-10 text-center py-8 border-t border-white/5">
        <p className="text-white/30 text-xs tracking-wider uppercase">
          Наше Лето © 2026 — Все права защищены
        </p>
      </footer>
    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-sunset-orange/30 to-sunset-pink/30 flex items-center justify-center">
      <Icon name={icon} size={20} className="text-sunset-coral" />
    </div>
    <h3 className="font-montserrat font-semibold text-sm mb-1 text-white/90">
      {title}
    </h3>
    <p className="text-white/40 text-xs leading-relaxed font-light">{desc}</p>
  </div>
);

export default Index;
