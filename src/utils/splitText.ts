import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
gsap.set(' .title-2 ,  .title-3,  .title-4  , .title5 , .title-6 , .title-7 ', {
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

      gsap.set($('.title-2').find('.word'), {
        y: '2rem',
        opacity: 0,
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

      gsap.to('.wrapper-icons .lottie-1', {
        scrollTrigger: {
          trigger: '.trigger-1',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },
        stagger: {
          each: 0.1,
          from: 'random',
        },
        scale: 0,
      });
    });
  };
  // animation 2

  //animation 3
  let addAnimation3 = function () {
    $('.title-3').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      gsap.set($('.title-3').find('.word'), {
        y: '2rem',
        opacity: 0,
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');
      gsap.to('.title-3', {
        scrollTrigger: {
          trigger: '.trigger-2',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },

        opacity: 1,
      });
      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-2',
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
      gsap.set('.wrapper-icons .lottie-2', { scale: 0 });
      gsap.to('.wrapper-icons .lottie-2', 0.05, {
        scrollTrigger: {
          trigger: '.trigger-2',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse reset',
        },
        stagger: {
          each: 0.1,
          from: 'random',
        },
        scale: 1,
        display: 'block',
        ease: 'Bounce.easeIn',
      });
    });
  };
  // animation 3

  //animation 4
  let addAnimation4 = function () {
    $('.title-4').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      gsap.set($('.title-4').find('.word'), {
        y: '2rem',
        opacity: 0,
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');
      gsap.to('.title-4', {
        scrollTrigger: {
          trigger: '.trigger-3',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },

        opacity: 1,
      });
      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-3',
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
      gsap.set('.wrapper-icons .lottie-3', { scale: 0 });
      gsap.to('.wrapper-icons .lottie-3', 0.04, {
        scrollTrigger: {
          trigger: '.trigger-3',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse reset',
        },
        stagger: {
          each: 0.1,
          from: 'random',
        },
        scale: 1,
        display: 'block',
        ease: 'Bounce.easeIn',
      });
      gsap.to('.wrapper-icons .lottie-2', 0.04, {
        scrollTrigger: {
          trigger: '.trigger-3',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse reset',
        },
        stagger: {
          each: 0.1,
          from: 'random',
        },
        scale: 0,
        display: 'block',
      });
    });
  };
  // animation 4

  //animation 5
  let addAnimation5 = function () {
    $('.title5').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      gsap.set($('.title5').find('.word'), {
        y: '2rem',
        opacity: 0,
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');
      gsap.to('.title5', {
        scrollTrigger: {
          trigger: '.trigger-4',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },

        opacity: 1,
      });
      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-4',
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

      gsap.to('.wrapper-icons .lottie-3', 0.04, {
        scrollTrigger: {
          trigger: '.trigger-4',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse reset',
        },
        stagger: {
          each: 0.1,
          from: 'random',
        },
        scale: 0,
        display: 'block',
      });
    });
  };
  // animation 5

  //animation 6
  let addAnimation6 = function () {
    $('.title-6').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      gsap.set($('.title-6').find('.word'), {
        y: '2rem',
        opacity: 0,
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');
      gsap.to('.title-6', {
        scrollTrigger: {
          trigger: '.trigger-5',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },

        opacity: 1,
      });
      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-5',
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
  // animation 6

  //animation 7
  let addAnimation7 = function () {
    $('.title-7').each(function (index) {
      const text = new SplitType($(this), {
        types: 'lines, words',
        lineClass: 'word-line',
      });

      gsap.set($('.title-7').find('.word'), {
        y: '2rem',
        opacity: 0,
      });

      let textInstance = $(this);
      let line = textInstance.find('.word-line');
      let word = $(this).find('.word');
      gsap.to('.title-7', {
        scrollTrigger: {
          trigger: '.trigger-6',
          start: 'top 1rem',
          end: 'top 1rem',
          toggleActions: 'play none reverse none',
        },

        opacity: 1,
      });
      gsap.to(word, {
        scrollTrigger: {
          trigger: '.trigger-6',
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
  // animation 7

  // Calling animation
  addAnimation();
  addAnimation2();
  addAnimation3();
  addAnimation4();
  addAnimation5();
  addAnimation6();
  addAnimation7();

  window.addEventListener('resize', function (event) {
    addAnimation();
  });
};
