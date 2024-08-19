load("config.js");
function execute(url) {
    let htm = "";    
    let doc = fetch(url).html();
    doc.select(".fiction-content .media").remove();
    doc.select("div.font-size").remove();
    htm = doc.select("div.body div.fiction").html();   
    
    return Response.success(htm);
}