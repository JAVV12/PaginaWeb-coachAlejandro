import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@mantine/core';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          className="object-cover scale-110"
          style={{ filter: 'blur(40px) brightness(0.4)' }}
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d]/80 to-[#0f2330]/80" />
      </div>
      
      <Container size="xl" className="py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight text-white drop-shadow-lg">
              Liderazgo Adaptativo para Líderes que Transforman Equipos
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed drop-shadow-md">
              Metodología Harvard aplicada al coaching ejecutivo. Desarrolla tu capacidad de liderar
              en tiempos de cambio, regulando el estrés del sistema y orquestando el progreso de tu organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="text-lg px-8 py-4">
                Agendar Sesión
              </Button>
              <Button href="/methodology" variant="outline" className="text-lg px-8 py-4">
                Conoce mi Metodología
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.jpeg"
              alt="Alejandro Valencia - Coaching Ejecutivo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
