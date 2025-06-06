import React, { ReactNode } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { GITHUB_URL, LINKED_IN_URL } from '../../../config/config';

/**
 * Custom hook to get contact info data
 *@function useContactConfig
 *@returns {IMyContact[]} myContacts - the hook returns array of social contacts with id, icon, text and href of social platform
 */
export const useContactConfig = (): { myContacts: IMyContact[] } => {
  const myContacts: IMyContact[] = [
    {
      id: 1,
      icon: <FaTelegramPlane className={'contact-icon'} />,
      text: 'Telegram',
      href: 'https://twitter.com/vova_ush',
    },
    {
      id: 1,
      icon: <FiGithub className={'contact-icon'} />,
      text: 'GitHub',
      href: GITHUB_URL,
    },
    {
      id: 2,
      icon: <FiLinkedin className={'contact-icon'} />,
      text: 'LinkedIn',
      href: LINKED_IN_URL,
    },
    {
      id: 4,
      icon: <FaWhatsapp className={'contact-icon'} />,
      text: 'Whatsapp',
      href: 'https://www.instagram.com/vovacodes/',
    },
  ];

  return { myContacts };
};

export interface IMyContact {
  id: number;
  icon: ReactNode;
  text: string;
  href: string;
}
