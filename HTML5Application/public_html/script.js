
function toggle(anId) {
    node = document.getElementById(anId);

    if (node.style.visibility == "hidden") {
        // Contenu caché, le montrer
        node.style.visibility = "visible";
        node.style.height = "auto";			// Optionnel rétablir la hauteur
    } else {
        // Contenu visible, le cacher
        node.style.visibility = "hidden";
        node.style.height = "0";			// Optionnel libérer l'espace
    }
}
!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';

    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}
(document, "script", "twitter-wjs");



