import { clerkClient, withAuth } from 'gatsby-plugin-clerk/api';

interface ContactBody {
  message: string;
}

const handler = withAuth(async (req, res) => {
  const users = await clerkClient.users.getUserList();
  res.send({ title: `We have ${users.length} users`, auth: req.auth });
});

export default handler;
