$aia = jQuery.noConflict();
$aia(document).ready(runMenu);

function runMenu() {
    headerImage();
}


function headerImage() {
    if (document.location.pathname == '/residential') {
        $aia('header#head-internal').css('background-image', 'url(/images/residential.jpg)');
    }
    if (document.location.pathname == '/commercial') {
        $aia('header#head-internal').css('background-image', 'url(/images/commercial.jpg)');
    }
    if (document.location.pathname == '/work') {
        $aia('header#head-internal').css('background-image', 'url(/images/work.jpg)');
    }
    if (document.location.pathname == '/contact') {
        $aia('header#head-internal').css('background-image', 'url(/images/haunted-o.jpg)');
    }
}


