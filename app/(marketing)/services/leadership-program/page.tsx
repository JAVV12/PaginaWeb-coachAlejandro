import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { Container, Title, Text, Stack, Card } from '@mantine/core';
import { Button } from '@/components/ui/Button';

export default function LeadershipProgramPage() {
  return (
    <>
      <PageHeader
        title="Programas de Liderazgo"
        subtitle="Programas estructurados para equipos directivos y transformación organizacional"
      />

      <Section variant="white">
        <Container size="xl">
          <Stack gap="xl">
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Programas de Liderazgo Adaptativo
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                Los Programas de Liderazgo están diseñados para equipos directivos y organizaciones
                que buscan desarrollar capacidades colectivas de liderazgo adaptativo. A diferencia
                del coaching individual, estos programas trabajan con grupos de líderes para
                transformar la cultura organizacional y desarrollar habilidades adaptativas a nivel
                sistémico.
              </Text>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Estos programas combinan sesiones grupales, trabajo en equipo, y aplicación práctica
                en situaciones reales de la organización, creando un impacto transformador que va
                más allá del desarrollo individual.
              </Text>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Estructura del Programa
              </Title>
              <div className="space-y-6">
                <Card className="bg-blue-50 border-l-4 border-blue-500">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Fase 1: Diagnóstico y Alineación
                  </Title>
                  <Text className="text-gray-700">
                    Evaluación inicial del equipo directivo, identificación de desafíos adaptativos
                    organizacionales, y establecimiento de objetivos compartidos. Esta fase incluye
                    sesiones individuales y grupales para crear una base sólida.
                  </Text>
                </Card>

                <Card className="bg-amber-50 border-l-4 border-[#dcc97f]">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Fase 2: Desarrollo de Capacidades
                  </Title>
                  <Text className="text-gray-700">
                    Sesiones intensivas de formación en liderazgo adaptativo, donde el equipo aprende
                    marcos teóricos y prácticas aplicables. Incluye ejercicios prácticos, casos de
                    estudio y trabajo colaborativo.
                  </Text>
                </Card>

                <Card className="bg-green-50 border-l-4 border-green-500">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Fase 3: Aplicación y Experimentación
                  </Title>
                  <Text className="text-gray-700">
                    El equipo aplica lo aprendido en desafíos reales de la organización, con
                    seguimiento continuo, retroalimentación y ajustes. Esta fase incluye sesiones
                    de revisión y aprendizaje colectivo.
                  </Text>
                </Card>

                <Card className="bg-purple-50 border-l-4 border-purple-500">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Fase 4: Institucionalización
                  </Title>
                  <Text className="text-gray-700">
                    Consolidación de capacidades desarrolladas, creación de sistemas de soporte
                    interno, y transferencia de conocimiento para asegurar sostenibilidad a largo
                    plazo.
                  </Text>
                </Card>
              </div>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Beneficios del Programa
              </Title>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Text fw={600} className="text-[#0d1f2d] mb-2 text-lg">
                      Desarrollo Colectivo de Capacidades
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      El equipo desarrolla un lenguaje común y capacidades compartidas de liderazgo
                      adaptativo, creando sinergia y alineación.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} className="text-[#0d1f2d] mb-2 text-lg">
                      Transformación Cultural
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      Los programas facilitan cambios profundos en la cultura organizacional,
                      moviendo hacia una mentalidad más adaptativa y resiliente.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} className="text-[#0d1f2d] mb-2 text-lg">
                      Aplicación Inmediata
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      El trabajo se enfoca en desafíos reales de la organización, generando
                      resultados tangibles durante el programa.
                    </Text>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Text fw={600} className="text-[#0d1f2d] mb-2 text-lg">
                      Aprendizaje entre Pares
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      Los líderes aprenden unos de otros, creando una comunidad de práctica
                      que continúa después del programa.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} className="text-[#0d1f2d] mb-2 text-lg">
                      Alineación Estratégica
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      El equipo desarrolla visión compartida y capacidad colectiva para ejecutar
                      estrategias complejas de transformación.
                    </Text>
                  </div>
                  <div>
                    <Text fw={600} className="text-[#0d1f2d] mb-2 text-lg">
                      Sostenibilidad
                    </Text>
                    <Text size="sm" className="text-gray-600">
                      El programa incluye componentes para asegurar que las capacidades desarrolladas
                      se mantengan y evolucionen a largo plazo.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Title order={3} className="text-2xl font-sans font-bold text-[#0d1f2d] mb-4">
                Para Quién es Ideal
              </Title>
              <Text size="lg" className="text-gray-700 mb-4">
                Estos programas son ideales para:
              </Text>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Equipos directivos completos buscando transformación organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Organizaciones en proceso de cambio estratégico significativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Equipos de liderazgo que necesitan desarrollar capacidades adaptativas colectivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Organizaciones que buscan institucionalizar prácticas de liderazgo adaptativo</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="text-lg px-10 py-5">
                Consulta sobre Programas de Liderazgo
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
