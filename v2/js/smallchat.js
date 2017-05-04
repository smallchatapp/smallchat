
/* ==========================================================================
   Custom Velocity Animations
   ========================================================================== */

$.Velocity
  .RegisterEffect('smallchat.fadeIn', {
    defaultDuration: 500,
    calls: [[ { opacity: [1, 0] }, 1, { easing: [.5, 0, .15, .8] } ]]
  })
  .RegisterEffect('smallchat.fadeOut', {
    defaultDuration: 300,
    calls: [[ { opacity: 0 }, 1, { easing: [.25, .1, .25, 1] } ]]
  })
  .RegisterEffect('smallchat.slideUpIn', {
    defaultDuration: 300,
    calls: [[ { opacity: [1, 0], translateY: [0, 30] }, 1, { easing: [.25, .1, .25, 1] } ]]
  })
  .RegisterEffect('smallchat.slideUpOut', {
    defaultDuration: 300,
    reset: { translateY: 0 },
    calls: [[ { opacity: 0, translateY: -30 }, 1, { easing: [.25, .1, .25, 1] } ]]
  })
  .RegisterEffect('smallchat.slideDownIn', {
    defaultDuration: 300,
    calls: [[ { opacity: [1, 0], translateY: [0, -30] }, 1, { easing: [.25, .1, .25, 1] } ]]
  })
  .RegisterEffect('smallchat.slideDownOut', {
    defaultDuration: 300,
    calls: [[ { opacity: 0, translateY: 30 }, 1, { easing: [.25, .1, .25, 1] } ]]
  })
  .RegisterEffect('smallchat.slideRightIn', {
    defaultDuration: 300,
    calls: [[ { opacity: [1, 0], translateX: [0, -10], translateZ: 0 }, 1, { easing: [.5, 0, .15, .8] } ]]
  })
  .RegisterEffect('smallchat.slideLeftOut', {
    defaultDuration: 300,
    reset: { translateX: 0 },
    calls: [[ { opacity: 0, translateX: -10, translateZ: 0 }, 1, { easing: [.5, 0, .15, .8] } ]]
  })
  .RegisterEffect('smallchat.slideRightOut', {
    defaultDuration: 300,
    calls: [[ { opacity: 0, translateX: [0, -10], translateZ: 0 }, 1, { easing: [.5, 0, .15, .8] } ]]
  })
  .RegisterEffect('smallchat.slideLeftIn', {
    defaultDuration: 300,
    reset: { translateX: 0 },
    calls: [[ { opacity: [1, 0], translateX: -10, translateZ: 0 }, 1, { easing: [.5, 0, .15, .8] } ]]
  })
  .RegisterEffect('smallchat.shake', {
    defaultDuration: 60,
    calls: [
			[{ translateX: 0 }],
			[{ translateX: 8 }],
			[{ translateX: -8 }],
			[{ translateX: 8 }],
			[{ translateX: -8 }],
			[{ translateX: 0 }],
		]
  });

/* ==========================================================================
   Chat Window
   ========================================================================== */

   (function () {
     if (window.innerWidth > 480) {
       setTimeout(function () {
         $('#chat-one').velocity('smallchat.slideRightIn', { opacity: 1 }, { stagger: 30 });
       }, 500)
       setTimeout(function () {
         $('#chat-two').velocity('smallchat.slideLeftIn', { opacity: 1 }, { stagger: 30 });
       }, 800)
       setTimeout(function () {
         $('#chat-three').velocity('smallchat.slideRightIn', { opacity: 1 }, { stagger: 30 });
       }, 1200)
     }
   })()


   /* ==========================================================================
      Slack
      ========================================================================== */
