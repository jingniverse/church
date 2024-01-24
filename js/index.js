$(document).ready(function(){
    let da = false
    $(".menu").click(function(){
        if(da == false){
            $("header").addClass("full")
            da=true
        }else{
            $("header").removeClass("full")
            da=false
        }
        

    })
    // $(".menu").click(function(){
    //     $("header").removeClass("full")
    // })

    $(".gnb>li").click(function(){
        $(".gnb>li").removeClass('on')
        $(this).addClass("on")
    })
    $(".lnb>li").click(function(){
        $(".lnb>li").removeClass('on')
        $(this).addClass("on")
    })
    $(".choice>label").click(function(){
        $(".choice>label").removeClass('on')
        $(this).addClass("on")
    })
   
    // $('.gnb').on('focus', function(){
    //     $('header').removeClass('active');
    // });
    // $('.gnb').on('click', function(){
    //     $('header').addClass('active');

    // });
    // $('.gnb').on('focusout', function(){
    //     $('header').addClass('active');

    // });
  
    $(document).ready(function() {
        // 헤더에 탭 키로 이동했을 때
        $('.gnb>li').on('keyup', function(e) {
          if (e.which === 9) { // Tab 키를 눌렀을 때
            $('header').addClass('active'); // 원하는 높이로 변경
          }else if(e.which === 9 && e.shiftKey){
            $('header').addClass('active'); // 원하는 높이로 변경
          }

        });
        $('.gnb>li:last-of-type>ul>li:last-of-type').on('keydown', function(e) {
            if (e.which === 9) { // Tab 키를 눌렀을 때
              $('header').removeClass('active')
              $('header').slideup(200)
              // 원하는 높이로 변경
                }
          });
          
        // 헤더에서 포커스를 잃었을 때
        // $('.gnb>li').on('blur', function() {
        //   $('header').addClass('active'); // 초기 높이로 복원
        // });
  
        // 헤더에서 Shift + Tab 키로 나갔을 때
        $('.logo').on('keyup', function(e) {
          if (e.which === 9 && e.shiftKey) { // Shift + Tab 키를 눌렀을 때
            $('header').removeClass('active'); // 초기 높이로 복원
          }
        });
      });
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
            if(sct>3700){$('.p_1').addClass('left_to_right')}
            if(sct>4100){$('.p_2').addClass('right_to_left')}
            
        console.log(sct);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
    })
    }else if(1024 <= ww <1440) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();

            if(sct>150){$('.int_box').addClass('left_to_right')}
            if(sct>600){$('.new_family').addClass('right_to_left')}
            if(sct>1100){$('.w_content').addClass('u_to_d')}
            if(sct>4200){$('.p_1').addClass('d_to_u')}
            if(sct>4200){$('.p_2').addClass('u_to_d')}
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







let count = 0
$(".btn_next").click(function(){
    count++
    if(count>7){count=0}
    // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
    // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
    $(".w_list").css("transform",`translateX(${10*-count}%)`)
   
})
$(".btn_prev").click(function(){
    count--
    if(count<0){count=7}
    $(".w_list").css("transform",`translateX(${10*-count}%)`)

})
  
    

    
    $(".category>span").click(function(){
        $(".category>span").removeClass('on')
        $(this).addClass("on")
    })
    
    // $(".choice>label:fitst-of-type").click(function(){
    //     $(".camo").text('상담내용')
    // })
    // $(".choice>label:nth-of-type(2)").click(function(){
    //     $(".camo").text('심방내용')

    // })
    // $(".choice>label:last-of-type").click(function(){
    //     $(".camo").text('문의내용')

    // })
    $("#file_send").on('change',function(){
        var fileName = $("#file_send").val();
        $(".f_s").val(fileName);
      });



})