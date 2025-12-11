'use client';

import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Container, TextInput, Textarea, Button as MantineButton, Stack, Title, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import Script from 'next/script';

const CALENDLY_URL = 'https://calendly.com/coach-alejandrovalencia/nueva-reunion';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      message: (value) => (value.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        notifications.show({
          title: 'Mensaje enviado',
          message: 'Gracias por tu mensaje. Te responderé pronto.',
          color: 'green',
        });
        form.reset();
      } else {
        notifications.show({
          title: 'Error',
          message: data.error || 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.',
          color: 'red',
        });
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="Agenda una sesión o envíame un mensaje para empezar tu transformación de liderazgo"
      />

      <Section variant="white">
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Envíame un Mensaje
              </Title>
              <Text size="lg" className="text-gray-700 mb-8">
                Completa el formulario y me pondré en contacto contigo pronto.
              </Text>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <TextInput
                    label="Nombre"
                    placeholder="Tu nombre completo"
                    required
                    {...form.getInputProps('name')}
                    size="lg"
                  />
                  <TextInput
                    label="Email"
                    placeholder="tu@email.com"
                    type="email"
                    required
                    {...form.getInputProps('email')}
                    size="lg"
                  />
                  <Textarea
                    label="Mensaje"
                    placeholder="Cuéntame sobre ti y cómo puedo ayudarte..."
                    required
                    minRows={6}
                    {...form.getInputProps('message')}
                    size="lg"
                  />
                  <MantineButton
                    type="submit"
                    loading={loading}
                    size="lg"
                    className="bg-[#dcc97f] hover:bg-[#c4b06a] text-[#0d1f2d]"
                  >
                    Enviar Mensaje
                  </MantineButton>
                </Stack>
              </form>
            </div>

            {/* Calendly Widget */}
            <div>
              <Title order={2} className="text-3xl font-sans font-bold text-[#0d1f2d] mb-6">
                Agenda una Sesión
              </Title>
              <Text size="lg" className="text-gray-700 mb-8">
                Selecciona un horario que funcione para ti y agenda directamente una sesión
                de consulta o coaching.
              </Text>

              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />

              {/* Fallback CTA */}
              <div className="mt-8 text-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#dcc97f] text-[#0d1f2d] rounded-lg font-medium hover:bg-[#c4b06a] transition-colors"
                >
                  Abrir Calendly
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
