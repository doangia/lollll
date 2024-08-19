load("config.js");

function execute(url) {    
    let doc = fetch(url).html();
    if (doc) {
        let info = doc.select(".book-info");
        let coverImg = info.select("div.cover img.cover").first().attr("src");        
        return Response.success({
            name: info.select("div.fiction div.title").text(),
            cover: coverImg,
            author: info.select("div.fiction div.author").text().replace("作者：", ""),
            description: info.select("div.content div.brief").text(),
            detail: info.select("div.chapters").html(),
            host: BASE_URL,
            url: url,
        });
    }

    return null;

}