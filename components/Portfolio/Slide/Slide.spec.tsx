import { shallow } from 'enzyme';
import React from 'react';
import Slide from './Slide';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(
    <Slide
      height={'777px'}
      bgWallpaper="/assets/background.jpg"
      anchorID={'1'}
    />
  );
};

describe('Slide', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
});
