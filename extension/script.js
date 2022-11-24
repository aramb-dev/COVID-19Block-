url = window.location.toString()

function nukePage(){
    document.body.remove()
    document.title = "BLOCKED"
}

function removeYouTube(){
    strs = document.querySelectorAll("yt-formatted-string")

    warning = document.querySelector("ytd-clarification-renderer")
    if(warning != null){
        warning.remove()
    }

    for (var i = 0; i < strs.length; ++i){
        el = strs[i]
        str = el.innerText
        if (str.match(/Coronavirus|Coronavirus|pandemic|Coronavirus symptoms|Coronavirus news|Coronavirus USA|Coronavirus China|Coronavirus Italy|Coronavirus recession|Coronavirus update|Coronavirus map|Coronavirus vaccine|Coronavirus pets|COVID-19|COVID-19 live updates|Pandemic|Face masks|Respirator masks|N95 face masks/gi)){

            vidResult = el.closest("ytd-video-renderer")
            if (vidResult != null){
                vidResult.remove()
            }

            vidResult = el.closest("ytd-rich-item-renderer")
            if (vidResult != null){
                vidResult.remove()
            }
            if (el !=null){
                el.remove()
            }
        }

    }
}

function removeGoogle(){
    strs = document.querySelectorAll(".g")

    for (var i = 0; i < strs.length; ++i){

        el = strs[i]
        str = el.textContent
        if (str.match(/Coronavirus|Coronavirus|pandemic|Coronavirus symptoms|Coronavirus news|Coronavirus USA|Coronavirus China|Coronavirus Italy|Coronavirus recession|Coronavirus update|Coronavirus map|Coronavirus vaccine|Coronavirus pets|COVID-19|COVID-19 live updates|Pandemic|Face masks|Respirator masks|N95 face masks/gi)){
            el.remove()
        }

    }

    strs = document.querySelectorAll(".mod")

    for (var i = 0; i < strs.length; ++i){
        el = strs[i]
        if (str.match(/Coronavirus|Coronavirus|pandemic|Coronavirus symptoms|Coronavirus news|Coronavirus USA|Coronavirus China|Coronavirus Italy|Coronavirus recession|Coronavirus update|Coronavirus map|Coronavirus vaccine|Coronavirus pets|COVID-19|COVID-19 live updates|Pandemic|Face masks|Respirator masks|N95 face masks/gi)){
            el.remove()
        }
        else{
            str = el.textContent
            if (str.match(/Coronavirus|Coronavirus|pandemic|Coronavirus symptoms|Coronavirus news|Coronavirus USA|Coronavirus China|Coronavirus Italy|Coronavirus recession|Coronavirus update|Coronavirus map|Coronavirus vaccine|Coronavirus pets|COVID-19|COVID-19 live updates|Pandemic|Face masks|Respirator masks|N95 face masks/gi)){
                el.remove()
            }
        }

    }

    if (url.match(/Coronavirus|Coronavirus|pandemic|Coronavirus symptoms|Coronavirus news|Coronavirus USA|Coronavirus China|Coronavirus Italy|Coronavirus recession|Coronavirus update|Coronavirus map|Coronavirus vaccine|Coronavirus pets|COVID-19|COVID-19 live updates|Pandemic|Face masks|Respirator masks|N95 face masks/gi)){
        kp_wp_tab = document.querySelectorAll(".kp-wholepage")
        for (var i = 0; i < kp_wp_tab.length; ++i){
            el = kp_wp_tab[i]
            el.remove()
        }

        strs = document.querySelectorAll(".hide-focus-ring")
        for (var i = 0; i < strs.length; ++i){
            el = strs[i]
            el.remove()
        }
    }

}

function instaRemove(){
    strs = document.querySelectorAll("a, p, h1, h2, h3, h4, h5")

    for (var i = 0; i < strs.length; ++i){
        el = strs[i]
        str = el.textContent
        if (str.match(/Coronavirus|Coronavirus|pandemic|Coronavirus symptoms|Coronavirus news|Coronavirus USA|Coronavirus China|Coronavirus Italy|Coronavirus recession|Coronavirus update|Coronavirus map|Coronavirus vaccine|Coronavirus pets|COVID-19|COVID-19 live updates|Pandemic|Face masks|Respirator masks|N95 face masks/gi)){
            el.remove()
        }
    }
}

if(url.includes("youtube.com")){
    window.setInterval(removeYouTube, 1000);
}
else if(url.includes("worldometers.info/coronavirus") ||
    url.includes("who.int/health-topics/coronavirus")){
    nukePage()
}
else if(url.includes("google")){
    removeGoogle()
    instaRemove()
}
else{
    window.setInterval(instaRemove, 1000)
    instaRemove()
}