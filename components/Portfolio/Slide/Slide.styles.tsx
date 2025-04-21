import styled from 'styled-components';
import { Props } from './Slide';

type SlideProps = Pick<Props, 'bgWallpaper' | 'height'>;

export const Container = styled.div<SlideProps>`
  min-height: ${({ height }) => height};
  background: ${({ bgWallpaper }) => `url(${bgWallpaper}) center/cover no-repeat
    fixed`};
  position: relative;
  scroll-snap-align: start;
`;
