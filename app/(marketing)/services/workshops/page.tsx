import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { Container, Title, Text, Stack, Card } from '@mantine/core';
import { Button } from '@/components/ui/Button';

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        title="Talleres y Workshops"
        subtitle="Sesiones intensivas grupales de aprendizaje y práctica en liderazgo adaptativo"
      />

      <Section variant="white">
        <Container size="xl">
          <Stack gap="xl">
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Talleres de Liderazgo Adaptativo
              </Title>
              <Text size="lg" className="leading-relaxed text-gray-700 mb-4">
                Los talleres y workshops son sesiones intensivas grupales diseñadas para que líderes
                aprendan y practiquen técnicas de liderazgo adaptativo en un ambiente estructurado
                y de apoyo. Estos eventos combinan teoría, práctica, casos de estudio y aplicación
                inmediata a situaciones reales.
              </Text>
              <Text size="lg" className="leading-relaxed text-gray-700">
                Perfectos para organizaciones que quieren exponer a múltiples líderes a marcos de
                liderazgo adaptativo, o para líderes individuales que buscan desarrollar habilidades
                específicas en un formato intensivo y colaborativo.
              </Text>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Formatos Disponibles
              </Title>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="h-full">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Workshop de Medio Día
                  </Title>
                  <Text className="text-gray-600 mb-4">
                    <strong>Duración:</strong> 4 horas
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Introducción intensiva al Liderazgo Adaptativo, cubriendo conceptos fundamentales
                    y aplicación práctica inicial. Ideal para dar un primer paso o refrescar conceptos.
                  </Text>
                  <div className="space-y-2">
                    <Text size="sm" className="font-semibold">Incluye:</Text>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Marco teórico del Liderazgo Adaptativo</li>
                      <li>Ejercicios prácticos y casos de estudio</li>
                      <li>Espacio para preguntas y discusión</li>
                      <li>Materiales y recursos adicionales</li>
                    </ul>
                  </div>
                </Card>

                <Card className="h-full">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Taller de Día Completo
                  </Title>
                  <Text className="text-gray-600 mb-4">
                    <strong>Duración:</strong> 8 horas (con pausas)
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Exploración profunda del Liderazgo Adaptativo con aplicación extensiva. Incluye
                    trabajo en casos reales y desarrollo de planes de acción personalizados.
                  </Text>
                  <div className="space-y-2">
                    <Text size="sm" className="font-semibold">Incluye:</Text>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Marco completo de Liderazgo Adaptativo</li>
                      <li>Trabajo en desafíos reales de los participantes</li>
                      <li>Desarrollo de planes de acción personalizados</li>
                      <li>Seguimiento post-taller (opcional)</li>
                    </ul>
                  </div>
                </Card>

                <Card className="h-full">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Serie de Workshops
                  </Title>
                  <Text className="text-gray-600 mb-4">
                    <strong>Duración:</strong> Múltiples sesiones (2-4 horas cada una)
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Programa extendido que permite profundización progresiva. Ideal para equipos
                    que quieren desarrollar capacidades colectivas a lo largo del tiempo.
                  </Text>
                  <div className="space-y-2">
                    <Text size="sm" className="font-semibold">Incluye:</Text>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Múltiples sesiones temáticas especializadas</li>
                      <li>Aplicación entre sesiones con seguimiento</li>
                      <li>Construcción de comunidad de práctica</li>
                      <li>Evaluación de progreso y ajustes</li>
                    </ul>
                  </div>
                </Card>

                <Card className="h-full">
                  <Title order={4} className="text-xl font-bold text-[#0d1f2d] mb-3">
                    Taller Personalizado
                  </Title>
                  <Text className="text-gray-600 mb-4">
                    <strong>Duración:</strong> Flexible según necesidades
                  </Text>
                  <Text className="text-gray-700 mb-4">
                    Taller diseñado específicamente para tu organización, enfocándose en desafíos
                    y objetivos únicos. Puede incluir múltiples formatos y duraciones.
                  </Text>
                  <div className="space-y-2">
                    <Text size="sm" className="font-semibold">Incluye:</Text>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Diseño personalizado para tu contexto</li>
                      <li>Enfoque en desafíos específicos de la organización</li>
                      <li>Integración con estrategia organizacional</li>
                      <li>Máxima relevancia y aplicación práctica</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Temas Cubiertos
              </Title>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gray-50">
                  <Title order={5} className="font-bold text-[#0d1f2d] mb-2">
                    Fundamentos
                  </Title>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Desafíos técnicos vs adaptativos</li>
                    <li>• El rol del líder adaptativo</li>
                    <li>• Regulación del estrés del sistema</li>
                  </ul>
                </Card>
                <Card className="bg-gray-50">
                  <Title order={5} className="font-bold text-[#0d1f2d] mb-2">
                    Habilidades Prácticas
                  </Title>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Diagnosticar desafíos organizacionales</li>
                    <li>• Orquestar el progreso</li>
                    <li>• Equilibrar desafío y apoyo</li>
                  </ul>
                </Card>
                <Card className="bg-gray-50">
                  <Title order={5} className="font-bold text-[#0d1f2d] mb-2">
                    Aplicación
                  </Title>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Casos de estudio reales</li>
                    <li>• Trabajo en desafíos propios</li>
                    <li>• Planes de acción personalizados</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Title order={3} className="text-2xl font-sans font-bold text-[#0d1f2d] mb-4">
                Para Quién es Ideal
              </Title>
              <Text size="lg" className="text-gray-700 mb-4">
                Los talleres son ideales para:
              </Text>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Líderes que buscan introducción rápida al Liderazgo Adaptativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Equipos que quieren desarrollar lenguaje y capacidades compartidas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Organizaciones que necesitan capacitar múltiples líderes eficientemente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dcc97f] mr-3">•</span>
                  <span>Cualquier líder interesado en formato intensivo de aprendizaje</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="text-lg px-10 py-5">
                Consulta sobre Talleres y Workshops
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
}
