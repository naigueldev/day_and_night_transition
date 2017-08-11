/* jquery.js */
/* jquery.velocity.js */

// Animate an SVG element with a mix of standard CSS properties and SVG-specific properties.

// $('#rect').velocity({opacity:0});
// $('#rect').velocity({opacity:1}, 2000,{ x: "+=45", y: "40%" }).velocity({ x: "+=45", y: "30%" },{
//     duration: 3000
//   });
$("#rect")
.delay(500)
.velocity({ x: "+=50", y: "25%" },{
    duration: 3000
  });

// .velocity({ fillGreen: 255, strokeWidth: 2 })
// .velocity({ height: 50, width: 50 })
// .velocity({ rotateZ: 90, scaleX: 0.5 })
// .velocity("reverse", { delay: 250 });