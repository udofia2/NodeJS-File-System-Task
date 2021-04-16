const fetch = require('node-fetch')
const fs = require('fs')


const dataFetchingScript = async (siteUrl) => {
  
  try {

    const resp = await fetch(siteUrl);

    //check server error
    if (resp.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await resp.json();

    //writting response to file in the result directory
    await fs.writeFile('./result/post.json', JSON.stringify(user), (err) => {

      //check error while writing file
      if(err) throw err

      console.log('file has been saved')
      
    })

  } catch (err) {
    console.error(err);
  }
}

dataFetchingScript('http://jsonplaceholder.typicode.com/posts')