var popup = document.createElement("div");
popup.innerHTML = "<h1>moi</h1>";
popup.setAttribute("class", "redditor-info");
popup.setAttribute("id", "redditor-info");
document.body.appendChild(popup);

document.addEventListener("mousemove", positionPopup);

function positionPopup(event) {
    const srcElement = event.target;

    /* Look for string "reddit.com/user" in links */
    if (srcElement.nodeName == "A" && srcElement.hasAttribute("href") && srcElement.getAttribute("href").indexOf("reddit.com/user/") != -1) {
        const x = event.screenX;
        const y = event.screenY;
        
        document.getElementById("redditor-info").style.left = x + "px";
        document.getElementById("redditor-info").style.top = (srcElement.getBoundingClientRect().top + document.body.scrollTop) + "px";
        document.getElementById("redditor-info").style.visibility = "visible";
    } else {
        document.getElementById("redditor-info").style.visibility = "hidden";
    }
}

