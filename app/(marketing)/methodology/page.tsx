import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Container, Title, Text, Stack, Card } from '@mantine/core';
import { Button } from '@/components/ui/Button';

export default function MethodologyPage() {
  return (
    <>
      <PageHeader
        title="Metodología"
        subtitle="Liderazgo Adaptativo: Técnica vs Adaptativa, Regular el Estrés, Orquestar el Progreso"
      />

      <Section variant="white">
        <Container size="xl">
          <Stack gap="xl">
            {/* Introducción */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                ¿Qué es el Liderazgo Adaptativo?
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                El Liderazgo Adaptativo es un marco desarrollado por Ronald Heifetz y Marty Linsky
                en la Escuela de Gobierno de Harvard. Este enfoque reconoce que muchos de los
                desafíos que enfrentan los líderes hoy en día no tienen soluciones técnicas simples,
                sino que requieren que las personas y organizaciones se adapten, aprendan y evolucionen.
              </Text>
            </div>

            {/* Desafíos Técnicos vs Adaptativos */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Desafíos Técnicos vs Adaptativos
              </Title>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-blue-50 border-l-4 border-blue-500">
                  <Title order={3} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Desafíos Técnicos
                  </Title>
                  <Text className="text-gray-700 mb-4">
                    Los desafíos técnicos tienen soluciones conocidas. Pueden resolverse aplicando
                    expertise, mejores prácticas o conocimientos existentes dentro de la organización.
                  </Text>
                  <div className="space-y-2">
                    <Text size="sm" className="font-semibold">Ejemplos:</Text>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Implementar un nuevo software</li>
                      <li>Optimizar procesos operativos</li>
                      <li>Mejorar métricas de productividad</li>
                      <li>Resolver problemas con soluciones probadas</li>
                    </ul>
                  </div>
                </Card>

                <Card className="bg-amber-50 border-l-4 border-[#dcc97f]">
                  <Title order={3} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Desafíos Adaptativos
                  </Title>
                  <Text className="text-gray-700 mb-4">
                    Los desafíos adaptativos no tienen respuestas claras. Requieren que las personas
                    cambien sus valores, actitudes o comportamientos, y que la organización evolucione.
                  </Text>
                  <div className="space-y-2">
                    <Text size="sm" className="font-semibold">Ejemplos:</Text>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Transformar la cultura organizacional</li>
                      <li>Navegar cambios estratégicos disruptivos</li>
                      <li>Resolver conflictos de valores</li>
                      <li>Adaptarse a nuevas realidades del mercado</li>
                    </ul>
                  </div>
                </Card>
              </div>

              <Text size="lg" className="leading-relaxed text-gray-700">
                El error más común de los líderes es tratar desafíos adaptativos como si fueran técnicos,
                aplicando soluciones rápidas a problemas que requieren transformación profunda. El
                Liderazgo Adaptativo proporciona herramientas para distinguir entre ambos tipos y
                aplicar el enfoque adecuado.
              </Text>
            </div>

            {/* Regular el Estrés del Sistema */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Regular el Estrés del Sistema
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                Cuando enfrentamos desafíos adaptativos, el sistema organizacional experimenta estrés.
                Las personas deben cambiar, aprender cosas nuevas, dejar atrás prácticas conocidas.
                Este estrés es inevitable y necesario para el crecimiento, pero debe ser regulado.
              </Text>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <Title order={3} className="text-xl font-bold text-[#0d1f2d] mb-3">
                  El Líder como Regulador del Estrés
                </Title>
                <Text className="text-gray-700 mb-4">
                  El líder adaptativo debe mantener el nivel de estrés en una "zona productiva":
                </Text>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#dcc97f] mr-3">•</span>
                    <span>
                      <strong>Muy poco estrés:</strong> La organización se vuelve complaciente,
                      no hay urgencia para cambiar
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dcc97f] mr-3">•</span>
                    <span>
                      <strong>Estrés óptimo:</strong> Hay suficiente urgencia para movilizar,
                      pero no tanto que paralice
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#dcc97f] mr-3">•</span>
                    <span>
                      <strong>Demasiado estrés:</strong> El sistema se paraliza, hay resistencia,
                      ansiedad y potencial para disfunción organizacional
                    </span>
                  </li>
                </ul>
              </div>

              <Text size="lg" className="leading-relaxed text-gray-700">
                Las técnicas de regulación incluyen proporcionar dirección y protección cuando
                es necesario, pero también exponer a la organización a la realidad de los desafíos
                adaptativos que enfrenta, sin protegerla excesivamente del estrés necesario para
                crecer.
              </Text>
            </div>

            {/* Líder como Orquestador */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                El Líder como Orquestador
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                En el Liderazgo Adaptativo, el líder no es un héroe solitario que tiene todas las
                respuestas. En cambio, actúa como un director de orquesta, orquestando el proceso
                de adaptación en toda la organización.
              </Text>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="text-center">
                  <div className="text-3xl mb-3">🎼</div>
                  <Title order={4} className="font-bold text-[#0d1f2d] mb-2">
                    Movilizar el Sistema
                  </Title>
                  <Text size="sm" className="text-gray-600">
                    Identificar los desafíos adaptativos y ayudar a la organización a ver
                    la necesidad de cambio
                  </Text>
                </Card>

                <Card className="text-center">
                  <div className="text-3xl mb-3">⚖️</div>
                  <Title order={4} className="font-bold text-[#0d1f2d] mb-2">
                    Equilibrar Desafío y Apoyo
                  </Title>
                  <Text size="sm" className="text-gray-600">
                    Proporcionar suficiente desafío para movilizar, pero también apoyo
                    para que las personas puedan manejar el cambio
                  </Text>
                </Card>

                <Card className="text-center">
                  <div className="text-3xl mb-3">🔄</div>
                  <Title order={4} className="font-bold text-[#0d1f2d] mb-2">
                    Orquestar el Progreso
                  </Title>
                  <Text size="sm" className="text-gray-600">
                    Facilitar el proceso de experimentación, aprendizaje y adaptación
                    en toda la organización
                  </Text>
                </Card>
              </div>

              <Text size="lg" className="leading-relaxed text-gray-700">
                Este enfoque requiere que el líder desarrolle habilidades de observación, diagnóstico
                y facilitación. Debe ser capaz de "ir al balcón" para ver el sistema completo,
                identificar dónde se necesita el cambio, y luego "volver a la pista de baile" para
                intervenir de manera efectiva.
              </Text>
            </div>

            {/* Aplicación Práctica */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Aplicación Práctica
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                En mi trabajo de coaching, ayudo a los líderes a:
              </Text>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Diagnosticar si enfrentan desafíos técnicos o adaptativos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Desarrollar la capacidad de regular el estrés del sistema</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Orquestar procesos de adaptación en sus organizaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Equilibrar el desafío y el apoyo según las necesidades del sistema</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Desarrollar su capacidad de observación y diagnóstico organizacional</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#0d1f2d] text-white p-8 rounded-lg text-center mt-8">
              <Title order={2} className="text-2xl font-sans font-bold mb-4">
                ¿Quieres Aplicar el Liderazgo Adaptativo?
              </Title>
              <Text size="lg" className="mb-6 text-gray-200">
                Agenda una sesión de coaching donde exploramos cómo esta metodología puede
                transformar tu capacidad de liderazgo.
              </Text>
              <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary">
                Agendar Sesión
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
