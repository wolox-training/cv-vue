import React from 'react';
import Loader from 'app/components/Loader';

function WithLoading(Component) {
  return function WithLoadingComponent({ isLogin, ...props}){
    if(!isLogin) 
      return < Component {...props} />;
    return <Loader />
  }
}

export default WithLoading;
