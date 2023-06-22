const navElements = document.querySelectorAll('.list');
const switchSound = new Audio("public/voices/change_tab.mp3");


function hiddenActive(){
    document.querySelector('#lo_desc').style.display="none";
    document.querySelector('#lo').classList.remove('education-achievement-cover-active');
    document.querySelector('#lo').classList.add('education-achievement-cover');

    document.querySelector('#jsCourse_desc').style.display="none";
    document.querySelector('#jsCourse').classList.remove('education-achievement-cover-active');
    document.querySelector('#jsCourse').classList.add('education-achievement-cover');

    document.querySelector('#studies_desc').style.display="none";
    document.querySelector('#studies').classList.remove('education-achievement-cover-active');
    document.querySelector('#studies').classList.add('education-achievement-cover');

    document.querySelector('#website-information').style.display="none";
    document.querySelector('#website').classList.remove('offer-box-active');
    document.querySelector('#website').classList.add('offer-box');

    document.querySelector('#onlineshop-information').style.display="none";
    document.querySelector('#onlineshop').classList.remove('offer-box-active');
    document.querySelector('#onlineshop').classList.add('offer-box');

    document.querySelector('#bannercard-information').style.display="none";
    document.querySelector('#bannercard').classList.remove('offer-box-active');
    document.querySelector('#bannercard').classList.add('offer-box');

    document.querySelector('#logo-information').style.display="none";
    document.querySelector('#logo').classList.remove('offer-box-active');
    document.querySelector('#logo').classList.add('offer-box');

    document.querySelector('#services-information').style.display="none";
    document.querySelector('#services').classList.remove('offer-box-active');
    document.querySelector('#services').classList.add('offer-box');

    document.querySelector('#video-information').style.display="none";
    document.querySelector('#video').classList.remove('offer-box-active');
    document.querySelector('#video').classList.add('offer-box');
}

function display_container(container_id) {
    if (container_id == "about_me") {
        for(let i = 1; i <= 5; i++){
            if (i == 1) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
        hiddenActive();
    }

    else if (container_id == "skills") {
        for(let i = 1; i <= 5; i++){
            if (i == 2) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
        hiddenActive();
    }

    else if (container_id == "offer") {
        for(let i = 1; i <= 5; i++){
            if (i == 3) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
        hiddenActive();
    }

    else if (container_id == "education") {
        for(let i = 1; i <= 5; i++){
            if (i == 4) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
    }

    else if (container_id == "contact") {
        for(let i = 1; i <= 5; i++){
            if (i == 5) document.querySelector("#c"+i).style.display="flex";
            else document.querySelector("#c"+i).style.display="none";
        }
        hiddenActive();
    }
}


function activeLink(){
    navElements.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    switchSound.play();
    display_container(this.id);
}


navElements.forEach((item) => item.addEventListener('click', activeLink));
