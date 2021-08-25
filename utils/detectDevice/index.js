export const detectDevice = context => {
  const UA = context?.req?.headers['user-agent'];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );

  return isMobile;
};
