export const verifyFile = (files) => {
  const imageMaxSize = 2000000;
  if (files && files.length > 0) {
    const currentFile = files[0];
    const currentFileSize = currentFile.size;
    return currentFileSize > imageMaxSize ? false : true;
  }
};
