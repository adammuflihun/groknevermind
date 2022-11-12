import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const gsapHome = () => {
  console.log('ancolkoncol');
  gsap.to('.grid-block-background', 0.5, {
    backgroundColor: '#222222',
    repeat: -1,

    stagger: {
      each: 1,
      from: 'random',
    },
  });
  gsap.to('.grid-block-background', 1, {
    backgroundColor: '#171717',
    repeat: -1,

    stagger: {
      each: 0.5,
      from: 'random',
    },
  });

  gsap.to('.grid-block-background', 0.6, {
    backgroundColor: '#FFB82D',
    repeat: -1,

    stagger: {
      each: 2,
      from: 'random',
    },
  });
};
