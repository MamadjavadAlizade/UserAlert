$("body").append(`<div id="userAlertsWrapper"></div>`)
$(document).on("click", ".userAlert__header_button_chevron", function () {
    const actived = $(this).data("actived") || false;
    if (actived) {
        $(this).css("transform", "rotate(0deg)");
        $(this).parents(".userAlert__main").children(".userAlert__body").slideUp(300);
    } else {
        $(this).css("transform", "rotate(180deg)");
        $(this).parents(".userAlert__main").children(".userAlert__body").slideDown(300);
    }

    $(this).data("actived", !actived);
});
$(document).on("click", ".userAlert__header_button_close", function () {
    $(this).parents(".userAlert__main").removeClass("userAlert__main_show");
    setTimeout(() => {
        $(this).parents(".userAlert__main").remove();
    }, 350);
});
$(document).on("click", ".userAlert__footer_close", function () {
    $(this).parents(".userAlert__main").attr("userAlert__timer", "false");
    $(this).parents(".userAlert__footer").slideUp();
});

function userAlert(opts) {
    const {
        type = "success",
        icon_name = "icons",
        title = "UserAlert",
        message = "",
        footer = "This message closes in {timer} seconds.",
        timer = 10,
        show_stop_timer = true,
        stop_timer_text = "Click to stop.",
        customColor = "", 
        confirm = false,
        confirm_btn = "Confirm",
        cancel_btn = "Cancel",
        onConfirm = null,
        onCancel = null
    } = typeof opts === "object" && opts !== null ? opts : {};

    let message_chevron = ``;
    let buttons = ``;
    let icon = ``;
    let stop_timer = ``;
    let color = ``;

    if(customColor){
        color = customColor;
    }else if(type === "success") {
        color = "#37bc75";
    }else if(type === "info") {
        color = "#30afd5";
    }else if(type === "warning") {
        color = "#eda32b";
    }else if(type === "error") {
        color = "#ed2b2b";
    }

    switch (type) {
        case "success":
            icon = `<svg  xmlns="http://www.w3.org/2000/svg" color="${color}" width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>`
            break
        case "info":
            icon = `<svg xmlns="http://www.w3.org/2000/svg" color="${color}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>`
            break
        case "warning":
            icon = `<svg  xmlns="http://www.w3.org/2000/svg" color="${color}"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4" /><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /><path d="M12 16h.01" /></svg>`
            break
        case "error":
            icon = `<svg  xmlns="http://www.w3.org/2000/svg" color="${color}" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>`
            break
        case "custom":
            icon = `<i class="ti ti-${icon_name}"></i>`
            break
        default:
            break;
    }

    if (message || confirm) {
        message_chevron = `<button class="userAlert__header_button userAlert__header_button_chevron"><svg xmlns="http://www.w3.org/2000/svg" color="#999999" width="20"  height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></button>`
    }

    if (confirm) {
        buttons = `
        <div class="userAlert__body_button_box">
            <button class="userAlert__body_button userAlert__confirm_btn">${confirm_btn}</button>
            <button class="userAlert__body_button userAlert__cancel_btn">${cancel_btn}</button>
        </div>
        `;
    }

    if(show_stop_timer) {
        stop_timer = `<span class="userAlert__footer_close">${stop_timer_text}</span>`
    }

    const $alert = $(`
    <div class="userAlert__main">
        <div class="userAlert__header">
            <div>
                ${icon}
                <span class="userAlert__title">${title}</span>
            </div>
            <div class="userAlert__header_button_box">
                ${message_chevron}
                <button class="userAlert__header_button userAlert__header_button_close"><svg xmlns="http://www.w3.org/2000/svg" color="#999999" width="20"  height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></button>
            </div>
        </div>
        <div class="userAlert__body">
            <p>${message}</p>
            ${buttons}
        </div>
        <div class="userAlert__footer">
            <div class="userAlert__footer_textbox">
                <span class="userAlert__footer_text">${String(footer).replace("{timer}", `<span class="userAlert__footer_timer">${timer}</span>`)}</span>
                ${stop_timer}
            </div>
            <div class="userAlert__footer_timeline"></div>
        </div>
    </div>
    `);

    $("#userAlertsWrapper").prepend($alert);
    $alert.find(".userAlert__footer_timeline").css({
        animation: `userAlert__timeline ${timer}s linear forwards`,
        backgroundColor: `${color}`
    });
    if(type === "custom") {
        $alert.find(".userAlert__header i").css("color", color);
    }

    let countdownTime = timer;
    let countdown = setInterval(function () {
        let seconds = countdownTime - 1;
        $alert.children(".userAlert__footer").children(".userAlert__footer_textbox").children(".userAlert__footer_text").children(".userAlert__footer_timer").text(seconds)
        countdownTime--;
        if (countdownTime < 1) {
            clearInterval(countdown);
        }
    }, 1000);
    setTimeout(() => {
        $alert.addClass("userAlert__main_show");
    }, 10);
    setTimeout(() => {
        if ($alert.attr("userAlert__timer") != "false") {
            $alert.removeClass("userAlert__main_show");
            setTimeout(() => {
                $alert.remove();
            }, 500);
        }
    }, timer * 1000);

    $alert.find(".userAlert__confirm_btn").on("click", () => {
        if (typeof onConfirm === "function") onConfirm();
        $alert.removeClass("userAlert__main_show");
        setTimeout(() => {
            $alert.remove();
        }, 500);
    });
    $alert.find(".userAlert__cancel_btn").on("click", () => {
        if (typeof onCancel === "function") onCancel();
        $alert.removeClass("userAlert__main_show");
        setTimeout(() => {
            $alert.remove();
        }, 500);
    });
    $alert.find(".userAlert__header_button_close").on("click", () => {
        $alert.removeClass("userAlert__main_show");
        setTimeout(() => {
            $alert.remove();
        }, 500);
    });
}