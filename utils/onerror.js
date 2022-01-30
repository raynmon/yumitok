import db from './db';

const onError = async (err, req, res) => {
  await db.disconnect();
  res.status(500).send({ message: err.toString() });
};
// eslint-disable-next-line react-hooks/exhaustive-deps
export default onError;
