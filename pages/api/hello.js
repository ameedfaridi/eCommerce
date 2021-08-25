import db from '../../db/models/index';
import handler from '../../src/handler';

export default handler
  .get(async (req, res) => {
    const users = await db.users.findAll();
    res.status(200).json({ users });
  })
  .post(async (req, res) => {});
