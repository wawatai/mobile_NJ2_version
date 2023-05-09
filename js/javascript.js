//ad
$(function(){
    $(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})

    $('.multiple-items').slick({
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToShow: 1
    })
})

//home
$(function(){
    $(".homeCenter .topBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".homeCenter .downBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".homeCenter .smallLove_ic").on("click",function(){
        $(this).closest(".loveBox")
        .toggleClass("active");
    })
})

//news
$(function(){
    $(".jumpWindow.news li.smallTitle,.jumpWindow.rules li.smallTitle,.jumpWindow.agentRules li.smallTitle").on("click",function(){
        $(this).closest(".infoBox")
        .toggleClass("active");
    })
})

//註冊頁判斷打字按鈕
$(function(){
    $($(".registerWindow .code").prev("input")).on("input",function(){
        if($(".registerWindow .code").prev("input").val() == "")
        {
            $(".registerWindow .code")
            .attr("disabled",true);
        }
        else
        {
            $(".registerWindow .code")
            .attr("disabled",false);
        }
    })
})

//record
$(function(){
    $(".searchContent .date button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".bettingWrap .list .noData")
        .addClass("display")
        .siblings().removeClass("display");

        $(".searchContent .check").on("click",function(){
            $(".dealBox,.recordBox,.partnerBox")
            .addClass("display");

            $(".noData")
            .removeClass("display");
        })
    })
})

//memberInfo
$(function(){
    $(".memberInfo .checkBtn").on("click",function(){
        $(this)
        .remove();

        $(".memberInfo form .edit_ic")
        .addClass("display");

        $($(".memberInfo form .inputBox").has(".edit_ic"))
        .find("input").attr("disabled",true);

        $(".memberInfo form .edit_ic:not(.changePhone)").on("click",function(){
            $(this)
            .removeClass("display")
            .siblings("i").addClass("display");

            $(this).siblings("input")
            .attr("disabled",false);
        })

        $(".memberInfo form .check_ic").on("click",function(){
            $(this).closest(".inputBox")
            .find("i").removeClass("display");

            $(this)
            .siblings("input").attr("disabled",true);

            $(this)
            .siblings(".edit_ic").addClass("display");
        })

        $(".memberInfo form .nocheck_ic").on("click",function(){
            $(this)
            .siblings("input").val("");
        })
    })
})

//wallet
$(function(){
    $(".walletList .openBtn").on("click",function(){
        $(this)
        .removeClass("display");

        $(".forPlatform")
        .addClass("active");
    })

    $(".walletList .closeBtn").on("click",function(){
        $(".forPlatform")
        .removeClass("active");

        $(".openBtn")
        .addClass("display");
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})

//slotPage
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(".slotWrap .smallLove_ic").on("click",function(){
        $(this).closest(".loveBox")
        .toggleClass("active");
    })
})

//event
$(function(){
    $(".eventWrap .eventType li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//mail
$(function(){
    $("header .editBtn").on("click",function(){
        $(this)
        .removeClass("display")

        $(".detailBtn")
        .addClass("display");

        $(".editBox")
        .addClass("display");

        $(".mailBox")
        .addClass("editing");
    })

    $("header .detailBtn").on("click",function(){
        $(this)
        .removeClass("display");
        
        $(".editBtn")
        .addClass("display");

        $(".editBox")
        .removeClass("display");

        $(".mailBox")
        .removeClass("editing");
    })

    $(".mailWrap.normal .subClass li").on("click",function(){
        $(".mailWrap.normal .mailBox")
        .toggleClass("display");

        $(".mailBox")
        .removeClass("editing");

        $(".editBox,.detailBtn")
        .removeClass("display");

        $(".editBtn")
        .addClass("display");

        $(this)
        .removeClass("display")
        .siblings().addClass("display");

        $(".mailWrap.normal .lineTitle")
        .toggleClass("display");
    })

    $(".mailWrap.post .subClass li").on("click",function(){
        if($(this).hasClass("deposit"))
        {
            $(".mailWrap .mailBox.dep")
            .addClass("display")
            .siblings().removeClass("display");

            $(".mailWrap .lineTitle.dep")
            .addClass("display");
        }else if($(this).hasClass("normal"))
        {
            $(".mailWrap .mailBox.nor")
            .addClass("display")
            .siblings().removeClass("display");

            $(".mailWrap .lineTitle.nor")
            .addClass("display");
        }
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $("main>div:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//help
$(function(){
    $(".helpBody li").on("click",function(){
        var n = $(this).index();

        $("header .helpPage:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".helpWrap")
        .removeClass("display")
        .siblings().addClass("display");

        $(".helpInner li:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".helpInner .box .titleBox").on("click",function(){
        $(this).closest(".box")
        .toggleClass("active");
    })
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $(".unLogin").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.loginWindow')
        .addClass('display');
    })

    $('.loginWindow .forget p').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetWindow')
        .addClass('display');
    })

    $(".signupBtn,.register span,.jumpWindow.rules .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.registerWindow')
        .addClass('display');
    })

    $('.registerWindow .isCheck .ruleBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.rules')
        .addClass('display');
    })

    $(".openLive").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.liveGame')
        .addClass('display');
    })

    $(".openSlot").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.slotGame')
        .addClass('display');
    })

    $(".openBoard").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.boardGame')
        .addClass('display');
    })

    $(".openFish").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.fishGame')
        .addClass('display');
    })

    $(".openSport").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.sportGame')
        .addClass('display');
    })

    $(".helpInner .sendBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".edit_ic.changePhone").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.phoneWindow')
        .addClass('display');
    })

    $(".pwdBox .edit_ic").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.passwordWindow')
        .addClass('display');
    })

    $(".langBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.langWindow')
        .addClass('display');
    })

    $(".linkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.downloadBox')
        .addClass('display');
    })

    $(".linkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.downloadBox')
        .addClass('display');
    })

    $(".cardContent .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".plsGo .openBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo2')
        .addClass('display');
    })

    $(".waterBox .openBuy").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterWindow_1')
        .addClass('display');
    })

    $(".waterBox .openRecord").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterWindow_2')
        .addClass('display');
    })

    $(".bettingWrap .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betRecord')
        .addClass('display');
    })

    $(".bettingWrap .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betRecord')
        .addClass('display');
    })

    $(".bettingWrap .pointBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointWindow')
        .addClass('display');
    })

    $(".bettingWrap .partnerBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.partnerBox')
        .addClass('display');
    })

    $(".applyList .sendBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".applyList .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.eventWindow')
        .addClass('display');
    })

    $(".agentRegisterBtn,.agentWrap .applyBox button").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.agentWindow')
        .addClass('display');
    })

    $(".agentWindow .isCheck p").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.agentRules')
        .addClass('display');
    })

    $(".jumpWindow.registerWindow .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo2')
        .addClass('display');
    })
})

//agent
$(function(){
    $(".agentWindow .box li input").on("click",function(){
        $(this).closest("li")
        .toggleClass("active");
    })

    $('.helpHeader.rule select').on("change",function(){
        var n = $(this).val();
        var target = $(".helpBody .content:eq("+ (n - 1) +")").offset().top - 24;
        var ori = $(".helpBody").offset().top;
        var scrollVal = $(".helpBody").scrollTop();

        $(".helpBody").animate({
            scrollTop: target - ori + scrollVal,
        },300)
        
        if($(this).val() == 1)
        {
            $(".helpHeader.rule .selectBox p")
            .text("1· はじめに")
        }
        if($(this).val() == 2)
        {
            $(".helpHeader.rule .selectBox p")
            .text("2· 定義と解釈")
        }
        if($(this).val() == 3)
        {
            $(".helpHeader.rule .selectBox p")
            .text("3· パートナー適用条件")
        }
        if($(this).val() == 4)
        {
            $(".helpHeader.rule .selectBox p")
            .text("4· 当社の権利と義務")
        }
        if($(this).val() == 5)
        {
            $(".helpHeader.rule .selectBox p")
            .text("5· パートナーの権利と義務")
        }
        if($(this).val() == 6)
        {
            $(".helpHeader.rule .selectBox p")
            .text("6· コミッション")
        }
        if($(this).val() == 7)
        {
            $(".helpHeader.rule .selectBox p")
            .text("7· 禁止事項")
        }
        if($(this).val() == 8)
        {
            $(".helpHeader.rule .selectBox p")
            .text("8· 負債および責任制限")
        }
        if($(this).val() == 9)
        {
            $(".helpHeader.rule .selectBox p")
            .text("9· 機密情報")
        }
        if($(this).val() == 10)
        {
            $(".helpHeader.rule .selectBox p")
            .text("10· 解約または契約の終了")
        }
        if($(this).val() == 11)
        {
            $(".helpHeader.rule .selectBox p")
            .text("11· 本規約および本契約の改正")
        }
    });

    $('.helpHeader.privacy select').on("change",function(){
        var n = $(this).val();
        var target = $(".helpBody .content:eq("+ (n - 1) +")").offset().top - 24;
        var ori = $(".helpBody").offset().top;
        var scrollVal = $(".helpBody").scrollTop();

        $(".helpBody").animate({
            scrollTop: target - ori + scrollVal,
        },300)

        if($(this).val() == 1)
        {
            $(".helpHeader.privacy .selectBox p")
            .text("1· 個人情報保護方針")
        }
        if($(this).val() == 2)
        {
            $(".helpHeader.privacy .selectBox p")
            .text("2· 顧客情報保護方針")
        }
        if($(this).val() == 3)
        {
            $(".helpHeader.privacy .selectBox p")
            .text("3· ドメイン認証SSL")
        }
    });

    $('.helpHeader.normal select').on("change",function(){
        var n = $(this).val();
        var target = $(".helpBody .content:eq("+ (n - 1) +")").offset().top - 24;
        var ori = $(".helpBody").offset().top;
        var scrollVal = $(".helpBody").scrollTop();

        $(".helpBody").animate({
            scrollTop: target - ori + scrollVal,
        },300)
        if($(this).val() == 1)
        {
            $(".helpHeader.normal .selectBox p")
            .text("1· 登録")
        }
        if($(this).val() == 2)
        {
            $(".helpHeader.normal .selectBox p")
            .text("2· コミッション")
        }
        if($(this).val() == 3)
        {
            $(".helpHeader.normal .selectBox p")
            .text("3· 出金")
        }
    });

    $(function(){
        var arr = [];
        var i = 0;
        var ori = $(".helpBody").offset().top;

        $(".helpBody.rule .content").each(function(){
            arr[i] = $(this).offset().top - ori - 25;

            i ++;
        })

        $(".helpBody.rule").scroll(function () {
            var scrollVal = $(".helpBody.rule").scrollTop();

            if(scrollVal >= arr[0])
            {
                $(".helpHeader.rule .selectBox p")
                .text("1· はじめに");
            }
            if(scrollVal >= arr[1])
            {
                $(".helpHeader.rule .selectBox p")
                .text("2· 定義と解釈");
            }
            if(scrollVal >= arr[2])
            {
                $(".helpHeader.rule .selectBox p")
                .text("3· パートナー適用条件");
            }
            if(scrollVal >= arr[3])
            {
                $(".helpHeader.rule .selectBox p")
                .text("4· 当社の権利と義務");
            }
            if(scrollVal >= arr[4])
            {
                $(".helpHeader.rule .selectBox p")
                .text("5· パートナーの権利と義務");
            }
            if(scrollVal >= arr[5])
            {
                $(".helpHeader.rule .selectBox p")
                .text("6· コミッション");
            }
            if(scrollVal >= arr[6])
            {
                $(".helpHeader.rule .selectBox p")
                .text("7· 禁止事項");
            }
            if(scrollVal >= arr[7])
            {
                $(".helpHeader.rule .selectBox p")
                .text("8· 負債および責任制限");
            }
            if(scrollVal >= arr[8])
            {
                $(".helpHeader.rule .selectBox p")
                .text("9· 機密情報");
            }
            if(scrollVal >= arr[9])
            {
                $(".helpHeader.rule .selectBox p")
                .text("10· 解約または契約の終了");
            }
            if(scrollVal >= 6100)
            {
                $(".helpHeader.rule .selectBox p")
                .text("11· 本規約および本契約の改正");
            }
            
            console.log(scrollVal);
        })
    })
})