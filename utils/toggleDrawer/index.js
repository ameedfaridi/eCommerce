export const toggleDrawer = (open, setOpen) => event => {
  if (
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setOpen(open);
};
