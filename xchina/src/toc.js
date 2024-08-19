load('config.js');
function execute(url) {  

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let chapList = [];        
        doc.select("div.content .chapters div").forEach(e => {
            var ch = e.select("a").first().text();            
            chapList.push({
                name: ch,
                url: BASE_URL + e.select("a").first().attr("href"),
                pay: false,
                host: BASE_URL,
            });
        });
        
        return Response.success(chapList);
    }

    return null;
}