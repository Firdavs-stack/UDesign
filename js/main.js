jQuery(document).ready(function($){

    // Sticky navbar
    let header = $('.header');
    let scrollPos = $(window).scrollTop();


    // $(window).on('scroll load resize', function(){
    //     let headerH = header.innerHeight();
    //     scrollPos = $(this).scrollTop();
    //
    //     if(scrollPos > 30){
    //         header.addClass('fixed');
    //     }else{
    //         header.removeClass('fixed');
    //     }
    // });


    const closeBtn = $('.burger');
    closeBtn.on('click', function(){
      if(closeBtn.hasClass('burger__open')){
        header.css('opacity','1');
        header.toggleClass('active');
        header.animate({'opacity':'0'});
      } else {
        header.css('opacity','0');
        header.toggleClass('active');
        header.animate({'opacity':'1'});
      }
    })






       // Smooth scroll
       $("[data-scroll]").on('click', function(event){
        event.preventDefault();

        let elemID = $(this).data('scroll');
        let elemOffSet = $(elemID).offset().top;

        $('html, body').animate({
            scrollTop: elemOffSet - 68
        });

        $('button[data-scroll]').click(function(){
          $('.burger').click();
        })

    });


    // *************** Burger menu ***************
    const menuBtn = document.querySelector('.burger');
    let menuOpen = false;
    const headerLink = $('.header__link');
    menuBtn.addEventListener('click', () => {
        if(!menuOpen){
            menuBtn.classList.add('burger__open');
            menuOpen = true;
        }else{
            menuBtn.classList.remove('burger__open');
            menuOpen = false;
        }
    });

    headerLink.on('click', function(){
        header.removeClass('active');
        menuBtn.classList.remove('burger__open');
        menuOpen = false;
    });

    $('.single-item').slick({
      autoplay: true,
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'linear'
    });


          $("#slideshow > div:gt(0)").hide();
          setInterval(function() {
              $('#slideshow > div:first')
                  .fadeOut(0)
                  .next()
                  .fadeIn(2000)
                  .end()
                  .appendTo('#slideshow');
          }, 5000);

        $('#why .why__item').click(function(){
          $(this).siblings().children('.why__group').removeClass('hidden');
          $(this).siblings().children('.why__text').addClass('hidden');
          $(this).siblings().removeClass('active-text');
          $(this).siblings().css({'background-color':'rgba(37, 37, 37, 0.5)'});
          $(this).children('.why__group').toggleClass('hidden');
          $(this).children('.why__text').toggleClass('hidden');
          $(this).toggleClass('active-text');
        })

        $(document).mouseup(function (e){
          var div = $("#why .why__item");
          if (!div.is(e.target)
              && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.children('.why__group').removeClass('hidden');
            div.children('.why__text').addClass('hidden');
            div.siblings().removeClass('active-text');

          }
        });

})
