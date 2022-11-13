import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function withRouter(Component: any) {
  const Wrapper = (props: Record<any, any>) => {
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component
        navigate={navigate}
        params={ params }
        {...props}
      />
    );
  };

  return Wrapper;
};
