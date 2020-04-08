$(document).ready(function () {
    //

    $(".rate-chose").click(function () {
        $(this).addClass("rate-active");
        let idChose = $(this).attr("id");
        $(".rate-chose").not(this).removeClass("rate-active");
        $(".rate-chose").not(this).addClass("rateNotChose");
        $(".descriptionChose").fadeOut();
        $("#" + idChose + "-description").fadeIn();
    })

    $(".submit").click(function () {
        $("#back-rate").fadeOut();
    })


    var notificationStatus = $(".drop-down-notification").css("display");

    $("#notification").click(function () {
        if (notificationStatus == "none") {
            $(".drop-down-notification").fadeIn();
            notificationStatus = "block";
        } else if (notificationStatus == "block") {
            $(".drop-down-notification").fadeOut();
            notificationStatus = "none";
        }
    })

    var dotsStatus = $(".drop-down-agenda").css("display");

    let myItemsDots = Array.from(document.getElementsByClassName("dots"));
    let myItemsDropDown = Array.from(document.getElementsByClassName("drop-down-agenda"));

    for (let i = 0; i < myItemsDots.length; i++) {
        myItemsDots[i].addEventListener("click", function (e) {
            if (dotsStatus == "none") {

                myItemsDropDown[i].style.display = "block";
                dotsStatus = "block";
            } else {
                myItemsDropDown[i].style.display = "none";
                dotsStatus = "none";

            }
        })
    }

    let myItemsCancel = Array.from(document.getElementsByClassName("cancel-box-item"));
    let ReservationsBox = document.getElementById("box-closeReservations");
    let ReservationsBoxStatus = $("#box-closeReservations").css("display")
    for (let i = 0; i < myItemsCancel.length; i++) {
        myItemsCancel[i].addEventListener("click", function (e) {
            if (ReservationsBoxStatus == "none") {

                ReservationsBox.style.display = "flex";
                ReservationsBoxStatus = "flex";
            }
        })
    }

    $(".rate-box-item").click(function () {
        $("#back-rate").css("display", "flex")
    })

    $("#backReservations").click(function () {
        ReservationsBox.style.display = "none";
        ReservationsBoxStatus = "none";
    })

    $(".modify").click(function () {
        $("#box-time").css({ display: "flex" })
    })
    $("#back").click(function () {
        $("#box-close").fadeOut(1000);
    })
    //

    $("#modify-button").click(function () {
        $("#box-time").fadeOut(1000);
    })
    $("#AddAvailableAppointment").click(function () {
        $("#box-Add").css({ display: "flex" })
    })
    $("#AddButton").click(function () {
        $("#box-Add").fadeOut(1000);
    })
    $(".cancel").click(function () {
        $("#box-close ").css({ display: "flex" })
    })
    var settingStatus = $(".drop-down-setting").css("display");

    $("#setting").click(function () {
        if (settingStatus == "none") {
            $(".drop-down-setting").fadeIn();
            settingStatus = "block";
        } else if (settingStatus == "block") {
            $(".drop-down-setting").fadeOut();
            settingStatus = "none";
        }
    })
    //
    //
    $("#endChat").click(function () {
        $("#boxEndChat").css("display", "flex")
    })

    $("#backChat").click(function () {
        $("#boxEndChat").css("display", "none")

    })

    let directionPage = $("html").attr("dir");
    let owlDirection = false;
    if (directionPage == "rtl") {
        owlDirection = true;
        $("#bars").click(function () {
            let sideNavLeft = $(".side-nav").css("right");
            if (sideNavLeft < 0 + "px") {
                $(".side-nav").animate({ right: "0%" }, 1000);
                sideNavLeft = 0;

            } else {
                $(".side-nav").animate({ right: "-1000px" }, 1000);
                sideNavLeft = -1000;
            }
        })
        $(".day").click(function () {
            alert($(this).attr("id"))
        })
    } else {
        owlDirection = false;
        $("#bars").click(function () {
            let sideNavLeft = $(".side-nav").css("left");
            if (sideNavLeft < 0 + "px") {
                $(".side-nav").animate({ left: "0%" }, 1000);
                sideNavLeft = 0;
            } else {
                $(".side-nav").animate({ left: "-1000px" }, 1000);
                sideNavLeft = -1000;
            }
        })

        $(".day").click(function () {
            alert($(this).attr("id"))
        })

    }
    let topNav = $(".topNav").height();
    let windowHeight = $(window).height();
    $("#mainPage,main").css({ marginTop: topNav })
    $(".side-nav").height(windowHeight - topNav);
    $(".drop-down-notification ,.drop-down-setting").css({ top: topNav + 10 });
    $('#agenda .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        rtl: owlDirection,
        responsive: {
            0: {
                items: 1
            },
            25: {
                items: 2
            },
            50: {
                items: 3
            },
            100: {
                items: 4
            },
            150: {
                items: 5
            },
            300: {
                items: 6
            },
            400: {
                items: 7
            }

        }
    })
    $("#agenda .owl-prev").empty();
    $("#agenda .owl-prev").append("<i class='fas fa-arrow-left' id='left'></i>")
    $("#agenda .owl-next").empty();
    $("#agenda .owl-next").append("<i class='fas fa-arrow-right' id='right'></i>")

})
