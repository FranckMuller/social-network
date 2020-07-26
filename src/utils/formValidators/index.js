export const requiredFiledCreator = (message) => {
  return (value) => {
    if (!value) return message;
    return undefined;
  };
};
