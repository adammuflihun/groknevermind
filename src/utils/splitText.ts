import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

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

      // gsap.set(textInstance, { display: 'none' });

      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-0',
          start: 'top 1rem',
          end: 'top 1rem',
          // markers: true,
          toggleActions: 'play none reverse none',
        },
        y: '2rem',
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
        // ease: 'expo.out',
      });
      gsap.to(textInstance, 0.1, {
        scrollTrigger: {
          trigger: '.trigger-0',
          start: 'top 1rem',
          end: 'top 1rem',

          // markers: true,
          toggleActions: 'play none reverse none',
        },
        display: 'none',
      });
    });
  };

  // animation 2

  let addAnimation2 = function () {
    $('.title-2').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $('.title-2').find('.word');
      let tl = gsap.timeline({});

      tl.set(textInstance, { opacity: 0 });
      gsap.to(textInstance, 0.05, {
        scrollTrigger: {
          trigger: '.trigger-1',
          start: 'top 0%',
          end: 'top 2rem%',
          // markers: true,
          toggleActions: 'play none reverse none',
        },
        display: 'block',
        opacity: 1,
      });
      gsap.fromTo(
        word,
        { opacity: 0, y: '2rem' },
        {
          scrollTrigger: {
            trigger: '.trigger-1',
            start: 'top 0%',
            end: 'top 2rem%',
            // markers: true,
            toggleActions: 'play none reverse none',
          },
          y: '0rem',
          opacity: 1,
          duration: 0.2,
          stagger: 0.1,
          // ease: 'expo.out',
        }
      );
    });
  };

  //restart animation
  addAnimation();
  addAnimation2();

  window.addEventListener('resize', function (event) {
    addAnimation();
  });
};
