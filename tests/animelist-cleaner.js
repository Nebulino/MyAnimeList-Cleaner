var index = 0;
if (confirm(`Are you sure you want to DELETE ALL your entries in this section?`)) {
    $("#list-container > div.list-block > div > table > tbody > tr.list-table-data > td.data.image > a").each(function () {
        var animeLink = $(this).attr("href");
        var animeId = animeLink.substring(
            animeLink.lastIndexOf("anime/") + 6,
            animeLink.lastIndexOf("/")
        );
        var deleteUrl = `/ownlist/anime/${animeId}/delete`;
        setTimeout(function () {
            console.log(`[DELETE] Executing "${deleteUrl}"...`);
            $.ajax({
                type: "POST",
                url: deleteUrl
            });
        }, index * 1000);
        index++;
    });
}