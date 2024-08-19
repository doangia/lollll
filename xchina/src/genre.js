load('config.js');
function execute() {

    let response = fetch("https://xchina.biz/fictions.html");
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        doc.select('div.series a').forEach(e => {
            genres.push({
                title: e.select("div").text(),
                input: e.attr('href'),
                script: "gen.js"
            });
        });

        return Response.success(genres);
    }

    return null;
}