
// navbarId

$(document).ready(function(){
    // $(window).on('scroll',function(){
    //     var scroll = $(window).scrollTop();
    //     if(scroll>=50){
    //         $(".sticky").addClass("stickyadd");
    //     }
    //     else{
    //         $(".sticky").removeClass("stickyadd");
    //     }
    // });

    var typed = new Typed(".element", {
        strings: ["Focus", "Focus|Lead", "Focus|Lead|Execute"],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    var typed = new Typed(".intro", {
        strings: ["PD Ryan Services (‘’PD Ryan’’) is a corporate service outfit that enhances the actualization of business goals and objectives through the provision of tailored advisory services to organizations. "],
        smartBackspace: true,
        typeSpeed:50,
        backSpeed:50,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });


    // services

    $('.card')
  .css('opacity', 0) // immediately hide element
  .waypoint(function(direction) {
    if (direction === 'down') {
      $(this.element).animate({ opacity: 1 })
    }
    else {
      $(this.element).animate({ opacity: 0 })
    }
  }, {
    offset: 'bottom-in-view'
  })

    var waypoint = new Waypoint({
        element: document.getElementById('intro'),
        handler: function(direction) {
          notify('25px from top')
        },
        offset: 85
      })

    var waypoint = new Waypoint({
        element: document.getElementById('.intro'),
        handler: function(direction) {
            var p = document.querySelectorAll('.intro');
            "PD Ryan Services (‘’PD Ryan’’) is a corporate service outfit that enhances the actualization of business goals and objectives through the provision of tailored advisory services to organizations. "
     
        },
         offset: '90%'
      });


    //   var waypoint = new Waypoint({
    //     element: document.getElementById('ser-id'),
    //     handler: function(direction) {
    //         var p = document.querySelectorAll('.progression-bar');
    //         p[0].setAttribute("style", "width:100%;transition:1s all");
    //         p[1].setAttribute("style",  " width:65%%;transition:1.2s all");
    //         p[2].setAttribute("style", "width:85%%;transition:3s all" );
    //         p[3].setAttribute("style",  " width:75%%;transition:2.5s all");
    //         p[4].setAttribute("style", "width:95%%;transition:1.9s all" );
     
    //     },
    //      offset: '90%'
    //   });
      

});

function readMoreT(){
    var dots = document.getElementById("threedotsT");
    var moreText = document.getElementById("more_contT");
    var btnText = document.getElementById("readmoreT");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}


function readMore(){
    var dots = document.getElementById("threedots");
    var moreText = document.getElementById("more_cont");
    var btnText = document.getElementById("readmore");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}
function readMore1(){
    var dots = document.getElementById("threedots1");
    var moreText = document.getElementById("more_cont1");
    var btnText = document.getElementById("readmore1");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}
function readMore2(){
    var dots = document.getElementById("threedots2");
    var moreText = document.getElementById("more_cont2");
    var btnText = document.getElementById("readmore2");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}
function readMore3(){
    var dots = document.getElementById("threedots3");
    var moreText = document.getElementById("more_cont3");
    var btnText = document.getElementById("readmore3");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}
function readMore6(){
    var dots = document.getElementById("threedots6");
    var moreText = document.getElementById("more_cont6");
    var btnText = document.getElementById("readmore6");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}
function readMore7(){
    var dots = document.getElementById("threedots7");
    var moreText = document.getElementById("more_cont7");
    var btnText = document.getElementById("readmore7");
    if(dots.style.display === "none"){
        dots.style.display ="block";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "block";
    }
}