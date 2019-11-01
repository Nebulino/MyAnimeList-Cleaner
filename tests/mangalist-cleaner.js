var index = 0;
if (confirm(`Are you sure you want to DELETE ALL your entries in this section?`)) {
    $("#list-container > div.list-block > div > table > tbody > tr.list-table-data > td.data.image > a").each(function () {
        var mangaLink = $(this).attr("href");
        var mangaId = mangaLink.substring(
            mangaLink.lastIndexOf("manga/") + 6,
            mangaLink.lastIndexOf("/")
        );
        var deleteUrl = `/ownlist/manga/${mangaId}/delete`;
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