import style from './Container.module.scss';

const Container = ({specificClassName, children}) => {
  return ( <div className={specificClassName || style.container}>
    {children}
  </div> );
}
 
export default Container;