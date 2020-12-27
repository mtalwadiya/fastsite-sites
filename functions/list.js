const { createClient } = require("@astrajs/collections")

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  })

  let collection = "";
  let opt = {};

  if(event.queryStringParameters.site){
    collection = event.queryStringParameters.site;
  }

  if(event.queryStringParameters.cat){
    opt = { category: { $eq: event.queryStringParameters.cat } }
    
  }

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {

    const res = await users.find(opt);
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}