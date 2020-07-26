import React from 'react';

export const withMappedRouterProps = (mapRouterProps = null) => (Component) => {
  return ({ isAuthed, ...props }) => {
    const routerProps = mapRouterProps ? mapRouterProps(props) : null;

    return <Component {...routerProps} />;
  };
};

export default withMappedRouterProps;
