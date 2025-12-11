'use client';

import { useEffect, useState } from 'react';
import { Modal, Button, Text, Stack, Group } from '@mantine/core';
import { IconMail, IconCalendar, IconX } from '@tabler/icons-react';
import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/coach-alejandrovalencia/nueva-reunion';

export function ContactPopup() {
  const [opened, setOpened] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('contactPopupShown');
    
    if (!popupShown) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setOpened(true);
        setHasShown(true);
        sessionStorage.setItem('contactPopupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpened(false);
  };

  const handleAction = (action: 'message' | 'schedule') => {
    setOpened(false);
    // The Link components will handle navigation
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={
        <Text size="xl" fw={600} className="text-[#0d1f2d]">
          ¿Listo para transformar tu liderazgo?
        </Text>
      }
      centered
      size="md"
      closeButtonProps={{
        icon: <IconX size={20} />,
      }}
      styles={{
        content: {
          borderRadius: '12px',
        },
        header: {
          borderBottom: '1px solid #e9ecef',
          paddingBottom: '16px',
        },
      }}
    >
      <Stack gap="lg" mt="md">
        <Text size="lg" className="text-gray-700">
          Agenda una sesión o envíame un mensaje para comenzar tu viaje hacia un liderazgo más efectivo.
        </Text>

        <Group gap="md" grow>
          <Link href="/contact" onClick={() => handleAction('message')} className="flex-1">
            <Button
              leftSection={<IconMail size={20} />}
              size="lg"
              fullWidth
              className="bg-[#dcc97f] hover:bg-[#c4b06a] text-[#0d1f2d]"
            >
              Enviar Mensaje
            </Button>
          </Link>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAction('schedule')}
            className="flex-1"
          >
            <Button
              leftSection={<IconCalendar size={20} />}
              size="lg"
              variant="outline"
              fullWidth
              className="border-[#dcc97f] text-[#dcc97f] hover:bg-[#dcc97f] hover:text-[#0d1f2d]"
            >
              Agendar Sesión
            </Button>
          </a>
        </Group>

        <Text size="sm" className="text-gray-500 text-center">
          Puedes cerrar este popup y contactarme cuando estés listo
        </Text>
      </Stack>
    </Modal>
  );
}

