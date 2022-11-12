import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const gsapHome = () => {
  console.log('ancolkoncol');
  gsap.to('.grid-block-background', {
    backgroundColor: '#222222',
    repeat: -1,
    repeatDelay: repeatDelay,
    stagger: {
      each: 1,
      from: 'random',
    },
  });
};
