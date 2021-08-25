import nextConnect from 'next-connect';

export default nextConnect({
  onNoMatch(req, res) {
    res
      .status(405)
      .json({ success: false, message: `${req.method} Method  not allowed` });
  },
  onError(error, req, res) {
    res.status(501).json({ success: false, error: error.message });
  },
});
