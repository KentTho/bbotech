/*=== Javascript function indexing hear===========

01. rtsJs.swiperActivation();
02. rtsJs.wowActive();
03. rtsJs.customSelectActive();
04. rtsJs.videoActivation();

06. rtsJs.searchOption();
07. rtsJs.backToTopInit();
08. rtsJs.stickyHeader();
09. rtsJs.sideMenu();
10. rtsJs.metismenu();
11. rtsJs.preloader();
12. rtsJs.smoothScroll();
13. rtsJs.isotop();
14. rtsJs.countDown();
15. rtsJs.slider_drag_cursor();
16. rtsJs.rtlToggle();


==================================================*/

(function ($) {
  'use strict';
  let device_width = window.innerWidth;
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      rtsJs.swiperActivation();
      rtsJs.splitText();
      rtsJs.splitText2();
      rtsJs.scrollingText();
      rtsJs.scrollingText2();
      rtsJs.scrollingZoom();
      rtsJs.scrollingZoom2();
      rtsJs.scrollingRotate();
      rtsJs.sectionFixStack();
      rtsJs.animZoomIn();
      rtsJs.scaleImgFromTo();
      rtsJs.fadeAnimActive();
      rtsJs.elementMove();
      rtsJs.revealText();
      rtsJs.bannerChatTyping();
      rtsJs.textTitleAnimation__1();
      rtsJs.textTitleAnimation__2();
      rtsJs.wowActive();
      rtsJs.customSelectActive();
      rtsJs.videoActivation();
      rtsJs.preloader();
      rtsJs.searchOption();
      rtsJs.counterUp();
      rtsJs.backToTopInit();
      rtsJs.stickyHeader();
      // rtsJs.sideMenu();
      rtsJs.smoothScroll();
      rtsJs.metismenu();
      rtsJs.rtlToggle();
      rtsJs.regionAreaActive();
      rtsJs.itineraryAccordion();
      rtsJs.animationOnHover();
      rtsJs.liquidWaveActivation();
      rtsJs.imageSlideGsap();
      rtsJs.accordionActive();
      rtsJs.fonklsAnimation();
      rtsJs.blurBottom();
      rtsJs.mobileMenu();
    },
    fonklsAnimation: function () {
      let endTl = gsap.timeline({
        repeat: -1,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.end',
          start: 'bottom 100%-=50px'
        }
      });
      gsap.set('.end', {
        opacity: 0
      });
      gsap.to('.end', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.end',
          start: 'bottom 100%-=50px',
          once: true
        }
      });
      let mySplitText = new SplitText(".end", {
        type: "words,chars"
      });
      let chars = mySplitText.chars;
      endTl.to(chars, {
        duration: 0.5,
        scaleY: 0.9,
        ease: "power3.out",
        stagger: 0.04,
        transformOrigin: 'center bottom'
      });
      endTl.to(chars, {
        yPercent: -10,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8
      }, 0.5);
      endTl.to(chars, {
        scaleY: 1,
        ease: "elastic.out(2.5, 0.2)",
        stagger: 0.03,
        duration: 1.5
      }, 0.5);
      endTl.to(chars, {

        ease: "power2.out",
        stagger: 0.03,
        duration: 0.3
      }, 0.5);
      endTl.to(chars, {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8
      }, 0.7);
      endTl.to(chars, {
        duration: 1.4,
        stagger: 0.05
      });
    },
    swiperActivation: function () {
      $(document).ready(function () {
        var swiper = new Swiper(".testimonialsSlider", {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1200,
          loop: true,
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          pagination: {
            el: ".slider-dots",
            clickable: true,
          },
          breakpoints: {
            767: {
              slidesPerView: 1,
              autoplay: true,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper(".testimonialsSlider2", {
          slidesPerView: 2,
          spaceBetween: 30,
          speed: 1200,
          loop: true,
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          pagination: {
            el: ".slider-dots",
            clickable: true,
          },
          breakpoints: {
            992: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
              autoplay: true,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper(".testimonialsSlider4", {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1200,
          loop: true,
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          pagination: {
            el: ".sliders-dot",
            clickable: true,
          },
          breakpoints: {
            767: {
              slidesPerView: 1,
              autoplay: true,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper(".testimonialsSlider5", {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1200,
          loop: true,
          navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          },
          pagination: {
            el: ".slider-dots5",
            clickable: true,
          },
          breakpoints: {
            767: {
              slidesPerView: 1,
              autoplay: true,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper('.teamSlider', {
          slidesPerView: '4',
          spaceBetween: 40,
          speed: 1200,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".slider-dots",
            clickable: true,
          },
          breakpoints: {
            1300: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper('.projectSlider', {
          slidesPerView: '3',
          spaceBetween: 40,
          speed: 1200,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".slider-dots",
            clickable: true,
          },
          breakpoints: {
            1200: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper('.projectSlider2', {
          slidesPerView: '3',
          spaceBetween: 40,
          speed: 1200,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".slider-dots2",
            clickable: true,
          },
          breakpoints: {
            1200: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper('.serviceSlider', {
          slidesPerView: '4',
          spaceBetween: 30,
          speed: 1200,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".slider-dotx",
            clickable: true,
          },
          breakpoints: {
            1600: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
      $(document).ready(function () {
        var swiper = new Swiper('.project-ai-slider', {
          slidesPerView: '4',
          spaceBetween: 38,
          speed: 1200,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".slider-dots",
            clickable: true,
          },
          breakpoints: {
            1400: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          },
        })
      })
    },
    accordionActive: function () {
      const accordionHeaders = document.querySelectorAll('.accordion-header');
      if (!accordionHeaders.length) return;

      accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
          const clickedItem = header.closest('.accordion-item');

          const parentSection = clickedItem.parentElement;
          const siblingItems = parentSection.querySelectorAll('.accordion-item');

          siblingItems.forEach(function (item) {
            item.classList.remove('active');
          });

          clickedItem.classList.add('active');
        });
      });
    },
    wowActive: function () {
      new WOW().init();
    },
    customSelectActive: function () {
      document.querySelectorAll('.custom-select').forEach(select => {
        const trigger = select.querySelector('.custom-select-trigger');
        const options = select.querySelector('.custom-options');
        const hiddenInput = select.querySelector('input[type="hidden"]');

        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          const isActive = select.classList.contains('active');

          // Close all other selects
          document.querySelectorAll('.custom-select').forEach(s => {
            s.classList.remove('active');
            s.querySelector('.custom-options').style.height = '0';
          });

          if (!isActive) {
            select.classList.add('active');
            options.style.height = '250px';
          } else {
            select.classList.remove('active');
            options.style.height = '0';
          }
        });

        // Select option
        options.querySelectorAll('.option').forEach(option => {
          option.addEventListener('click', () => {
            trigger.textContent = option.textContent;
            hiddenInput.value = option.dataset.value;

            options.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');

            options.style.height = '0';
            select.classList.remove('active');
          });
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', e => {
          if (!select.contains(e.target)) {
            options.style.height = '0';
            select.classList.remove('active');
          }
        });
      });
    },
    splitText: function (e) {
      if ($('.rts-text-anime-style-1').length) {

        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
          let animatedTextElements = document.querySelectorAll('.rts-text-anime-style-1');

          animatedTextElements.forEach((element) => {
            if (element.animation) {
              element.animation.progress(1).kill();
              element.split.revert();
            }

            element.split = new SplitText(element, {
              type: "lines,words,chars",
              linesClass: "split-line",
            });

            // FIX: batch gsap.set calls — read layout once, then write
            gsap.set(element, { perspective: 400 });
            gsap.set(element.split.chars, {
              opacity: 0,
              x: "50",
            });

            element.animation = gsap.to(element.split.chars, {
              scrollTrigger: { trigger: element, start: "top 95%" },
              x: "0",
              y: "0",
              rotateX: "0",
              opacity: 1,
              duration: 1,
              ease: Back.easeOut,
              stagger: 0.02,
            });
          });

          return () => {
            let animatedTextElements = document.querySelectorAll('.rts-text-anime-style-1');
            animatedTextElements.forEach((element) => {
              if (element.animation) {
                element.animation.kill();
              }
              if (element.split) {
                element.split.revert();
              }
              gsap.set(element, { clearProps: "all" });
            });
          };
        });
      }
    },
    splitText2: function (e) {
      if ($('.rts-text-anime-style-2').length) {
        let animatedTextElements = document.querySelectorAll('.rts-text-anime-style-2');

        animatedTextElements.forEach((element) => {
          if (element.animation) {
            element.animation.progress(1).kill();
            element.split.revert();
          }
          element.split = new SplitText(element, {
            type: "lines,words",
            linesClass: "split-line",
          });

          gsap.set(element, { perspective: 400 });

          // FIX: "filter" CSS property triggers reflow when animated outside GSAP.
          // Using WebkitFilter alias is not needed — GSAP handles vendor prefixes internally.
          // We keep filter in gsap.set (compositor-friendly initial state) and
          // move clearProps to the to() call so GSAP owns the full lifecycle.
          gsap.set(element.split.words, {
            y: 60,
            rotation: 5,
            filter: "blur(4px)",
          });

          element.animation = gsap.to(element.split.words, {
            scrollTrigger: { trigger: element, start: "top 95%" },
            y: 0,
            rotation: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.08,
            clearProps: "filter",
          });
        });
      }
    },
    textTitleAnimation__1: function () {
      if (window.innerWidth > 650) {

        const quotes = document.querySelectorAll(".quote");
        const quotes2 = document.querySelectorAll(".quote-2");

        function setupSplits() {

          // FIX: Moved the .split-line wrap outside $(document).ready()
          // to avoid a redundant ready() call inside a ready() context.
          // The effect is identical — all splits happen after DOM is ready.
          $(".split-line").wrap('<div class="split-parent"></div>');

          // ── .quote — word by word slide up ──────────────────────
          quotes.forEach(quote => {

            quote.split = new SplitText(quote, {
              type: "words",
              wordsClass: "split-word"
            });

            // Batch DOM writes: build all wrapper spans before appending
            const fragment = document.createDocumentFragment();
            quote.split.words.forEach(word => {
              const wrapper = document.createElement("span");
              wrapper.style.cssText = "display:inline-block; overflow:hidden; vertical-align:bottom;";
              word.parentNode.insertBefore(wrapper, word);
              wrapper.appendChild(word);
            });

            quote.anim = gsap.from(quote.split.words, {
              scrollTrigger: {
                trigger: quote,
                toggleActions: "play none none none",
                once: true,
                start: "top 85%",
              },
              duration: 0.6,
              delay: 0.3,
              ease: "circ.out",
              yPercent: 100,
              stagger: 0.06,
            });
          });

          // ── .quote-2 — word by word fade + slide up ─────────────
          quotes2.forEach(quote2 => {

            quote2.split = new SplitText(quote2, {
              type: "words",
              wordsClass: "split-word"
            });

            quote2.split.words.forEach(word => {
              const wrapper = document.createElement("span");
              wrapper.style.cssText = "display:inline-block; overflow:hidden; vertical-align:bottom;";
              word.parentNode.insertBefore(wrapper, word);
              wrapper.appendChild(word);
            });

            quote2.anim = gsap.from(quote2.split.words, {
              scrollTrigger: {
                trigger: quote2,
                toggleActions: "play none none none",
                once: true,
                start: "top 85%",
              },
              duration: 0.6,
              autoAlpha: 0,
              ease: "circ.out",
              yPercent: 100,
              stagger: 0.06,
            });
          });
        }

        setupSplits();
      }
    },
    textTitleAnimation__2: function () {
      if (window.innerWidth > 650) {

        gsap.registerPlugin(ScrollTrigger);

        function splitWords(el) {
          const children = Array.from(el.childNodes);
          el.innerHTML = '';

          children.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
              node.textContent.split(/(\s+)/).forEach(part => {
                if (part.trim()) {
                  const inner = document.createElement('span');
                  inner.className = 'word';
                  inner.style.cssText = 'display:inline-block;';
                  inner.textContent = part;
                  el.appendChild(inner);
                } else if (part) {
                  el.appendChild(document.createTextNode(part));
                }
              });
            } else if (node.nodeType === Node.ELEMENT_NODE) {

              if (node.tagName.toLowerCase() === 'br') {
                el.appendChild(node.cloneNode(false));
                return;
              }

              const inner = node.cloneNode(true);
              inner.classList.add('word');
              inner.style.cssText = (inner.getAttribute('style') || '') + '; display:inline-block;';
              el.appendChild(inner);
            }
          });

          return el.querySelectorAll('.word');
        }

        // FIX: Collect all words first (reads), then do all gsap.set calls (writes).
        // Previously each forEach iteration interleaved querySelectorAll (read) with
        // gsap.set (write), causing one forced reflow per element.
        const titleData = [];
        document.querySelectorAll('.animated-title').forEach(titleEl => {
          const words = splitWords(titleEl); // DOM read
          titleData.push({ titleEl, words });
        });

        // All writes happen after all reads are done
        titleData.forEach(({ titleEl, words }) => {
          gsap.set(words, {
            opacity: 0,
            y: 50,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: titleEl,
              toggleActions: "play none none none",
              once: true,
              start: "top 88%",
            }
          });

          tl.to(words, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: .3,
          });
        });
      }
    },
    scrollingText: function () {
      $(document).ready(function () {
        let el = document.getElementsByClassName('scrollingtext-1');
        if (el.length) {

          gsap.registerPlugin(ScrollTrigger);

          gsap.to('.scrollingtext-1', {
            xPercent: 30,
            scrollTrigger: {
              trigger: '.scrollingtext-1',
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            },
            ease: "none"
          });
        }
      });
    },
    scrollingText2: function () {
      $(document).ready(function () {
        let el = document.getElementsByClassName('scrollingtext-2');
        if (el.length) {

          gsap.registerPlugin(ScrollTrigger);

          gsap.to('.scrollingtext-2', {
            yPercent: -80,
            scrollTrigger: {
              trigger: '.scrollingtext-2',
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            },
            ease: "none"
          });
        }
      });
    },
    scrollingZoom: function () {
      const el = document.querySelector('.scrollingzoom-1');
      if (!el) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(el,
        {
          scale: 0.75,
          opacity: 0,
          filter: 'blur(2px)',
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center center',
            scrub: 2.5,
          },
        }
      );

    },
    scrollingZoom2: function () {
      const el = document.querySelector('.scrollingzoom-2');
      if (!el) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(el,
        {
          scale: 0.75,
          opacity: 0,
          filter: 'blur(2px)',
        },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center center',
            scrub: 2.5,
          },
        }
      );

    },
    scrollingRotate: function () {
      const el = document.querySelector('.scrollingrotate-1');
      if (!el) return;

      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(el,
        {
          scale: 0.6,
          opacity: 0,
          rotation: -90
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        }
      );
    },
    sectionFixStack: function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      function buildStack(sectionFix) {
        const sectionTitlePin = sectionFix.querySelector('.section-title-pin');
        const scrollSectionEl = sectionFix.querySelector('.scroll-section.vertical-section');
        if (!scrollSectionEl || !sectionTitlePin) return;

        const wrapper = scrollSectionEl.querySelector('.section-inner');
        if (!wrapper) return;

        const items = wrapper.querySelectorAll('.pricing-wrapper');
        if (!items.length) return;

        items.forEach((item, index) => {
          if (index !== 0) gsap.set(item, { yPercent: 100 });
        });

        const scrollDistance = items.length * 50;
        const navList = sectionFix.querySelector('.navigation-active-item');
        const navItems = navList ? navList.querySelectorAll('li .item') : [];

        function setActive(progress) {
          const clamped = Math.min(Math.max(progress, 0), 0.9999);
          const index = Math.min(Math.floor(clamped * items.length), items.length - 1);
          items.forEach((el, i) => el.classList.toggle('active', i === index));
          navItems.forEach((el, i) => el.classList.toggle('active', i === index));
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionFix,
            pin: true,
            start: 'top top',
            end: () => `+=${scrollDistance}%`,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setActive(self.progress),
          },
          defaults: { ease: 'none', duration: 1 },
        });

        items.forEach((item, index) => {
          tl.to(item, { scale: 0.9 });
          if (items[index + 1]) {
            tl.to(items[index + 1], { yPercent: 0 }, '<');
          }
        });

        // FIX: Removed the redundant ScrollTrigger.addEventListener('scroll', ...)
        // listener. setActive() is already called via onUpdate inside the scrollTrigger
        // config above, so this extra listener was running setActive() twice per scroll
        // tick and reading tl.scrollTrigger.progress (a layout read) on every scroll event.
      }

      function init() {
        const sectionFixList = document.querySelectorAll('.section-fix');
        if (!sectionFixList.length) return;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 992px)', () => {
          const ctx = gsap.context(() => {
            sectionFixList.forEach((sectionFix) => buildStack(sectionFix));
          });
          return () => ctx.revert();
        });

        mm.add('(max-width: 991px)', () => {
          const ctx = gsap.context(() => {
            sectionFixList.forEach((sectionFix) => {
              if (sectionFix.classList.contains('sec-6-home-11__layout')) return;
              buildStack(sectionFix);
            });
          });
          return () => ctx.revert();
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }

      window.addEventListener('load', () => ScrollTrigger.refresh());

    },
    animZoomIn: function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      gsap.registerPlugin(ScrollTrigger);

      // FIX: Batch all DOM reads (getBoundingClientRect via insertBefore) first,
      // then do all GSAP writes. Previously each iteration interleaved a DOM
      // structural write (insertBefore/appendChild) with GSAP setup reads.
      const wraps = [];
      document.querySelectorAll('.anim-zoomin').forEach(el => {
        const wrap = document.createElement('div');
        wrap.className = 'anim-zoomin-wrap';
        wrap.style.overflow = 'hidden';
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
        wraps.push({ wrap, el });
      });

      wraps.forEach(({ wrap, el }) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: 'top 100%',
            once: true,
          },
        });

        tl.from(el, {
          duration: 2,
          autoAlpha: 0,
          scale: 1.2,
          ease: 'power2.out',
          clearProps: 'all',
        });
      });

    },
    scaleImgFromTo: function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      gsap.registerPlugin(ScrollTrigger);

      // FIX: Read window.innerWidth once outside the loop instead of
      // inside each iteration (each access can force a style recalc).
      const vw = window.innerWidth;

      document.querySelectorAll('.scale-img-from-to').forEach(el => {
        if (!el) return;

        let value1 = parseFloat(el.getAttribute('data-value-1'));
        let value2 = parseFloat(el.getAttribute('data-value-2'));

        if (vw < 1200) {
          value1 = Math.max(0.95, value1);
        }

        gsap.fromTo(el,
          {
            scale: value1,
            ease: 'sine',
          },
          {
            scale: value2,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

    },
    fadeAnimActive: function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
      if (!document.querySelector('.at_fade_anim')) return;

      gsap.registerPlugin(ScrollTrigger);

      // FIX: Separate the read phase (getAttribute calls) from the write phase
      // (gsap.fromTo). Collect all config objects first, then animate.
      const items = gsap.utils.toArray('.at_fade_anim');
      const configs = items.map(item => {
        if (!item) return null;

        const offset = parseFloat(item.getAttribute('data-fade-offset')) || 20;
        const duration = parseFloat(item.getAttribute('data-duration')) || 0.75;
        const direction = item.getAttribute('data-fade-from') || 'bottom';
        const ease = item.getAttribute('data-ease') || 'power2.out';
        const start = item.getAttribute('data-start') || '85%';
        const delayParsed = parseFloat(item.getAttribute('data-delay'));
        const delay = isNaN(delayParsed) ? 0.15 : delayParsed;
        const onScrollAttr = item.getAttribute('data-on-scroll');
        const onScroll = onScrollAttr === null ? 1 : parseInt(onScrollAttr, 10);

        return { item, offset, duration, direction, ease, start, delay, onScroll };
      }).filter(Boolean);

      configs.forEach(({ item, offset, duration, direction, ease, start, delay, onScroll }) => {
        const fromVars = {
          opacity: 0,
          x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
          y: direction === 'top' ? -offset : direction === 'bottom' ? offset : 0,
        };

        const toVars = {
          opacity: 1,
          x: 0,
          y: 0,
          ease,
          duration,
          delay,
        };

        if (onScroll === 1) {
          toVars.scrollTrigger = {
            trigger: item,
            start: `top ${start}`,
            toggleActions: 'play none none none',
            once: true,
          };
        }

        gsap.fromTo(item, fromVars, toVars);
      });

    },
    elementMove: function () {
      $('.element-move').mousemove(function (e) {

        var wx = $(window).width();
        var wy = $(window).height();

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        var newx = x - wx / 2;
        var newy = y - wy / 2;

        $('.moving-wrapper .moving-img').each(function () {
          var speed = $(this).attr('data-speed');
          if ($(this).attr('data-revert')) speed *= -1;
          TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });

        });

      });
    },
    revealText: function () {
      if (typeof gsap === 'undefined' || typeof SplitText === 'undefined') return;
      if (!document.querySelector('.reveal-text')) return;

      gsap.registerPlugin(SplitText, ScrollTrigger);

      document.querySelectorAll('.reveal-text').forEach(el => {
        if (!el) return;

        el.split = new SplitText(el, {
          type: 'lines,words,chars',
          linesClass: 'split-line',
        });

        if (!el.split?.chars?.length) return;

        gsap.set(el.split.chars, {
          opacity: 0.4,
          x: -7,
        });

        el.anim = gsap.to(el.split.chars, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 60%',
            end: 'top 20%',
            scrub: 1,
          },
        });
      });

    },
    bannerChatTyping: function () {
      const items = [
        {
          el: document.querySelector('#chat-text-1'),
          cursor: document.querySelector('#chat-cursor-1'),
          text: 'Custom-built chatbots websites <br> apps, and social platforms',
          speed: 55,
          delay: 400,
        },
        {
          el: document.querySelector('#chat-text-2'),
          cursor: document.querySelector('#chat-cursor-2'),
          text: 'From customer support to sales <br> all in one AI chat.',
          speed: 55,
          delay: 300,
        },
      ];

      if (!items[0].el || !items[1].el) return;

      function typeText(item, onDone) {
        const tokens = item.text.split(/(<br\s*\/?>)/gi);
        const chars = [];

        tokens.forEach(token => {
          if (/^<br\s*\/?>$/i.test(token)) {
            chars.push({ type: 'br' });
          } else {
            token.split('').forEach(ch => chars.push({ type: 'char', value: ch }));
          }
        });

        let i = 0;
        item.cursor.classList.remove('done');

        setTimeout(function type() {
          if (i < chars.length) {
            const token = chars[i++];

            if (token.type === 'br') {
              item.el.innerHTML += '<br>';
            } else {
              const safe = document.createTextNode(token.value);
              item.el.appendChild(safe);
            }

            setTimeout(type, item.speed);
          } else {
            item.cursor.classList.add('done');
            if (onDone) onDone();
          }
        }, item.delay || 0);
      }

      function init() {
        items.forEach(item => {
          item.el.innerHTML = '';
          item.cursor.classList.add('done');
        });

        typeText(items[0], () => {
          typeText(items[1]);
        });
      }

      init();

    },
    animationOnHover: function () {
      let cards = document.querySelectorAll('.rtsonhover');
      cards.forEach((rtsOnHover) => {
        rtsOnHover.onmousemove = function (e) {
          let rect = rtsOnHover.getBoundingClientRect();
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;
          rtsOnHover.style.setProperty('--x', `${x}px`);
          rtsOnHover.style.setProperty('--y', `${y}px`);
        };
      });
    },
    videoActivation: function (e) {
      $(document).ready(function () {
        $('.popup-youtube, .popup-video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },
    liquidWaveActivation: function () {
      $(document).ready(function () {

        const banner = document.querySelector('.rts-banner-area-two');
        const canvas = document.getElementById('liquidCanvas');

        if (!banner || !canvas || typeof THREE === "undefined") return;

        let scene = new THREE.Scene();
        let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        let renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

        // FIX: Read banner dimensions once, store them, reuse in resize handler.
        // Avoids repeated offsetWidth/offsetHeight reads (layout reads) on each call.
        let bannerW = banner.offsetWidth;
        let bannerH = banner.offsetHeight;
        renderer.setSize(bannerW, bannerH);

        let texture = new THREE.TextureLoader().load('assets/images/banner/banner-bg-02.webp');

        let targetMouse = new THREE.Vector2(1, 1);
        let currentMouse = new THREE.Vector2(1, 1);

        let uniforms = {
          uTexture: { value: texture },
          uMouse: { value: currentMouse },
          uTime: { value: 0 }
        };

        let material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform sampler2D uTexture;
            uniform vec2 uMouse;
            uniform float uTime;
            varying vec2 vUv;
    
            void main() {
              vec2 uv = vUv;
              float dist = distance(uv, uMouse);
              float ripple = sin(20.0 * dist - uTime) * 0.01;
              ripple *= smoothstep(0.6, 0.0, dist);
              uv += normalize(uv - uMouse) * ripple;
              gl_FragColor = texture2D(uTexture, uv);
            }
          `
        });

        let geometry = new THREE.PlaneGeometry(2, 2);
        let mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function animate() {
          requestAnimationFrame(animate);
          currentMouse.lerp(targetMouse, 0.08);
          uniforms.uMouse.value.copy(currentMouse);
          uniforms.uTime.value += 0.025;
          renderer.render(scene, camera);
        }

        animate();

        // FIX: Cache the banner rect; update only on resize (not every mousemove).
        // Previously getBoundingClientRect() was called on every mousemove — a layout read
        // inside an event that also writes uniforms, creating a read-write cycle per frame.
        let bannerRect = banner.getBoundingClientRect();

        banner.addEventListener('mousemove', function (e) {
          let x = (e.clientX - bannerRect.left) / bannerRect.width;
          let y = 1.0 - (e.clientY - bannerRect.top) / bannerRect.height;
          targetMouse.set(x, y);
        });

        window.addEventListener('resize', function () {
          bannerW = banner.offsetWidth;
          bannerH = banner.offsetHeight;
          renderer.setSize(bannerW, bannerH);
          // Refresh cached rect after resize so mousemove coords stay accurate
          bannerRect = banner.getBoundingClientRect();
        });

      });
    },
    imageSlideGsap: function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      gsap.registerPlugin(ScrollTrigger);

      if (document.querySelector('.images')) {
        gsap.to('.images', {
          x: 330,
          ease: 'none',
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (document.querySelector('.images-2')) {
        gsap.to('.images-2', {
          x: -330,
          ease: 'none',
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

    },
    preloader: function () {
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
      });
    },
    searchOption: function () {
      $(document).on('click', '#search', function () {
        $(".search-input-area").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '#close', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },
    counterUp: function (e) {
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      $('h3').addClass('animated fadeIn');
    },
    // BACK TO TOP BUTTON JS
    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();

        // FIX: Batch all style writes together before triggering any reflow.
        // Previously strokeDasharray was set, then getBoundingClientRect() was called
        // (a reflow), then more styles were set — three separate layout cycles.
        // Now: set all styles → single forced reflow → set transition.
        progressPath.style.transition = 'none';
        progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        // Single intentional reflow to flush the above styles before enabling transition
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';
        progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        // FIX: Cache scroll/height values and use requestAnimationFrame to throttle
        // the updateProgress scroll handler. Previously it read $(window).scrollTop()
        // and $(document).height() on every scroll event (layout reads each time).
        var cachedHeight = $(document).height() - $(window).height();
        var rafPending = false;

        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var progress = pathLength - (scroll * pathLength / cachedHeight);
          progressPath.style.strokeDashoffset = progress;
          rafPending = false;
        };

        updateProgress();

        // Recalculate height on resize (document height can change)
        $(window).on('resize.backToTop', function () {
          cachedHeight = $(document).height() - $(window).height();
        });

        $(window).scroll(function () {
          if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(updateProgress);
          }
        });

        var offset = 50;
        var duration = 550;

        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
            jQuery('.rts-switcher').addClass('btt__visible');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
            jQuery('.rts-switcher').removeClass('btt__visible');
          }
        });

        jQuery('.progress-wrap').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });

      });

    },
    stickyHeader: function (e) {
      // FIX: Use requestAnimationFrame to throttle the scroll handler.
      // Previously scrollTop() (a layout read) was called on every scroll event.
      var stickyRaf = false;
      $(window).scroll(function () {
        if (!stickyRaf) {
          stickyRaf = true;
          requestAnimationFrame(function () {
            if ($(window).scrollTop() > 150) {
              $('.header--sticky').addClass('sticky');
            } else {
              $('.header--sticky').removeClass('sticky');
            }
            stickyRaf = false;
          });
        }
      });
    },
    // sideMenu: function () {
    //   $('#mobile-menu-active2').metisMenu();

    //   $(document).on('click', '.menu-btn-toggle2', function () {
    //     $("#side-bar2").addClass("show");
    //     $("#anywhere-home").addClass("bgshow");
    //   });
    //   $(document).on('click', '.close-icon-menu', function () {
    //     $("#side-bar2").removeClass("show");
    //     $("#anywhere-home").removeClass("bgshow");
    //   });
    //   $(document).on('click', '#anywhere-home', function () {
    //     $("#side-bar2").removeClass("show");
    //     $("#anywhere-home").removeClass("bgshow");
    //   });
    //   $(document).on('click', '.onepage .mainmenu li a', function () {
    //     $("#side-bar2").removeClass("show");
    //     $("#anywhere-home").removeClass("bgshow");
    //   });
    // },
    smoothScroll: function (e) {
      $(document).on('click', '.onepage a[href^="#"]', function (event) {
        event.preventDefault();

        const target = $.attr(this, 'href');

        if (target.length > 1 && $(target).length) {
          $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 300);
        }
      });
    },
    metismenu: function () {
      $('#mobile-menu-active').metisMenu();
    },

    rtlToggle: function () {

      $(document).ready(function () {
        const savedDir = localStorage.getItem("pageDirection") || "ltr";
        $("body").attr("dir", savedDir);

        if (savedDir === "rtl") {
          $(".rtl").removeClass("show");
          $(".ltr").addClass("show");
        } else {
          $(".rtl").addClass("show");
          $(".ltr").removeClass("show");
        }

        $(".rtl-ltr-switcher-btn").on("click", function () {
          const currentDir = $("body").attr("dir");
          const newDir = currentDir === "rtl" ? "ltr" : "rtl";

          $("body").attr("dir", newDir);

          $(".rtl").toggleClass("show");
          $(".ltr").toggleClass("show");

          localStorage.setItem("pageDirection", newDir);
        });
      });

    },

    regionAreaActive: function () {
      const regionItems = document.querySelectorAll('.region-area ul li');
      const destLists = document.querySelectorAll('.destlist');

      regionItems.forEach(item => {
        item.addEventListener('click', () => {
          const region = item.getAttribute('data-region');

          regionItems.forEach(li => li.classList.remove('active'));
          item.classList.add('active');

          destLists.forEach(list => {
            if (list.getAttribute('data-region') === region) {
              list.classList.add('active');
            } else {
              list.classList.remove('active');
            }
          });
        });
      });
    },
    itineraryAccordion: function () {
      const items = document.querySelectorAll('.itinerary-item');
      const expandAllToggle = document.getElementById('expandAll');
      const expandAllToggle2 = document.getElementById('expandAll2');

      items.forEach(item => {
        const title = item.querySelector('.itinerary-title');
        if (title) {
          title.addEventListener('click', () => {
            item.classList.toggle('active');
          });
        }
      });

      const toggleAll = (checked) => {
        items.forEach(item => {
          if (checked) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      };

      if (expandAllToggle) {
        expandAllToggle.addEventListener('change', e => {
          toggleAll(e.target.checked);
        });
      }

      if (expandAllToggle2) {
        expandAllToggle2.addEventListener('change', e => {
          toggleAll(e.target.checked);
        });
      }
    },

    blurBottom: function () {
      const blurEl = document.querySelector('.rts-blur-bottom');
      const footer = document.querySelector('.rts-footer-area-one');

      // FIX: Added guard — if either element is missing, skip silently.
      if (!blurEl || !footer) return;

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            blurEl.style.opacity = '0';
          } else {
            blurEl.style.opacity = '1';
          }
        });
      }, { threshold: 0.05 });

      observer.observe(footer);
    },
    mobileMenu: function (e) {
      var rtsMenuWrap = $('.at-mobile-menu-active .mainmenu').clone();
      var rtsSideMenu = $('.at-offcanvas-menu nav');
      rtsSideMenu.append(rtsMenuWrap);
  
      rtsSideMenu.find('.submenu').addClass('at-submenu');
      rtsSideMenu.find('.has-droupdown').addClass('has-dropdown');
  
      if ($(rtsSideMenu).find('.at-submenu').length != 0) {
          $(rtsSideMenu).find('.at-submenu').parent().append('<button class="at-menu-close"><i class="fa-solid fa-plus"></i></button>');
      }
  
      var sideMenuList = $(
          '.at-offcanvas-menu nav > ul > li button.at-menu-close, ' +
          '.at-offcanvas-menu nav > ul li.has-dropdown > a, ' +
          '.at-offcanvas-menu nav > ul li.has-dropdown > ul > li.menu-item-has-children > a'
      );
  
      $(sideMenuList).on('click', function (e) {
          e.preventDefault();
          var $parent = $(this).parent();
          var $siblings = $parent.siblings('.has-dropdown.active');

          if (!$parent.hasClass('active')) {
              $siblings.removeClass('active');
              $siblings.children('.at-submenu').slideUp();

              $parent.addClass('active');
              $(this).siblings('.at-submenu').slideDown();
          } else {
              $(this).siblings('.at-submenu').slideUp();
              $parent.removeClass('active');
          }
      });
  
      const $main_wrap = $('.at-offcanvas-2-area');
      const $openBtn = $('.hamburger-open-btn');
      const $closeBtn = $('.hamburger-close-btn');
      const mobileMenuBreakpoint = 992;

      const closeMobileMenu = function () {
          $main_wrap.removeClass('menu-open');
          $main_wrap.addClass('menu-open-temp');
          setTimeout(() => {
              $main_wrap.removeClass('menu-open-temp');
          }, 1000);
          $("#anywhere-home").removeClass("bgshow");
          $openBtn.removeClass('active');
          $closeBtn.removeClass('active');
      };
  
      $openBtn.on('click', function () {
          if (window.innerWidth >= mobileMenuBreakpoint) {
              return;
          }
          $main_wrap.addClass('menu-open');
          $("#anywhere-home").addClass("bgshow");
          $openBtn.addClass('active');
          $closeBtn.addClass('active');
      });
  
      $closeBtn.on('click', function () {
          closeMobileMenu();
      });

      $(document).on('click', '#anywhere-home', function () {
          closeMobileMenu();
      });

      $(window).on('resize.mobileMenu', function () {
          if (window.innerWidth >= mobileMenuBreakpoint && $main_wrap.hasClass('menu-open')) {
              closeMobileMenu();
          }
      });
  },

  }

  rtsJs.m();
  $(document).ready(function () {
    $('#ce-toggle').change(function () {
      const isChecked = $(this).is(':checked');

      if (isChecked) {
        $('.plan-toggle-wrap').removeClass('active');
        $('#monthly').show();
        $('#yearly').hide();
      } else {
        $('.plan-toggle-wrap').addClass('active');
        $('#monthly').hide();
        $('#yearly').show();
      }
    });

    $('#ce-toggle').trigger('change');
  });

  /* magnificPopup img view */
  $('.gallery-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-bg-src]').forEach(function (el) {
      const bg = el.getAttribute('data-bg-src');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.backgroundRepeat = 'no-repeat';
      }
    });
  });

})(jQuery, window)
