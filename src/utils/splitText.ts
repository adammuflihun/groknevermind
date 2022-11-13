import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
gsap.set(' .title-2 ,  .title-3,  .title-4  , .title5 , .title-6 , .title-7 ', {
  opacity: 0,
});
gsap.set(' .title-2 .word ', {
  y: '2rem',
  opacity: 0,
});

export const SplitTextHome = () => {
  let windowWidth = window.outerWidth;

  //animation 1
  let addAnimation = function () {
    $('.title-1').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');

      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-0',
          start: 'top 1rem',
          end: 'top 1rem',

          toggleActions: 'play none reverse none',
        },
        y: '2rem',
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
        ease: 'expo.out',
      });
    });
  };
  //animation 1

  //animation 2
  let addAnimation2 = function () {
    $('.title-2').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');
      gsap.to('.title-2', {
        scrollTrigger: {
          trigger: '.trigger-1',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },

        opacity: 1,
      });
      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-1',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },
        y: '0rem',
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        ease: 'expo.out',
      });
    });
  };
  //animation 2

  // animation 2

  // let addAnimation2 = function () {
  //   $('.title-2').each(function (index) {
  //     const text = new SplitType($(this), {
  //       types: 'lines, words',
  //       lineClass: 'word-line',
  //     });

  //     let textInstance = $(this);
  //     let line = textInstance.find('.word-line');
  //     let word = $('.title-2').find('.word');
  //     let tl = gsap.timeline({});

  //     gsap.to(textInstance, 0.05, {
  //       scrollTrigger: {
  //         trigger: '.trigger-1',
  //         start: 'top 0%',
  //         end: 'top 2rem',
  //         // markers: true,
  //         toggleActions: 'play none none none',
  //       },
  //       opacity: 1,
  //     });
  //     gsap.fromTo(
  //       word,
  //       { opacity: 0, y: '2rem' },
  //       {
  //         scrollTrigger: {
  //           trigger: '.trigger-1',
  //           start: 'top 2rem',
  //           end: 'top 2rem',
  //           // markers: true,

  //           toggleActions: 'play none reverse none',
  //         },
  //         y: '0rem',
  //         opacity: 1,
  //         duration: 0.1,
  //         stagger: 0.1,
  //         ease: 'expo.out',
  //       }
  //     );
  //   });
  // };

  // // animation 3

  // let addAnimation3 = function () {
  //   $('.title-3').each(function (index) {
  //     const text = new SplitType($(this), {
  //       types: 'lines, words',
  //       lineClass: 'word-line',
  //     });

  //     let textInstance = $(this);
  //     let line = textInstance.find('.word-line');
  //     let word = $('.title-3').find('.word');
  //     let tl = gsap.timeline({});

  //     // tl.set(textInstance, { opacity: 0 });
  //     gsap.to(textInstance, 0.05, {
  //       scrollTrigger: {
  //         trigger: '.trigger-2',
  //         start: 'top 0%',
  //         end: 'top 2rem%',
  //         toggleActions: 'play none none none',
  //       },
  //       opacity: 1,
  //     });
  //     gsap.fromTo(
  //       word,
  //       { opacity: 0, y: '2rem' },
  //       {
  //         scrollTrigger: {
  //           trigger: '.trigger-2',
  //           start: 'top 0%',
  //           end: 'top 2rem%',

  //           toggleActions: 'play none reverse none',
  //         },
  //         y: '0rem',
  //         opacity: 1,
  //         duration: 0.2,
  //         stagger: 0.1,
  //         ease: 'expo.out',
  //       }
  //     );
  //   });
  // };

  // // animation 4

  // let addAnimation4 = function () {
  //   $('.title-4').each(function (index) {
  //     const text = new SplitType($(this), {
  //       types: 'lines, words',
  //       lineClass: 'word-line',
  //     });

  //     let textInstance = $(this);
  //     let line = textInstance.find('.word-line');
  //     let word = $('.title-4').find('.word');
  //     let tl = gsap.timeline({});

  //     // tl.set(textInstance, { opacity: 0 });
  //     gsap.to(textInstance, 0.05, {
  //       scrollTrigger: {
  //         trigger: '.trigger-3',
  //         start: 'top 0%',
  //         end: 'top 2rem%',
  //         toggleActions: 'play none none none',
  //       },
  //       opacity: 1,
  //     });
  //     gsap.fromTo(
  //       word,
  //       { opacity: 0, y: '2rem' },
  //       {
  //         scrollTrigger: {
  //           trigger: '.trigger-3',
  //           start: 'top 0%',
  //           end: 'top 2rem%',
  //           // onEnter: () => {
  //           //   gsap.to($('.title-3').find('.word'), {
  //           //     y: '2rem',
  //           //     opacity: 0,
  //           //     duration: 0.2,
  //           //     stagger: 0.1,
  //           //     ease: 'expo.out',
  //           //   });
  //           // },
  //           toggleActions: 'play none reverse none',
  //         },
  //         y: '0rem',
  //         opacity: 1,
  //         duration: 0.2,
  //         stagger: 0.1,
  //         ease: 'expo.out',
  //       }
  //     );
  //   });
  // };

  //restart animation
  addAnimation();
  addAnimation2();
  addAnimation3();
  addAnimation4();

  window.addEventListener('resize', function (event) {
    addAnimation();
  });
};
