export default async (req, res) => {
  const apiBaseUrl = process.env.apiBaseUrl;

  const headers = {
    'Content-Type': 'application/json'
  };

  // Fetch master ref
  const masterRefResp = await fetch(apiBaseUrl + '/api/v2', {
    method: 'GET',
    headers: headers
  });
  const refJson = await masterRefResp.json();
  if (refJson.errors) {
    console.error(refJson.errors);
    throw new Error('Failed to fetch Master ref');
  }

  headers['Prismic-Ref'] = refJson.refs[0].ref;
  const result = await fetch(apiBaseUrl + '/graphql?query=' + req.body.query, {
    method: 'GET',
    headers: headers
  });
  const json = await result.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  const data = json.data;

  res.statusCode = 200;
  res.json(data);
};
