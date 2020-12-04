import React from 'react';
import './style.sass';

type TLoader = {
  secondary?: boolean
}

const Loader: React.FC<TLoader> = ({ secondary = false }: TLoader) => (
  <div className="loader">
    <div className={secondary ? 'secondary-circle' : 'circle'} />
  </div>
);

export default Loader;
