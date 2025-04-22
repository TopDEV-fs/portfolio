import styled from 'styled-components';
interface bgWallpaper {
  bgWallpaper: string;
}
export const Container = styled.section<bgWallpaper>`
  display: flex;
  overflow: hidden;
  min-height: 100vh;

  background: ${({
    bgWallpaper,
  }) => `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${bgWallpaper}) center/cover no-repeat
      fixed`};
`;

export const Navigation = styled.nav`
  width: 30%;
  position: relative;

  @media ${({ theme }) => theme.media.phone} {
    width: 0%;
  }
`;

export const LinkWrapper = styled.div`
  z-index: 2;
  /* position */
  position: absolute;
  top: 20%;
  left: 40%;
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    top: 30%;
    left: 2rem;
  }
`;

interface Props {
  photo: string;
}

export const Photo = styled.div<Props>`
  z-index: 1;
  width: 70%;
  border-radius: 30%;
  background: ${({ photo }) => `url(${photo}) center/cover`};
  /**
   * ----------------------------------------
   * animation fade-in
   * ----------------------------------------
   */
  @keyframes fade-in {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 500ms;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    background: ${({
      photo,
    }) => `linear-gradient(to top, #010606, transparent 250%),
    url(${photo}) left/cover`};
  }
`;
