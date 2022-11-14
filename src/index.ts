import { gsapHome } from '$utils/gsapHome';
import { SplitTextHome } from '$utils/splitText';

window.Webflow ||= [];
window.Webflow.push(() => {});

gsapHome();
SplitTextHome();
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});
