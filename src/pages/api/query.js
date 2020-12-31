import { fetchAPI } from '../../utils/utils';

export default async (req, res) => {
  const data = await fetchAPI(req.body.query);

  res.statusCode = 200;
  res.json(data);
};
