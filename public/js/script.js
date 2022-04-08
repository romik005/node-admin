jQuery(document).ready(function(){
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);

    if (lastPathSegment == 'dashboard') {
        jQuery('#dashbordmenu').addClass('active');
    }
    else if (lastPathSegment == 'user') {
        jQuery('#user').addClass('active');
    }
    else if (lastPathSegment == 'setting') {
        jQuery('#setting').addClass('active');
    }
    else if (lastPathSegment == 'redeem') {
        jQuery('#redeem').addClass('active');
    }
    else if (lastPathSegment == 'adssetting') {
        jQuery('#adssetting').addClass('active');
    }
    else if (lastPathSegment == 'coinsetting') {
        jQuery('#coinsetting').addClass('active');
    }
    else if (lastPathSegment == 'withdraw') {
        jQuery('#withdraw').addClass('active');
    }   
    else if (lastPathSegment == 'message') {
        jQuery('#message').addClass('active');
    }   
    else if (lastPathSegment == 'slotsetting') {
        jQuery('#slotsetting').addClass('active');
    }   
    else if (lastPathSegment == 'notification') {
        jQuery('#notification').addClass('active');
    }
    
});