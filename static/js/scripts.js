var last_highlighted_id = "home_btn_li";
var emoji_response = {
    thumbs_up: "👍🏻👍🏻👍🏻 I really enjoyed this! Everything was great, and I appreciate the effort put into it. Keep up the fantastic work! 👍🏻👍🏻👍🏻",
    heart: "🤣🤣🤣 I absolutely love this! It exceeded my expectations, and I'm so grateful for the amazing experience! 🤣🤣🤣",
    squint_tears: "😀😀😀 This was so much fun! I really enjoyed the experience and had a great time. Keep the good vibes coming! 😀😀😀",
    face_angry: "😡😡😡 I'm really frustrated with my experience. It didn't meet my expectations, and I hope you address the problems I faced. 😡😡😡",
    thumbs_down: "👎🏻👎🏻👎🏻 I didn't enjoy this at all. I found several issues that need improvement. I hope you can make it better! 👎🏻👎🏻👎🏻",
}
var contact_json = {
    email_icon: "pushparaj-fullstack-dev@outlook.com",
    number_icon: "9080209633",
    whatsapp_icon: "9080209633",
    linkedin_icon: "https://www.linkedin.com/in/pushparaj-m-43148817a/",
    github_icon: "https://github.com/PushparajM90",
    facebook_icon: "https://www.facebook.com/pistal.king.5?mibextid=ZbWKwL",
    instagram_icon: "https://www.instagram.com/black__devil_raj?igsh=ZmliOXVtcDZ3MDN2",
    youtube_icon: "https://youtube.com/@pushparajmurugesan8639?si=LA3Ja_qkJ688I7mj"
}

document.addEventListener('DOMContentLoaded', function () {

    (function () {
        emailjs.init({
            publicKey: "NagH5tRuSAjvWj56m",
        });
    })();

    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var preloader_ele = document.getElementById('preloader');
        preloader_ele.style.display = 'flex';
        var recipient_from_name_ele = document.getElementById('recipient_from_name');
        var recipient_from_email_ele = document.getElementById('recipient_from_email');
        var end_user_message_ele = document.getElementById('end_user_message');
        emailjs.send("service_1ktrui8", "template_ikmroyv", {
           name: recipient_from_name_ele.value,
           email: recipient_from_email_ele.value,
           message: end_user_message_ele.value
        })
        // dummyLog()
        .then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text);
                recipient_from_name_ele.value = '';
                recipient_from_email_ele.value = '';
                end_user_message_ele.value = '';
                preloader_ele.style.display = 'none';
                Swal.fire({
                    title: "Thanking You!",
                    text: "Thank you so much for taking the time to share your feedback with me! I truly appreciate your effort.",
                    icon: "success",
                    button: "Okay",
                    color: "#000000",
                    iconColor: '#68ff89',
                    background: 'linear-gradient(135deg, #0077ff, #00d2ff)',
                    iconColor: '#ffffff',
                    customClass: {
                        popup: 'styled-popup',
                    },
                    backdrop: `
                        rgba(255, 255, 255, 0.8)
                    `
                });
            }, 
            function (error) {
                console.log('FAILED...', error);
                recipient_from_name_ele.value = '';
                recipient_from_email_ele.value = '';
                end_user_message_ele.value = '';
                preloader_ele.style.display = 'none';
                Swal.fire({
                    title: "Sorry!",
                    text: "Thank you so much for taking the time to share your feedback with me! Unfortunately, the server encountered an error while trying to send the email.",
                    icon: "error",
                    color: "#000000",
                    background: 'linear-gradient(135deg, #0077ff, #00d2ff)',
                    iconColor: '#ff6868',
                    customClass: {
                        popup: 'styled-popup',
                    },
                    backdrop: `
                    rgba(255, 255, 255, 0.8)
                    `,
                    showCancelButton: true,
                    confirmButtonText: 'Forgive',
                    cancelButtonText: 'Hate it' 
                }).then((result) => {
                    var title = 'Sorry 😢!';
                    var text = "We're sorry for the disappointment.";
                    var image_url = '/static/images/have_it.png';
                    if (result.isConfirmed) {
                        title = 'Oops 😢!';
                        text = 'Thank you for your understanding.';
                        image_url = '/static/images/forgive_image.png';
                    }
                    Swal.fire({
                        title: title,
                        text: text,
                        imageUrl: image_url,
                        imageWidth: 200,
                        imageHeight: 200,
                        imageAlt: "Custom image",
                        color: "#000000",
                        background: 'linear-gradient(135deg, #0077ff, #00d2ff)',
                        iconColor: '#ffffff',
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'styled-popup',
                        },
                        backdrop: `
                                rgba(255, 255, 255, 0.8)
                            `
                    });
                });
            });
    });

    window.onscroll = function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
        
        var p_profile_Element = document.getElementById('p_profile');
        var p_work_experience_Element = document.getElementById('p_work_experience');
        var p_projects_Element = document.getElementById('p_projects');
        var p_skills_Element = document.getElementById('p_skills');
        var p_educational_background_Element = document.getElementById('p_educational_background');
        var p_contact_Element = document.getElementById('p_contact');
        
        var rect_profile = p_profile_Element.getBoundingClientRect();
        var rect_experience = p_work_experience_Element.getBoundingClientRect();
        var rect_projects = p_projects_Element.getBoundingClientRect();
        var rect_skills = p_skills_Element.getBoundingClientRect();
        var rect_educational = p_educational_background_Element.getBoundingClientRect();
        var rect_contact = p_contact_Element.getBoundingClientRect();
        
        if (scrolled < 5) {
            setHighlightLiTrueClass('home_btn_li');
        }
        else if (rect_profile.top >= 0 && rect_profile.bottom <= window.innerHeight) {
            setHighlightLiTrueClass('p_profile_btn_li');
        }
        else if (rect_experience.top >= 0 && rect_experience.bottom <= window.innerHeight) {
            setHighlightLiTrueClass('p_work_experience_btn_li');
        }
        else if (rect_projects.top >= 0 && rect_projects.bottom <= window.innerHeight) {
            setHighlightLiTrueClass('p_projects_btn_li');
        }
        else if (rect_skills.top >= 0 && rect_skills.bottom <= window.innerHeight) {
            setHighlightLiTrueClass('p_skills_btn_li');
        }
        else if (rect_educational.top >= 0 && rect_educational.bottom <= window.innerHeight) {
            setHighlightLiTrueClass('p_educational_background_btn_li');
        }
        else if (rect_contact.top >= 0 && rect_contact.bottom <= window.innerHeight) {
            setHighlightLiTrueClass('p_contact_btn_li');
        }
        
    };
});

const iconDivs = document.querySelectorAll('.icon_div');

iconDivs.forEach(function (iconDiv) {
    iconDiv.addEventListener('mouseover', function (event) {
        var div_ele = event.currentTarget;
        var i_two = div_ele.querySelector('.icon_ii');
        i_two.hidden = false
    });
    iconDiv.addEventListener('mouseout', function (event) {
        var div_ele = event.currentTarget;
        var i_two = div_ele.querySelector('.icon_ii');
        i_two.hidden = true
    });
});

function getContectLink(element){
    var element_id = element.id;
    var link = contact_json[element_id];
    console.log("link--->", link);
    copyToClipboard(link, element_id);
}

function dummyLog(){
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Hi Bro");
            resolve(true);
        }, 3000);
    });
}

function setDefaultMessage(ele){
    var ele_id = ele.id;
    var message = emoji_response[ele_id];
    if (ele_id == 'heart') {

    }
    var textarea = document.getElementById("end_user_message");
    textarea.value = '';
    textarea.value = message;
    var emoji_feedback_guid_ele = document.getElementById("emoji_feedback_guid");
    emoji_feedback_guid_ele.hidden = true;
}

function setHighlightLiTrueClass(id){
    var ele = document.getElementById(id);
    var hasClass = ele.classList.contains('highlight_li_true');
    if (!hasClass) {
        ele.classList.add('highlight_li_true');
        var existing_highlighted = document.getElementById(last_highlighted_id);
        existing_highlighted.classList.remove('highlight_li_true');
        last_highlighted_id = id;
    }
}

function movePage(id) {
    if (id == 'home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        var element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setTimeout(function () {
            window.scrollBy({
                top: -80,
                behavior: 'smooth'
            });
        }, 900);
    }
}

function openParagraph(element) {
    var div = element.nextElementSibling;
    if (div) {
        var classList = div.classList;
        if (classList.contains('is_hidden_true')) {
            classList.add('is_hidden_false');
            classList.remove('is_hidden_true');
            div.removeAttribute('hidden');
        }else{
            classList.add('is_hidden_true');
            classList.remove('is_hidden_false');
            div.setAttribute('hidden', true);
        }
    }
}

function copyHardcodedToClipboard() {
    var phoneNumber = document.getElementById("mobile_no").innerText.trim();
    copyToClipboard(phoneNumber, 'mobile_no');
}

function copyToClipboard(content, id) {
    var tempInput = document.createElement("textarea");
    tempInput.value = content;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    var swal_title = `<span style="color: #ffffff;">`;
    if (id == 'mobile_no'){
        swal_title += `Mobile number :`
    }
    else if (id == 'email_icon') {
        swal_title += `Email ID :`
    }
    else if (id == 'number_icon') {
        swal_title += `Mobile number :`
    }
    else if (id == 'whatsapp_icon') {
        swal_title += `Whatsapp number :`
    }
    else if (id == 'linkedin_icon') {
        swal_title += `Linkedin Profile URL :`
    }
    else if (id == 'github_icon') {
        swal_title += `Github Profile URL :`
    }
    else if (id == 'facebook_icon') {
        swal_title += `Facebook Profile URL :`
    }
    else if (id == 'instagram_icon') {
        swal_title += `Instagram Profile URL :`
    }
    else if (id == 'youtube_icon') {
        swal_title += `Youtube Profile URL :`
    }
    else{
        swal_title += `Content :`
    }
    swal_title += ` <span style="font-size:12px; color:#333;"> ${content}</span> copied to clipboard!</span>`;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: swal_title,
        background: 'linear-gradient(135deg, #0077ff, #00d2ff)',
        iconColor: '#68ff89',
        customClass: {
            popup: 'styled-popup',
        },
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        timerProgressBar: true,
    });

}

am5.ready(function () {

    var root_1 = am5.Root.new("chartdiv_1");
    var root_2 = am5.Root.new("chartdiv_2");
    var root_3 = am5.Root.new("chartdiv_3");

    var exporting_1 = am5plugins_exporting.Exporting.new(root_1, {
        menu: am5plugins_exporting.ExportingMenu.new(root_1, {})
    });
    var exporting_2 = am5plugins_exporting.Exporting.new(root_2, {
        menu: am5plugins_exporting.ExportingMenu.new(root_2, {})
    });
    var exporting_3 = am5plugins_exporting.Exporting.new(root_3, {
        menu: am5plugins_exporting.ExportingMenu.new(root_3, {})
    });

    root_1.setThemes([
        am5themes_Animated.new(root_1)
    ]);
    root_2.setThemes([
        am5themes_Animated.new(root_2)
    ]);
    root_3.setThemes([
        am5themes_Animated.new(root_3)
    ]);

    var chart_1 = root_1.container.children.push(am5percent.PieChart.new(root_1, {
        layout: root_1.verticalLayout
    }));
    var chart_2 = root_2.container.children.push(am5percent.PieChart.new(root_2, {
        layout: root_2.verticalLayout
    }));
    var chart_3 = root_3.container.children.push(am5percent.PieChart.new(root_3, {
        layout: root_3.verticalLayout
    }));

    var series_1 = chart_1.series.push(am5percent.PieSeries.new(root_1, {
        valueField: "value",
        categoryField: "category"
    }));
    var series_2 = chart_2.series.push(am5percent.PieSeries.new(root_2, {
        valueField: "value",
        categoryField: "category"
    }));
    var series_3 = chart_3.series.push(am5percent.PieSeries.new(root_3, {
        valueField: "value",
        categoryField: "category"
    }));

    series_1.data.setAll([
        { value: 7.96, category: "Sem III" },
        { value: 8.14, category: "Sem IV" },
        { value: 7.55, category: "Sem V" },
        { value: 7.26, category: "Sem VI" },
        { value: 8.10, category: "Sem VII" },
        { value: 8.00, category: "Sem VIII" },
    ]);
    series_2.data.setAll([
        { value: 80.33, category: "Sem I" },
        { value: 76.88, category: "Sem II" },
        { value: 87.57, category: "Sem III" },
        { value: 83.28, category: "Sem IV" },
        { value: 88.75, category: "Sem V" },
        { value: 97.57, category: "Sem VI" },
    ]);
    series_3.data.setAll([
        { value: 93, category: "Tamil" },
        { value: 68, category: "English" },
        { value: 76, category: "Mathematics" },
        { value: 78, category: "Science" },
        { value: 95, category: "Social Science" },
    ]);

    var legend_1 = chart_1.children.push(am5.Legend.new(root_1, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
    }));
    var legend_2 = chart_2.children.push(am5.Legend.new(root_2, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
    }));
    var legend_3 = chart_3.children.push(am5.Legend.new(root_3, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
    }));


    legend_1.data.setAll(series_1.dataItems);
    legend_2.data.setAll(series_2.dataItems);
    legend_3.data.setAll(series_3.dataItems);

    series_1.appear(1000, 100);
    series_2.appear(1000, 100);
    series_3.appear(1000, 100);
});
