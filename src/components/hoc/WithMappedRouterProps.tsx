import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

type Props = {} & RouteChildrenProps;
type func = (props: Props) => {};
type MapRouterProps = undefined | func;

const getOwnProps = ({ location, history, match, ...props }: Props) => {
  return props;
};
type GetOwnProps = typeof getOwnProps;
type PassedComponentProps = ReturnType<GetOwnProps>;

export const withMappedRouterProps = (doMapRouterProps: MapRouterProps = undefined) => (
  Component: React.FC<PassedComponentProps>
) => {
  return (props: Props) => {
    let ownProps = getOwnProps(props);
    let routerProps: {} = {};
    if (doMapRouterProps) {
      routerProps = doMapRouterProps(props);
    }
    const componentProps = {
      ...ownProps,
      ...routerProps,
    };

    return <Component {...componentProps} />;
  };
};

export default withMappedRouterProps;
