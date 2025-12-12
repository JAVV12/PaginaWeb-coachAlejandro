import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { FeatureCard } from '../components/FeatureCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { IconTarget, IconUsers, IconBriefcase } from '@tabler/icons-react';

const services = [
  {
    title: 'Coaching Ejecutivo',
    description: 'Sesiones individuales de coaching personalizado para desarrollar tu capacidad de liderazgo adaptativo y resolver desafíos complejos de manera efectiva.',
    href: '/services/executive-coaching',
    icon: <IconTarget size={48} stroke={2} />,
  },
  {
    title: 'Programas de Liderazgo',
    description: 'Programas estructurados para equipos directivos que buscan transformar su cultura organizacional y desarrollar habilidades adaptativas colectivas.',
    href: '/services/leadership-program',
    icon: <IconUsers size={48} stroke={2} />,
  },
  {
    title: 'Talleres y Workshops',
    description: 'Sesiones grupales intensivas donde los líderes aprenden y practican técnicas de liderazgo adaptativo aplicadas a casos reales de sus organizaciones.',
    href: '/services/workshops',
    icon: <IconBriefcase size={48} stroke={2} />,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Servicios"
        subtitle="Programas diseñados para dueños de empresa, líderes de equipo y directores"
      />

      <Section variant="white">
        <Container size="xl">
          <SectionTitle
            title="Mis Servicios"
            subtitle="Cada programa está diseñado para desarrollar capacidades de liderazgo adaptativo específicas según tus necesidades"
            centered
          />

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mb="xl">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="block h-full">
                <FeatureCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="h-full hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
            ))}
          </SimpleGrid>

          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <Title order={2} className="text-2xl font-sans font-bold text-[#0d1f2d] mb-4">
              ¿No estás seguro qué servicio es el adecuado?
            </Title>
            <Text size="lg" className="text-gray-700 mb-6">
              Agenda una sesión de consulta gratuita donde podemos explorar juntos cuál
              es el mejor enfoque para desarrollar tu liderazgo adaptativo.
            </Text>
            <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary">
              Agendar Consulta
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
