$(".subMenu ul").hide();
$(".subMenu a").click(function() {
    console.log("clicked");
    $(this).parent(".subMenu").children("ul").slideToggle("100");
    // $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

const checkbox = document.querySelector("#menu__toggle");
const sidebar = document.querySelector(".sidebar");

const burger = document
    .querySelector(".menu__btn")
    .addEventListener("click", () => {
        // checkbox.checked == false ?
        //     (checkbox.checked = true) :
        //     checkbox.checked == true ?
        //     (checkbox.checked = false) :
        //     (checkbox.checked = true);
        if (checkbox.checked == false) {
            console.log(false);
            sidebar.style.left = "0";
            sidebar.style.transitionDuration = "0.25s";
            sidebar.style.visibility = "visible";
            document.querySelector(".menu__btn").style.left = "315px";
        } else {
            console.log(true);
            if (window.innerWidth > 768) {
                sidebar.style.visibility = "visible";
                sidebar.style.left = "0";
            } else {
                sidebar.style.transitionDuration = "0.25s";
                sidebar.style.visibility = "hidden";
                sidebar.style.left = "-100%";
                document.querySelector(".menu__btn").style.left = "20px";
            }
        }
        console.log(checkbox.checked);
    });

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        checkbox.checked = false;
        sidebar.style.visibility = "visible";
        sidebar.style.left = "0";
        document.querySelector(".menu__btn").style.left = "20px";

        console.log("hello");
    } else {
        sidebar.style.visibility = "hidden";
        sidebar.style.left = "-100%";
    }
});