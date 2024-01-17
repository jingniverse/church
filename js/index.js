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

//     let ww=$(window).width()
//     function (){ 
//     if(1441<ww){ 
//         $(window).scroll(function () {
//             var sct = $(window).scrollTop();
            
//             if(sct>20){$('header').addClass('on')}
//             if(sct<10){$('header').removeClass('on')}

//             if(sct>320){$('.int_box').addClass('left_to_right')}
//             if(sct>500){$('.new_family').addClass('right_to_left')}
//             if(sct>1500){$('.w_content').addClass('u_to_d')}
            
//         console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
//     })}else if(1024<ww<1440){ 
//         $(window).scroll(function () {
//             var sct = $(window).scrollTop();
//             if(sct>150){$('.int_box').addClass('left_to_right')}
//             if(sct>700){$('.new_family').addClass('right_to_left')}
//             if(sct>1300){$('.w_content').addClass('u_to_d')}

//         console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
//     })}else if(779<ww<1024){
//         $(window).scroll(function () {
//             var sct = $(window).scrollTop();
//             if(sct>50){$('.int_box').addClass('left_to_right')}
//             if(sct>500){$('.new_family').addClass('right_to_left')}
//             if(sct>1000){$('.w_content').addClass('u_to_d')}
            
//             console.log(sct)
//         }
//         )
        
//         $('.gnb>li>a').click(function(e){
//             e.preventDefault()
//         }
//     )}else if(479 < ww < 780){ 
//         $(window).scroll(function () {
//             var sct = $(window).scrollTop();
//             if(sct>450){$('.int_box').addClass('left_to_right')}
//             if(sct>350){$('.new_family').addClass('right_to_left')}
//             if(sct>950){$('.w_content').addClass('u_to_d')}
//                 $('.gnb>li>a').click(function(e){
//                     e.preventDefault()
//                 })
//         console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
//     }
//     )}else if(ww < 480){ 
//         $(window).scroll(function () {
//             var sct = $(window).scrollTop();
//             if(sct>120){$('.int_box').addClass('left_to_right')}
//             if(sct>850){$('.new_family').addClass('right_to_left')}
//             if(sct>950){$('.w_content').addClass('u_to_d')}
//                 $('.gnb>li>a').click(function(e){
//                     e.preventDefault()
//                 })
//         console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
//     }
//     )}
// }
$(window).scroll(function () {
    var sct = $(window).scrollTop();
    
    if(sct>20){$('header').addClass('on')}
    if(sct<10){$('header').removeClass('on')}
})

$('.gnb>li>a').click(function(e){
    e.preventDefault()
})

function 함수이름(){
    var ww = $(window).width();
    if (ww >= 1440) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if(sct>320){$('.int_box').addClass('left_to_right')}
            if(sct>600){$('.new_family').addClass('right_to_left')}
            if(sct>1400){$('.w_content').addClass('u_to_d')}
            
        console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    })
    }else if(1024 <= ww <1440) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if(sct>150){$('.int_box').addClass('left_to_right')}
            if(sct>600){$('.new_family').addClass('right_to_left')}
            if(sct>1100){$('.w_content').addClass('u_to_d')}

        console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    })
    }else if(768 <= ww <1024) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if(sct>50){$('.int_box').addClass('left_to_right')}
            if(sct>550){$('.new_family').addClass('right_to_left')}
            if(sct>1000){$('.w_content').addClass('u_to_d')}
            
        console.log(sct);
        })
    }else if(480 <= ww <768) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if(sct>450){$('.int_box').addClass('left_to_right')}
            if(sct>350){$('.new_family').addClass('right_to_left')}
            if(sct>950){$('.w_content').addClass('u_to_d')}
               
        console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    })

 
    }else if(480 > ww ) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if(sct>120){$('.int_box').addClass('left_to_right')}
            if(sct>850){$('.new_family').addClass('right_to_left')}
            if(sct>950){$('.w_content').addClass('u_to_d')}
              
        console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    
            
    })
 
    }

}
함수이름()







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