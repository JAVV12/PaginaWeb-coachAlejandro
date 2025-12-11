import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { CTA } from './components/CTA';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Container, Grid, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { IconTarget, IconUsers, IconBriefcase } from '@tabler/icons-react';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Mi Enfoque Section */}
      <Section variant="white">
        <Container size="xl">
          <SectionTitle
            title="Mi Enfoque"
            subtitle="Liderazgo Adaptativo basado en la metodología de Harvard, diseñado para líderes que enfrentan desafíos complejos y buscan transformar sus equipos."
            centered
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                El Liderazgo Adaptativo distingue entre desafíos técnicos y adaptativos. Mientras que
                los problemas técnicos tienen soluciones conocidas, los desafíos adaptativos requieren
                que el sistema se adapte y evolucione.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi trabajo consiste en ayudar a los líderes a:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Regular el estrés del sistema organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Orquestar el progreso como un director de orquesta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Desarrollar la capacidad adaptativa de sus equipos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Mantener el equilibrio entre desafío y apoyo</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-sans font-bold text-[#0d1f2d] mb-4">
                Metodología Harvard
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Basado en el trabajo de Ronald Heifetz y Marty Linsky, el Liderazgo Adaptativo
                proporciona un marco probado para navegar la complejidad organizacional.
              </p>
              <Button href="/methodology" variant="outline">
                Leer más sobre la metodología
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Servicios Destacados */}
      <Section variant="light">
        <Container size="xl">
          <SectionTitle
            title="Servicios"
            subtitle="Programas diseñados para dueños de empresa, líderes de equipo y directores que buscan elevar su liderazgo."
            centered
          />
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <FeatureCard
              title="Coaching Ejecutivo"
              description="Sesiones individuales de coaching personalizado para desarrollar tu capacidad de liderazgo adaptativo y resolver desafíos complejos."
              icon={<IconTarget size={48} stroke={2} />}
            />
            <FeatureCard
              title="Programas de Liderazgo"
              description="Programas estructurados para equipos directivos que buscan transformar su cultura organizacional y desarrollar habilidades adaptativas."
              icon={<IconUsers size={48} stroke={2} />}
            />
            <FeatureCard
              title="Talleres y Workshops"
              description="Sesiones grupales intensivas donde los líderes aprenden y practican técnicas de liderazgo adaptativo aplicadas a casos reales."
              icon={<IconBriefcase size={48} stroke={2} />}
            />
          </SimpleGrid>
          <div className="text-center mt-12">
            <Button href="/services" variant="primary">
              Ver todos los servicios
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonios */}
      <Section variant="white">
        <Container size="xl">
          <SectionTitle
            title="Testimonios"
            subtitle="Líderes que han transformado su capacidad de liderazgo"
            centered
          />
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <TestimonialCard
              quote="El enfoque de Andrés me ayudó a entender cómo regular el estrés de mi equipo durante una transformación organizacional compleja. Sus herramientas son prácticas y transformadoras."
              author="María González"
              role="Directora de Operaciones"
              company="TechCorp"
            />
            <TestimonialCard
              quote="Como CEO, necesitaba desarrollar mi capacidad de liderar en la incertidumbre. El coaching de Andrés me dio un marco claro para navegar desafíos adaptativos."
              author="Carlos Rodríguez"
              role="CEO"
              company="InnovateLab"
            />
            <TestimonialCard
              quote="Los talleres de liderazgo adaptativo cambiaron cómo mi equipo enfrenta los desafíos. Ahora vemos oportunidades donde antes veíamos obstáculos."
              author="Ana Martínez"
              role="Líder de Equipo"
              company="Growth Solutions"
            />
            <TestimonialCard
              quote="La metodología Harvard aplicada de manera práctica. Andrés tiene la capacidad de hacer accesibles conceptos complejos y aplicarlos a situaciones reales."
              author="Roberto Silva"
              role="Director de Desarrollo"
              company="Digital Ventures"
            />
          </SimpleGrid>
        </Container>
      </Section>

      {/* CTA Final */}
      <CTA />
    </>
  );
}
