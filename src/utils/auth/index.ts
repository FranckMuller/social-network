export const updateLocalStorageAuthState = (updates: any) => {
  const newAuthState = {
    ...JSON.parse(window.localStorage.getItem('authState') || '{}'),
    ...updates,
  };
  window.localStorage.setItem('authState', JSON.stringify(newAuthState));
};

export const getAuthStateUpdates = (updates: any, authState: any) => {
  const updatedFields: Array<string> = Object.keys(updates);
  let newAuthState: any = {};
  updatedFields.forEach((field: string) => {
    if (authState[field] !== undefined && authState[field] !== updates[field]) {
      newAuthState[field] = updates[field];
    }
  });

  return Object.keys(newAuthState).length !== 0 ? newAuthState : null;
};
