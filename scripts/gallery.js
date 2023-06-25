(function ($) {

    var dir = "https://api.github.com/repos/leodak/jquerycolorbook/contents/images";
    var fileextension = ".jpg";
    $.get({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //List all .png file names in the pagefilter((a) => { return a.name.indexOf(fileextension).length > 0})
            data.map(function (a) {
                let imgRowHtml = getImgRow("./coloring.html?i=" + a.download_url, a.download_url);
                $("#imgGallery").append(imgRowHtml);
            });
        }
    });

    function getImgRow(link, imgURL) {
        var imgRow = `<div class='col-lg-3 col-md-4 col-6'><a href='${link}' class='d-block mb-4 h-100'><img class='img-fluid img-thumbnail' src='${imgURL}' alt=''></a></div>`
        return imgRow
    }
}(jQuery));