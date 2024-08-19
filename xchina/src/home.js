load('config.js');
function execute() {
    return Response.success([
        {title: "Mới cập nhật", script: "top.js", input: BASE_URL + "/fictions/1.html"},
        {title: "Đọc nhiều", script: "top.js", input: BASE_URL + "/fictions/sort-read/1.html"},
        {title: "Đề cử", script: "top.js", input: BASE_URL + "/fictions/tag-编辑推荐/1.html"},
        {title: "Bình luận nhiều", script: "top.js", input: BASE_URL + "/fictions/sort-comment/1.html"}
    ]);
}


