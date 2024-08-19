load('config.js');
function execute(url, page) {
    if (!page) page = '1';

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();        
        let novelList = [];
        var next = "";        
        next = doc.select(".pager").select("a.next").attr("href");
        if (next) {
            next = "https://xchina.biz" + next;
        }
        doc.select("div.list > div.fiction").forEach(e => {
            let cover = e.select("a > img").first().attr("src");            
            novelList.push({
                name: e.select("div:eq(1) > a").text(),
                link: e.select("div.brief > a").attr("href"),
                cover: cover,
                description: e.select("div.brief > a").first().text(),
                host: BASE_URL,
            });
        });
        

        return Response.success(novelList, next);
    }
    return null;
}