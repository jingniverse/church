$(document).ready(function(){
    $(".menu>span:first-of-type").click(function(){
        $("header").addClass("active")
    })
    $(".menu>span:last-of-type").click(function(){
        $("header").removeClass("active")
    })

    $(".gnb>li").click(function(){
        $(".gnb>li").removeClass('on')
        $(this).addClass("on")
    })

    // $(window).scroll(function(){
    //     let sct = $(document).scrollTop()
    //     console.log(sct)
    // })
 
    // 일반pc
        $(window).scroll(function () {
             var sct = $(window).scrollTop();
             if(sct>20){
                     $('header').addClass('on')
                }
            if(sct<10){
                    $('header').removeClass('on')
                }      
        // console.log(height);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    })

    // // 탭버전
    // if(1023< $(window).width() < 1440){ 
    //     $(window).scroll(function () {
    //         var sct = $(window).scrollTop();
    //         if(sct>920){
    //                 $('header').addClass('on')
    //             }
    //         if(sct<920){
    //                $('header').removeClass('on')          
    //             }
    //     // console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    // })}

    if(767<$(window).width()<1024){
        $('.gnb>li>a').click(function(e){
            e.preventDefault()
        }
        )}
        // $(window).scroll(function () {
        //     var sct = $(window).scrollTop();
        //     if(sct>700){
        //             $('header').addClass('on')
        //         }
        //     if(sct<700){
        //             $('header').removeClass('on')
        //         }
        // console.log(sct)	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    // )}

    // if(480< $(window).width() < 768){ 
    //     $(window).scroll(function () {
    //         var sct = $(window).scrollTop();
    //         if(sct>590){
    //                 $('header').addClass('on')
    //             }
    //         if(sct<590){
    //                 $('header').removeClass('on')
    //             }
                // $('.gnb>li>a').click(function(e){
                //     e.preventDefault()
                // })
    //     // console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    // }
    // )}












    // let train = $(".banner_imgList")
    // let trainLi = train.children()
    // let trainLength = trainLi.length
    
    // let des =  $(".banner_desList")
    // let desLi = des.children()

    // let count = 0


    
    // let stopSlide = setInterval(function(){
    //     count++
    //     if(count>(trainLength - 1)){count=0}
    //     trainLi.removeClass("on")
    //     trainLi.eq(count).addClass("on")

    //     desLi.removeClass("on")
    //     desLi.eq(count).addClass("on")
    // }, 4200)

    // trainLi.click(function(){
    //     clearInterval(stopSlide)
    //     let idx = $(this)
    //     trainLi.removeClass("on")
    //     trainLi.eq(this).addClass("on")
    //     desLi.removeClass("on")
    //     desLi.eq(idx).addClass("on")
    //     // clearInterval(stopSlide)
    // })
    
    // $(".category>span").click(function(){
    //     $(".category>span").removeClass('on')
    //     $(this).addClass("on")
    // })
    



})