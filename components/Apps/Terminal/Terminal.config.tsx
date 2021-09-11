import { useActions } from '../../../hooks/useActions';
import VsCode from '../VsCode/VsCode';
import React from 'react';
import GoogleSearch from '../GoogleSearch/GoogleSearch';
import Resume from '../../Portfolio/Resume/Resume';

export const useTerminalConfig = (): {
  openVSCode: () => void;
  openGoogle: () => void;
  openResume: () => void;
  greetingMessage: string;
  hack: string;
  sad: string;
} => {
  const { openWindow } = useActions();

  const openVSCode = () => {
    openWindow({
      windowName: 'VSCode',
      isOpen: true,
      windowIcon: '/assets/icons/startmenu/vscode.svg',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <VsCode />,
    });
  };

  const openGoogle = () => {
    openWindow({
      windowName: 'Google',
      isOpen: true,
      windowIcon: '/assets/icons/startmenu/chrome.svg',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <GoogleSearch />,
    });
  };

  const openResume = () => {
    openWindow({
      windowName: 'Resume',
      isOpen: true,
      windowIcon: '/assets/icons/recommended/word.png',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <Resume />,
    });
  };

  const greetingMessage = `
              ██╗░░░██╗░█████╗░██╗░░░██╗░█████╗░  ░█████╗░░█████╗░██████╗░███████╗░██████╗
              ██║░░░██║██╔══██╗██║░░░██║██╔══██╗  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
              ╚██╗░██╔╝██║░░██║╚██╗░██╔╝███████║  ██║░░╚═╝██║░░██║██║░░██║█████╗░░╚█████╗░
              ░╚████╔╝░██║░░██║░╚████╔╝░██╔══██║  ██║░░██╗██║░░██║██║░░██║██╔══╝░░░╚═══██╗
              ░░╚██╔╝░░╚█████╔╝░░╚██╔╝░░██║░░██║  ╚█████╔╝╚█████╔╝██████╔╝███████╗██████╔╝
              ░░░╚═╝░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝  ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░
              
                              👊 (͡👁 ͜ʖ͡👁) 👋  GLAD TO MEET YOU STRANGER 👋 ᕙ(͡ಠ ͜ʖ͡ಠ)ᕗ
                                             TYPE "HELP" FOR FULL LIST OF COMMANDS
              `;

  const hack = `
                              ▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄▄
                            █░░░░░░░░░░░░░░░░░░▀▀▄
                            █░░░░░░░░░░░░░░░░░░░░░░█
                            █░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█
                        ░▄▀░▄▄▄░░█▀▀▀▀▄▄█░░░██▄▄█░░░░█
                        █░░█░▄░▀▄▄▄▀░░░░░░░░█░░░░░░░░░█
                        █░░█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄░█
                          █░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
                          █░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
                           █░░░░██░░▀█▄▄▄█▄▄█▄▄██▄░░█
                            █░░░░▀▀▄░█░░░█░█▀█▀█▀██░█
                            ▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
                              ▀▄▄░░░░░░░░░░░░░░░░░░░█
                                  ▀▀▄▄░░░░░░░░░░░░░░░█
                                      ▀▄▄▄▄▄░░░░░░░░█
                                          ██▄▄▄▄▄▄▄▄▀
  `;

  const sad = `
                           ───────▄▀▀▀▀▀▀▀▀▀▀▄▄
                          ────▄▀▀░░░░░░░░░░░░░▀▄
                          ──▄▀░░░░░░░░░░░░░░░░░░▀▄
                          ──█░░░░░░░░░░░░░░░░░░░░░▀▄
                          ─▐▌░░░░░░░░▄▄▄▄▄▄▄░░░░░░░▐▌
                          ─█░░░░░░░░░░░▄▄▄▄░░▀▀▀▀▀░░█
                          ▐▌░░░░░░░▀▀▀▀░░░░░▀▀▀▀▀░░░▐▌
                          █░░░░░░░░░▄▄▀▀▀▀▀░░░░▀▀▀▀▄░█
                          █░░░░░░░░░░░░░░░░▀░░░▐░░░░░▐▌
                          ▐▌░░░░░░░░░▐▀▀██▄░░░░░░▄▄▄░▐▌
                          ─█░░░░░░░░░░░▀▀▀░░░░░░▀▀██░░█
                          ─▐▌░░░░▄░░░░░░░░░░░░░▌░░░░░░█
                          ──▐▌░░▐░░░░░░░░░░░░░░▀▄░░░░░█
                          ───█░░░▌░░░░░░░░▐▀░░░░▄▀░░░▐▌
                          ───▐▌░░▀▄░░░░░░░░▀░▀░▀▀░░░▄▀
                          ───▐▌░░▐▀▄░░░░░░░░░░░░░░░░█
                          ───▐▌░░░▌░▀▄░░░░▀▀▀▀▀▀░░░█
                          ───█░░░▀░░░░▀▄░░░░░░░░░░▄▀
                          ──▐▌░░░░░░░░░░▀▄░░░░░░▄▀
                          ─▄▀░░░▄▀░░░░░░░░▀▀▀▀█▀
                          ▀░░░▄▀░░░░░░░░░░▀░░░▀▀▀▀▄▄▄▄▄
  `;

  return {
    openVSCode,
    openGoogle,
    openResume,
    greetingMessage,
    hack,
    sad,
  };
};
