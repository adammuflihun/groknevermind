import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const gsapHome = () => {
  console.log('ancolkoncol');
  // const colorBg1 = gsap.to('.grid-block-background', 0.5, {
  //   backgroundColor: '#222222',
  //   repeat: -1,

  //   stagger: {
  //     each: 1,
  //     from: 'random',
  //   },
  // });
  // const colorBg2 = gsap.to('.grid-block-background', 1, {
  //   backgroundColor: '#171717',
  //   repeat: -1,

  //   stagger: {
  //     each: 0.5,
  //     from: 'random',
  //   },
  // });

  // const colorBg = gsap.to('.grid-block-background', 0.6, {
  //   backgroundColor: '#FFB82D',
  //   repeat: -1,

  //   stagger: {
  //     each: 2,
  //     from: 'random',
  //   },
  // });

  let scrollBottom = function () {
    gsap.to('.grid-block-background, .wrapper-content-grid, .center-content', {
      scrollTrigger: {
        trigger: '.at-nevermind',
        start: 'top 100%',
        end: '0% 100%',
        // markers: true,
        toggleActions: 'play none reverse none',
        // onEnter: () => {
        //   colorBg.kill();
        //   colorBg1.kill();
        //   colorBg2.kill();
        // },
        // onLeaveBack: () => {
        //   colorBg.restart();
        //   colorBg1.restart();
        //   colorBg2.restart();
        // },
      },
      // borderWidth: '0',
      // autoAlpha: 0,
      border: 'solid 5px #171717',
      backgroundColor: '#171717',
      duration: 0.1,
    });

    gsap.to('[icons="6"]', {
      scrollTrigger: {
        trigger: '.at-nevermind',
        start: 'top 100%',
        end: '0% 100%',
        // markers: true,
        toggleActions: 'play none reverse none',
      },
      // borderWidth: '0',
      // autoAlpha: 0,
      opacity: 0,
      duration: 0.1,
    });
  };
  scrollBottom();
};
