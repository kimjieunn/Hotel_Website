$(document).ready(function () {
    // 로그인 --------------------------------------------------------------
    $("#btn-login").click(function () {
      var userid = prompt("아이디 입력", "");
      if (userid.length == 0) {
        alert("아이디 입력!!");
        return;
      }
      var userpass = prompt("비밀번호 입력", "");
      if (userpass.length == 0) {
        alert("비밀번호 입력!!");
        return;
      }
      if (userid == "abcd" && userpass == "1234") {
        alert("로그인 성공!!");
        // id가 profile_img 인 element의 src 속성의 값을 img/cat.png 설정
        $("#profile_img").attr("src", "img/cat.png");
        $("#header_nav_confirm_off").css("display", "none");
        $("#header_nav_confirm_on").css("display", "block");
      } else {
        alert("로그인 실패\n아이디 또는 비밀번호가 일치하지 않습니다");
      }
    });
    // 로그아웃 --------------------------------------------------------------
    $("#btn-logout").click(function () {
      // id가 profile_img 인 element의 src 속성의 값을 img/noimg.png 설정
      $("#profile_img").attr("src", "img/noimg.png");
      $("#header_nav_confirm_on").css("display", "none");
      $("#header_nav_confirm_off").css("display", "block");
    });
    // 관리자 --------------------------------------------------------------
    $("#btn-admin").click(function () {
      //surveymake.html의 창의 아이디를 survey로 하고 가로 420, 세로 200인 창을 만든다.
      window.open("surveymake.html", "survey", "width=420,height=300,top=300,left=100");
    });

    // 전국매장 --------------------------------------------------------------

    // 지역매장 --------------------------------------------------------------

    // 프로그래밍 메뉴 3초 간격으로 이동 -------------------------------------
    setInterval(function () {
      $(".program_menu_li").first().appendTo(".program_menu_ul");
    }, 1000);
  });