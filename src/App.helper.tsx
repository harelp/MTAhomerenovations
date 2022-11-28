export const scrollToref = (ref: any) => {
  if (ref.current.className === 'appBar') {
    window.scrollTo(0, 0);
    return;
  }

  window.scrollTo(0, ref.current.offsetTop);
};
