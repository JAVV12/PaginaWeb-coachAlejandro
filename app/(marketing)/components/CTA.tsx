import { Button } from '@/components/ui/Button';
import { Container, Text, Title } from '@mantine/core';

export function CTA() {
  return (
    <section className="bg-[#0d1f2d] py-20">
      <Container size="xl" className="text-center">
        <Title
          order={2}
          className="text-4xl md:text-5xl font-sans font-bold text-[#dcc97f] mb-6"
        >
          ¿Listo para Transformar tu Liderazgo?
        </Title>
        <Text size="xl" c="gray.3" className="mb-8 max-w-2xl mx-auto">
          Agenda una sesión de coaching ejecutivo y descubre cómo el Liderazgo Adaptativo
          puede elevar tu capacidad de liderar equipos de alto rendimiento.
        </Text>
        <Button href="https://calendly.com/coach-alejandrovalencia/nueva-reunion" variant="primary" className="text-lg px-10 py-5">
          Agendar una Sesión
        </Button>
      </Container>
    </section>
  );
}
