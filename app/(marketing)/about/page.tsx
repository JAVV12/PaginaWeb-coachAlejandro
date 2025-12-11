import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import Image from 'next/image';
import { Container, Text, Title } from '@mantine/core';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Sobre Mí"
        subtitle="Mi historia personal, experiencia con líderes, y el enfoque humano que guía mi trabajo"
      />

      <Section variant="white">
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about_me.jpeg"
                alt="Alejandro Valencia"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-6">
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d]">
                Mi Historia
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Mi nombre es Alejandro Valencia y he dedicado mi carrera a ayudar a líderes
                a navegar la complejidad organizacional mediante el Liderazgo Adaptativo.
                Con años de experiencia trabajando con ejecutivos, dueños de empresa y
                directores, he desarrollado un enfoque único que combina la rigurosidad
                académica con la aplicación práctica.
              </Text>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Mi formación en metodologías de Harvard, específicamente en el marco del
                Liderazgo Adaptativo desarrollado por Ronald Heifetz y Marty Linsky, me
                ha permitido entender en profundidad cómo los líderes pueden regular el
                estrés del sistema y orquestar el progreso organizacional.
              </Text>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Mi Experiencia con Líderes
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                A lo largo de mi carrera, he trabajado con líderes de diversas industrias
                y tamaños de organización. He acompañado a:
              </Text>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>CEO y fundadores enfrentando transformaciones organizacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Directores de equipo navegando cambios estratégicos complejos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Líderes de organizaciones en crecimiento acelerado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Ejecutivos manejando crisis y momentos de alta incertidumbre</span>
                </li>
              </ul>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Cada experiencia ha reforzado mi convicción de que el liderazgo adaptativo
                no es solo una técnica, sino una capacidad fundamental para liderar en
                tiempos modernos.
              </Text>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Metodología Harvard
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                Mi enfoque está fundamentado en la metodología desarrollada en la Escuela
                de Gobierno de Harvard, específicamente el trabajo de Heifetz y Linsky sobre
                Liderazgo Adaptativo. Esta metodología distingue entre:
              </Text>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0d1f2d] mb-2">Desafíos Técnicos</h4>
                  <Text className="text-gray-700">
                    Problemas con soluciones conocidas que pueden resolverse aplicando
                    expertise y mejores prácticas existentes.
                  </Text>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0d1f2d] mb-2">Desafíos Adaptativos</h4>
                  <Text className="text-gray-700">
                    Problemas complejos que requieren que el sistema aprenda, se adapte
                    y evolucione para encontrar soluciones nuevas.
                  </Text>
                </div>
              </div>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Mi trabajo consiste en ayudar a los líderes a identificar qué tipo de
                desafío enfrentan y aplicar el enfoque adecuado, regulando el estrés
                del sistema mientras orquestan el progreso.
              </Text>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Un Enfoque Humano
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                Más allá de las técnicas y marcos teóricos, creo firmemente que el liderazgo
                efectivo surge de la conexión humana. Mi enfoque se caracteriza por:
              </Text>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>
                    <strong>Empatía:</strong> Entender las emociones y dinámicas que surgen
                    en momentos de cambio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>
                    <strong>Autenticidad:</strong> Crear espacios seguros donde los líderes
                    pueden ser vulnerables y reflexionar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>
                    <strong>Pragmatismo:</strong> Aplicar conceptos teóricos a situaciones
                    reales y medibles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>
                    <strong>Transformación sostenible:</strong> Desarrollar capacidades que
                    perduren más allá de nuestras sesiones
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="text-lg px-8 py-4">
              Trabajemos Juntos
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
