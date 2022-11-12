import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const gsapHome = () => {
  console.log('ancolkoncol');
  gsap.to('.grid-block-background', {
    backgroundColor: '#222222',
    stagger: {
      each: 0.1,
      from: 'random',
      ease: 'power2.inOut',
      repeat: -1,
    },
  });
};
