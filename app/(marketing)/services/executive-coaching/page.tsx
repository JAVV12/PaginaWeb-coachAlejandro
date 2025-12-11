import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { Container, Title, Text, Stack, Card } from '@mantine/core';
import { Button } from '@/components/ui/Button';

export default function ExecutiveCoachingPage() {
  return (
    <>
      <PageHeader
        title="Coaching Ejecutivo"
        subtitle="Desarrollo personalizado de liderazgo adaptativo para ejecutivos y directores"
      />

      <Section variant="white">
        <Container size="xl">
          <Stack gap="xl">
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                ¿Qué es el Coaching Ejecutivo?
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                El Coaching Ejecutivo es un proceso de desarrollo personalizado diseñado para
                ayudar a líderes de alto nivel a desarrollar su capacidad de liderazgo adaptativo.
                A través de sesiones individuales, trabajamos juntos para identificar desafíos
                complejos, desarrollar estrategias de adaptación y fortalecer habilidades de
                liderazgo.
              </Text>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Este programa está diseñado específicamente para ejecutivos, directores, dueños
                de empresa y líderes que enfrentan desafíos organizacionales complejos y necesitan
                desarrollar su capacidad de liderar en la incertidumbre.
              </Text>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Cómo Funciona
              </Title>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <Title order={4} className="font-bold text-[#0d1f2d] mb-2">
                    Evaluación Inicial
                  </Title>
                  <Text size="sm" className="text-gray-600">
                    Sesión inicial para identificar desafíos específicos, objetivos de desarrollo
                    y áreas de oportunidad en tu liderazgo.
                  </Text>
                </Card>

                <Card className="text-center">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <Title order={4} className="font-bold text-[#0d1f2d] mb-2">
                    Sesiones de Coaching
                  </Title>
                  <Text size="sm" className="text-gray-600">
                    Sesiones regulares donde trabajamos en tiempo real con desafíos actuales,
                    aplicando marcos de liderazgo adaptativo y desarrollando capacidades.
                  </Text>
                </Card>

                <Card className="text-center">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <Title order={4} className="font-bold text-[#0d1f2d] mb-2">
                    Aplicación Práctica
                  </Title>
                  <Text size="sm" className="text-gray-600">
                    Entre sesiones, aplicas lo aprendido en situaciones reales, con seguimiento
                    y ajustes continuos para maximizar el impacto.
                  </Text>
                </Card>
              </div>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Beneficios
              </Title>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-[#dcc97f] mr-3 text-xl">✓</span>
                    <div>
                      <Text fw={600} className="text-[#0d1f2d] mb-1">
                        Desarrollo de Capacidades Adaptativas
                      </Text>
                      <Text size="sm" className="text-gray-600">
                        Desarrolla la capacidad de identificar y abordar desafíos adaptativos
                        complejos en tu organización.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#dcc97f] mr-3 text-xl">✓</span>
                    <div>
                      <Text fw={600} className="text-[#0d1f2d] mb-1">
                        Regulación del Estrés Organizacional
                      </Text>
                      <Text size="sm" className="text-gray-600">
                        Aprende a regular el estrés del sistema, manteniendo un equilibrio
                        entre desafío y apoyo.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#dcc97f] mr-3 text-xl">✓</span>
                    <div>
                      <Text fw={600} className="text-[#0d1f2d] mb-1">
                        Orquestación Efectiva
                      </Text>
                      <Text size="sm" className="text-gray-600">
                        Desarrolla habilidades para orquestar el progreso organizacional como
                        un director de orquesta.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-[#dcc97f] mr-3 text-xl">✓</span>
                    <div>
                      <Text fw={600} className="text-[#0d1f2d] mb-1">
                        Autoliderazgo Fortalecido
                      </Text>
                      <Text size="sm" className="text-gray-600">
                        Desarrolla mayor autoconciencia, capacidad de reflexión y gestión
                        emocional en momentos de alta presión.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#dcc97f] mr-3 text-xl">✓</span>
                    <div>
                      <Text fw={600} className="text-[#0d1f2d] mb-1">
                        Soluciones Personalizadas
                      </Text>
                      <Text size="sm" className="text-gray-600">
                        Enfócate en los desafíos específicos de tu contexto organizacional
                        y rol de liderazgo.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#dcc97f] mr-3 text-xl">✓</span>
                    <div>
                      <Text fw={600} className="text-[#0d1f2d] mb-1">
                        Resultados Medibles
                      </Text>
                      <Text size="sm" className="text-gray-600">
                        Trabajamos con objetivos claros y métricas de éxito para asegurar
                        impacto tangible en tu liderazgo y organización.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Title order={3} className="text-2xl font-sans font-bold text-[#0d1f2d] mb-4">
                Para Quién es Ideal
              </Title>
              <Text size="lg" className="text-gray-700 mb-4">
                Este programa es ideal para:
              </Text>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>CEO y fundadores enfrentando transformaciones organizacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Directores y ejecutivos de nivel C-suite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Líderes que necesitan desarrollar capacidad de liderazgo adaptativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Dueños de empresa navegando crecimiento o cambio estratégico</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="text-lg px-10 py-5">
                Agenda una Sesión de Coaching
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
