const fs = require("fs");

var list_data = [];

var folderName = fs.readdirSync("./static/news_file");

folderName.forEach(fold => {
  console.log(fold);
  var fileList = fs.readdirSync(`./static/news_file/${fold}`);
  fileList.forEach(files => {
    console.log(`./static/news_file/${fold}/${files}`);

    var fileContent = fs.readFileSync(`./static/news_file/${fold}/${files}`);
    fileContent = JSON.parse(fileContent);

    for (let ind = 0; ind < fileContent.length; ind++) {
      list_data.push(fileContent[ind]["title"])
    }

  })

})

fs.writeFileSync("./static/news_title/title.json", JSON.stringify(list_data));

