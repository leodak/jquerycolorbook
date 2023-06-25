(function ($) {

    var dir = "jquerycolorbook/images/";
    var fileextension = ".png";
    $.get({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //List all .png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                let imgRowHtml = getImgRow("", dir + filename);
                $("#imgGallery").append(imgRowHtml);
            });
        }
    });

    function getImgRow(link, imgURL) {
        var imgRow = `<div class='col-lg-3 col-md-4 col-6'><a href='${link}' class='d-block mb-4 h-100'><img class='img-fluid img-thumbnail' src='${imgURL}' alt=''></a></div>`
        return imgRow
    }
}(jQuery));