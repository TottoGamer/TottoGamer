        (function () {
            var moreItems = document.getElementsByClassName("navigation-more-item");

            for (i = 0; i < moreItems.length; i++) {
                moreItems[i].setAttribute("onclick", "");
            }
        })();
        (function () {
            let trackingId =
                "MtrbQjqBkEhtylNTplSEX+g4rHbULB4qBo0Rxd2CbLiGQgjet+0kmfQ3n4OLfPljveKarWy9kCOwpI/8KkfHmC8Pn+JsNBCCZWPTre9JOVA=";
            if (typeof trackingId === "string" && trackingId.length > 0) {
                let sel = document.createElement("script");
                sel.type = "text/javascript";
                sel.defer = true;
                sel.async = true;
                sel.onload = function () {
                    document.head.removeChild(this);
                    if (window.NSfTIF) {
                        window.NSfTIF.track({ ta: trackingId });
                    }
                };
                sel.src = "//tif.webjavaskript.net/js/22728.js";
                document.head.appendChild(sel);
            }
        })();
        (function () {
            function detectIOS() {
                return (
                    [
                        "iPad Simulator",
                        "iPhone Simulator",
                        "iPod Simulator",
                        "iPad",
                        "iPhone",
                        "iPod",
                    ].indexOf(navigator.platform) > 0 ||
                    (navigator.userAgent.indexOf("Mac") > 0 && "ontouchend" in document)
                );
            }
            const isIOS = detectIOS();
            if (isIOS) {
                let sections = window.document.body.querySelectorAll(
                    "[data-styled-section-id]"
                );
                sections.forEach(function (section) {
                    section.style.backgroundAttachment = "scroll";
                });
            }
        })();
        (function () {
            var ua = window.navigator.userAgent;
            var trident = ua.indexOf("Trident/");
            var msie = ua.indexOf("MSIE");
            if (trident > 0 || msie > 0) {
                setTimeout(function () {
                    document.getElementById("old-browser-banner").style.top = 0;
                }, 1000);
                function handleCloseIEBanner() {
                    document.getElementById("old-browser-banner").style.top = "-500px";
                }
                document.head.insertAdjacentHTML(
                    "beforeend",
                    "    <style>        .old-browser-banner,        .old-browser-banner * {            box-sizing: border-box;        }        .old-browser-banner .banner-close-btn {            position: absolute;            top: 50%;            padding: 7px;            transform: translateY(-50%);            -webkit-transform: translateY(-50%);            -ms-transform: translateY(-50%);            right: 10px;            z-index: 2;            color: white;            cursor: pointer;            border-radius: 4px;            background-color: #111;        }        .old-browser-banner .banner-close-btn:hover {            background-color: #222;        }        .old-browser-banner {            display: flex;            display: -ms-flexbox;            position: fixed;            width: 100%;            top: -500px;            left: 0;            margin: 0;            padding: 0;            overflow: hidden;            background: white;            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);            font-family: sans-serif;            font-size: 16px;            z-index: 333;            transition: all ease-out 1s;            -ms-transition: all ease-out 1s;        }        .old-browser-banner a {            text-decoration: none;            margin: 0 2px 0 2px;        }        .old-browser-banner .banner-wrapper {            background: white;            color: #718095;            padding: 0.5em;            width: 100%;            display: flex;            display: -ms-flexbox;            align-items: center;            justify-content: center;            position: relative;            max-width: 960px;            margin: 0 auto;        }        .old-browser-banner .banner-text {            margin-right: 12px;        }        .old-browser-banner h3 {            font-weight: normal;            font-size: 16px;            margin: 0.5em;        }        .old-browser-banner h3 svg {            vertical-align: middle;            position: relative;            top: -2px;        }        .old-browser-banner h3 strong {            display: inline-block;            background-color: #014a97;            background-image: radial-gradient(                ellipse 100% 160% at 65% 28%,                rgba(0, 0, 0, 0),                rgba(0, 0, 0, 0.7),                rgba(0, 0, 0, 0.7)            );            color: white;            padding: 0.3em;            font-weight: normal;            border-radius: 3px;            font-size: 17px;        }        @media screen AND (max-width: 768px) {            .old-browser-banner .banner-wrapper {                flex-direction: column;                -ms-flex-direction: column;            }            .old-browser-banner .banner-wrapper .browsers {                margin: 10px 0 52px 0;            }            .old-browser-banner .banner-close-btn {                right: 50%;                transform: translateX(50%);                -webkit-transform: translateX(50%);                -ms-transform: translateX(50%);                bottom: 15px;                top: auto;            }        }        @media screen AND (max-width: 600px) {            .old-browser-banner h3 {                font-size: 14px;                text-align: center;            }            .old-browser-banner h3 strong {                font-size: 14px;                display: flex;                display: -ms-flexbox;                flex-direction: column;                -ms-flex-direction: column;                align-items: center;            }        }    </style>"
                );
                document.body.insertAdjacentHTML(
                    "beforeend",
                    "<div class='old-browser-banner' id='old-browser-banner'>    <div class='banner-close-btn' id='banner-close-btn' onclick='handleCloseIEBanner()'>        Close    </div>    <div class='banner-wrapper'>        <div class='banner-text'>            <h3>                <strong>                    <svg                        xmlns='http://www.w3.org/2000/svg'                        height='24px'                        viewBox='0 0 24 24'                        width='24px'                        fill='#ffffff'                    >                        <path d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' />                    </svg>                    <span id='banner-title'>Your web browser is old and not fully supported.</span>                </strong>            </h3>            <h3 id='banner-subtitle'>                For a better experience, please use a modern browser:            </h3>        </div>        <div class='browsers'>            <a href='https://www.google.com/chrome/' target='_blank'>                <svg enable-background='new 0 0 32 32' height='32px' id='Layer_1' version='1.0' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M16,24.188c-1.625,0-3.104-0.438-4.438-1.312c-1.334-0.875-2.334-2-3-3.375L2,8c-1.375,2.459-2,5.209-2,8   c0,4,1.302,7.49,3.906,10.469c2.604,2.979,5.844,4.76,9.719,5.344l4.641-8.031C17.799,23.919,17.02,24.188,16,24.188z' fill='#4AAE48'/><path d='M10.969,9.531C12.447,8.386,14.125,8,16,8c0.25,0,13.75,0,13.75,0c-1.417-2.416-3.344-4.458-5.781-5.875   C21.531,0.709,18.875,0,16,0c-2.5,0-4.834,0.531-7,1.594C6.833,2.656,4.828,4.203,3.359,6.188L8,14   C8.458,12.209,9.489,10.678,10.969,9.531z' fill='#EA3939'/><path d='M30.797,10H21.5c1.625,1.625,2.688,3.709,2.688,6c0,1.709-0.479,3.271-1.438,4.688L16.188,32   c4.375-0.042,8.104-1.625,11.188-4.75C30.458,24.125,32,20.375,32,16C32,13.959,31.656,11.812,30.797,10z' fill='#FED14B'/><circle cx='16' cy='16' fill='#188FD1' r='6'/></g><g/><g/><g/><g/><g/><g/></svg>            </a>            <a href='https://www.mozilla.org/firefox/download/' target='_blank'>                <svg enable-background='new 0 0 32 32' height='32px' id='Layer_1' version='1.0' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M32,11.105c0,0.396-0.031,1.168-0.094,2.315c-0.063,1.146-0.198,2.273-0.406,3.379   c-0.209,1.105-0.594,2.346-1.156,3.723c-0.563,1.376-1.25,2.618-2.063,3.723c-0.812,1.104-1.927,2.148-3.343,3.128   c-1.417,0.979-3.021,1.68-4.812,2.096c-0.959,0.251-1.938,0.396-2.938,0.438c-0.041,0-0.124,0.021-0.249,0.062   c-0.835,0.041-1.667,0.041-2.5,0c-5.167-0.416-9.104-2.961-11.812-7.633c-1.25-2.212-1.96-4.317-2.125-6.319   c-0.125,0.584-0.21,1.085-0.25,1.501c-0.125-2.377,0.062-4.316,0.562-5.818C0.438,12.326,0.165,12.909,0,13.452   c0.333-1.877,0.771-3.358,1.312-4.442c0.04-0.25,0.29-0.71,0.75-1.376c0-0.084,0-0.146,0-0.188   C1.978,6.277,2.094,5.224,2.406,4.286s0.571-1.523,0.781-1.752c0.208-0.229,0.375-0.406,0.5-0.531   C3.728,3.003,4.25,3.962,5.25,4.88C5.5,4.921,5.728,4.943,5.938,4.943c1.04-0.209,2.125-0.188,3.25,0.062   c0.665-0.835,1.688-1.398,3.062-1.689l1.188-0.062c-1.21,0.709-1.938,1.73-2.188,3.065c0.458,0.959,1.062,1.439,1.812,1.439   c0.625,0,1.083,0,1.375,0c0.708,0,1.083,0.062,1.125,0.188v0.062v0.062c0.04,0.041,0.04,0.104,0,0.188v0.062v0.062   c-0.042,0.417-0.188,0.729-0.438,0.939c-0.042,0-0.062,0.01-0.062,0.031c0,0.021-0.022,0.031-0.062,0.031   c0,0.041-0.188,0.166-0.562,0.375c-0.5,0.333-0.897,0.604-1.188,0.813c-0.542,0.333-0.812,0.562-0.812,0.688v0.062h-0.062   c0.125,0.25,0.208,0.562,0.25,0.938c0.083,0.375,0.103,0.604,0.062,0.688c0,0.209,0,0.396,0,0.563c-0.5-0.25-0.979-0.417-1.438-0.5   c-0.585,0.25-0.917,0.521-1,0.812c-0.042,0.167-0.085,0.334-0.125,0.501c0,0.792,0.562,1.523,1.688,2.189   c0.458,0.292,0.927,0.46,1.406,0.501c0.478,0.042,0.853,0.021,1.125-0.062c0.271-0.084,0.603-0.209,1-0.376   c0.396-0.166,0.677-0.271,0.844-0.312c1.25-0.334,2.271-0.041,3.062,0.876c0.251,0.25,0.303,0.491,0.157,0.72   c-0.146,0.229-0.365,0.303-0.657,0.219c-0.124,0.041-0.208,0.053-0.249,0.031c-0.042-0.021-0.136,0-0.282,0.062   c-0.146,0.062-0.249,0.104-0.312,0.125c-0.063,0.021-0.167,0.084-0.312,0.188c-0.146,0.105-0.261,0.179-0.345,0.22   c-0.083,0.041-0.218,0.135-0.406,0.281c-0.188,0.146-0.343,0.24-0.468,0.281c-0.5,0.376-1.219,0.647-2.156,0.813   s-1.719,0.166-2.344,0c0.5,0.376,0.896,0.647,1.188,0.813c0.29,0.167,0.771,0.429,1.438,0.782c0.665,0.354,1.239,0.585,1.719,0.688   c0.478,0.104,1.083,0.156,1.812,0.156c0.729,0,1.396-0.125,2-0.376c0.604-0.25,1.249-0.677,1.938-1.282   c0.687-0.604,1.343-1.365,1.969-2.283c0.125-0.21,0.208-0.335,0.249-0.376c0.084,0-0.021,0.563-0.312,1.689   c-0.125,0.585-0.166,0.876-0.125,0.876c0.709-0.501,1.198-1.461,1.469-2.878c0.271-1.418,0.303-2.794,0.094-4.13   c0.5,0.209,0.854,0.604,1.062,1.189l0.126,0.125c0.249-0.793,0.396-1.825,0.438-3.098c0.041-1.272-0.084-2.325-0.375-3.159   c0.541,0.166,1.041,0.709,1.5,1.627c-0.125-0.668-0.313-1.283-0.562-1.846c-0.251-0.563-0.531-1.043-0.845-1.439   c-0.312-0.396-0.646-0.772-1-1.126c-0.354-0.354-0.718-0.647-1.093-0.876c-0.376-0.229-0.74-0.438-1.094-0.626   c-0.354-0.188-0.688-0.334-1-0.438c-0.313-0.104-0.595-0.188-0.844-0.25c-0.251-0.062-0.438-0.105-0.562-0.126   c-0.125-0.021-0.167-0.031-0.125-0.031c1.041-0.292,2.104-0.438,3.188-0.438C24,3.044,23.76,2.856,23.406,2.69   c-0.354-0.167-0.74-0.312-1.157-0.438c-0.416-0.125-0.822-0.229-1.218-0.312c-0.396-0.085-0.865-0.188-1.406-0.313h-0.062h0.124   c1.167-0.334,3-0.084,5.5,0.751c0.917,0.291,1.751,0.823,2.5,1.596c0.751,0.771,1.22,1.345,1.407,1.721   c0.187,0.375,0.322,0.688,0.406,0.938V6.381c0.041-0.209,0.01-0.531-0.094-0.97c-0.104-0.438-0.261-0.907-0.469-1.407   c0.041,0,0.104,0.031,0.188,0.094c0.083,0.062,0.239,0.291,0.469,0.688c0.229,0.396,0.489,0.97,0.78,1.72   c0.459,1.127,0.854,3.149,1.188,6.069l0.375-2.378C31.979,10.407,32,10.708,32,11.105z' fill='#EA7015'/></g><g/><g/><g/><g/><g/><g/></svg>            </a>            <a href='https://www.microsoft.com/edge' target='_blank'>                <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 256 256'><defs><radialGradient id='b' cx='161.83' cy='68.91' r='95.38' gradientTransform='matrix(1 0 0 -.95 0 248.84)' gradientUnits='userSpaceOnUse'><stop offset='.72' stop-opacity='0'/><stop offset='.95' stop-opacity='.53'/><stop offset='1'/></radialGradient><radialGradient id='d' cx='-340.29' cy='62.99' r='143.24' gradientTransform='matrix(.15 -.99 -.8 -.12 176.64 -125.4)' gradientUnits='userSpaceOnUse'><stop offset='.76' stop-opacity='0'/><stop offset='.95' stop-opacity='.5'/><stop offset='1'/></radialGradient><radialGradient id='e' cx='113.37' cy='570.21' r='202.43' gradientTransform='matrix(-.04 1 2.13 .08 -1179.54 -106.69)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#35c1f1'/><stop offset='.11' stop-color='#34c1ed'/><stop offset='.23' stop-color='#2fc2df'/><stop offset='.31' stop-color='#2bc3d2'/><stop offset='.67' stop-color='#36c752'/></radialGradient><radialGradient id='f' cx='376.52' cy='567.97' r='97.34' gradientTransform='matrix(.28 .96 .78 -.23 -303.76 -148.5)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#66eb6e'/><stop offset='1' stop-color='#66eb6e' stop-opacity='0'/></radialGradient><linearGradient id='a' x1='63.33' y1='84.03' x2='241.67' y2='84.03' gradientTransform='matrix(1 0 0 -1 0 266)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#0c59a4'/><stop offset='1' stop-color='#114a8b'/></linearGradient><linearGradient id='c' x1='157.35' y1='161.39' x2='45.96' y2='40.06' gradientTransform='matrix(1 0 0 -1 0 266)' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#1b9de2'/><stop offset='.16' stop-color='#1595df'/><stop offset='.67' stop-color='#0680d7'/><stop offset='1' stop-color='#0078d4'/></linearGradient></defs><path d='M235.68 195.46a93.73 93.73 0 01-10.54 4.71 101.87 101.87 0 01-35.9 6.46c-47.32 0-88.54-32.55-88.54-74.32A31.48 31.48 0 01117.13 105c-42.8 1.8-53.8 46.4-53.8 72.53 0 73.88 68.09 81.37 82.76 81.37 7.91 0 19.84-2.3 27-4.56l1.31-.44a128.34 128.34 0 0066.6-52.8 4 4 0 00-5.32-5.64z' transform='translate(-4.63 -4.92)' fill='url(#a)'/><path d='M235.68 195.46a93.73 93.73 0 01-10.54 4.71 101.87 101.87 0 01-35.9 6.46c-47.32 0-88.54-32.55-88.54-74.32A31.48 31.48 0 01117.13 105c-42.8 1.8-53.8 46.4-53.8 72.53 0 73.88 68.09 81.37 82.76 81.37 7.91 0 19.84-2.3 27-4.56l1.31-.44a128.34 128.34 0 0066.6-52.8 4 4 0 00-5.32-5.64z' transform='translate(-4.63 -4.92)' style='isolation:isolate' opacity='.35' fill='url(#b)'/><path d='M110.34 246.34A79.2 79.2 0 0187.6 225a80.72 80.72 0 0129.53-120c3.12-1.47 8.45-4.13 15.54-4a32.35 32.35 0 0125.69 13 31.88 31.88 0 016.36 18.66c0-.21 24.46-79.6-80-79.6-43.9 0-80 41.66-80 78.21a130.15 130.15 0 0012.11 56 128 128 0 00156.38 67.11 75.55 75.55 0 01-62.78-8z' transform='translate(-4.63 -4.92)' fill='url(#c)'/><path d='M110.34 246.34A79.2 79.2 0 0187.6 225a80.72 80.72 0 0129.53-120c3.12-1.47 8.45-4.13 15.54-4a32.35 32.35 0 0125.69 13 31.88 31.88 0 016.36 18.66c0-.21 24.46-79.6-80-79.6-43.9 0-80 41.66-80 78.21a130.15 130.15 0 0012.11 56 128 128 0 00156.38 67.11 75.55 75.55 0 01-62.78-8z' transform='translate(-4.63 -4.92)' style='isolation:isolate' opacity='.41' fill='url(#d)'/><path d='M156.94 153.78c-.81 1.05-3.3 2.5-3.3 5.66 0 2.61 1.7 5.12 4.72 7.23 14.38 10 41.49 8.68 41.56 8.68a59.56 59.56 0 0030.27-8.35 61.38 61.38 0 0030.43-52.88c.26-22.41-8-37.31-11.34-43.91-21.19-41.45-66.93-65.29-116.67-65.29a128 128 0 00-128 126.2c.48-36.54 36.8-66.05 80-66.05 3.5 0 23.46.34 42 10.07 16.34 8.58 24.9 18.94 30.85 29.21 6.18 10.67 7.28 24.15 7.28 29.52s-2.74 13.33-7.8 19.91z' transform='translate(-4.63 -4.92)' fill='url(#e)'/><path d='M156.94 153.78c-.81 1.05-3.3 2.5-3.3 5.66 0 2.61 1.7 5.12 4.72 7.23 14.38 10 41.49 8.68 41.56 8.68a59.56 59.56 0 0030.27-8.35 61.38 61.38 0 0030.43-52.88c.26-22.41-8-37.31-11.34-43.91-21.19-41.45-66.93-65.29-116.67-65.29a128 128 0 00-128 126.2c.48-36.54 36.8-66.05 80-66.05 3.5 0 23.46.34 42 10.07 16.34 8.58 24.9 18.94 30.85 29.21 6.18 10.67 7.28 24.15 7.28 29.52s-2.74 13.33-7.8 19.91z' transform='translate(-4.63 -4.92)' fill='url(#f)'/></svg>            </a>            <a href='https://www.opera.com/download' target='_blank'>                <svg enable-background='new 0 0 32 32' height='32px' id='Layer_1' version='1.0' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path d='M26.737,4.375c2.842,2.917,4.264,6.75,4.264,11.5c0,4.334-1.422,8.104-4.264,11.312   C23.895,30.396,20.295,32,15.938,32c-4.316,0-7.885-1.604-10.706-4.812C2.41,23.979,1,20.209,1,15.875   c0-4.75,1.39-8.583,4.171-11.5C7.95,1.459,11.54,0,15.938,0C20.295,0,23.895,1.459,26.737,4.375z M21.291,11.062   c-0.124-1.291-0.373-2.552-0.747-3.781c-0.373-1.229-0.944-2.177-1.711-2.844c-0.769-0.666-1.733-1-2.895-1   c-1.162,0-2.116,0.323-2.863,0.969C12.328,5.053,11.778,6,11.426,7.25S10.835,9.75,10.71,11c-0.124,1.25-0.187,2.771-0.187,4.562   c0,1.125,0.021,2.073,0.062,2.844c0.04,0.771,0.113,1.709,0.218,2.812c0.103,1.104,0.27,2.031,0.498,2.781   c0.228,0.75,0.538,1.49,0.934,2.219c0.394,0.729,0.902,1.281,1.524,1.656s1.348,0.562,2.179,0.562c0.829,0,1.565-0.188,2.21-0.562   c0.643-0.375,1.161-0.927,1.556-1.656C20.098,25.49,20.42,24.75,20.669,24s0.436-1.677,0.56-2.781   c0.125-1.104,0.197-2.052,0.219-2.844c0.02-0.791,0.03-1.729,0.03-2.812C21.478,13.854,21.416,12.354,21.291,11.062z' fill='#EA3939'/></g><g/><g/><g/><g/><g/><g/></svg>            </a>        </div>    </div></div>"
                );
                var language = document.documentElement.lang;
                var title = document.getElementById("banner-title");
                var subtitle = document.getElementById("banner-subtitle");
                var closeBtn = document.getElementById("banner-close-btn");
                switch (language) {
                    case "en":
                        title.innerText =
                            "Your web browser is old and not fully supported.";
                        subtitle.innerText =
                            "For a better experience, please use a modern browser:";
                        closeBtn.innerText = "Close";
                        break;
                    case "it":
                        title.innerText =
                            "Il tuo browser è vecchio e non pienamente supportato.";
                        subtitle.innerText =
                            "Per una migliore esperienza, si prega di utilizzare un browser moderno:";
                        closeBtn.innerText = "Chiudi";
                        break;
                    case "de":
                        title.innerText =
                            "Ihr Webbrowser ist veraltet und wird nicht vollständig unterstützt.";
                        subtitle.innerText =
                            "Für ein besseres Erlebnis verwenden Sie bitte einen modernen Browser:";
                        closeBtn.innerText = "Schließen";
                        break;
                    case "fr":
                        title.innerText =
                            "Votre navigateur Web est ancien et n'est pas entièrement pris en charge.";
                        subtitle.innerText =
                            "Pour une meilleure expérience, veuillez utiliser un navigateur moderne :";
                        closeBtn.innerText = "Fermer";
                        break;
                    case "es":
                        title.innerText =
                            "Su navegador es antiguo y no es totalmente compatible.";
                        subtitle.innerText =
                            "Para una mejor experiencia, utilice un navegador moderno:";
                        closeBtn.innerText = "Cerrar";
                        break;
                }
            }
        })();
        (function () {
            let sel = document.createElement("script");
            sel.type = "text/javascript";
            sel.defer = true;
            sel.async = true;
            let viewport = window.document.querySelector("meta[name=viewport]");
            if (
                document.documentElement.clientWidth >= 768 &&
                document.documentElement.clientWidth < 1024
            ) {
                viewport.setAttribute(
                    "content",
                    "width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=0"
                );
            }
            window.addEventListener("orientationchange", function () {
                let orientation =
                    (screen.orientation || {}).type ||
                    screen.mozOrientation ||
                    screen.msOrientation;
                if (
                    orientation === "portrait-secondary" ||
                    orientation === "portrait-primary"
                ) {
                    viewport.setAttribute(
                        "content",
                        "width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=0"
                    );
                }
                if (
                    orientation === "landscape-primary" ||
                    orientation === "landscape-secondary"
                ) {
                    viewport.setAttribute(
                        "content",
                        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                    );
                }
            });
            document.head.appendChild(sel);
        })();
        window.addEventListener("DOMContentLoaded", function () {
            [].forEach.call(
                document.querySelectorAll("a[data-link-type=document]"),
                function (e) {
                    e.download = e.href.replace(new RegExp(".*/([^/]*)$"), "$1");
                }
            );
        });