import clsx from "clsx";
import { ReactNode } from "react";

type RootButtonInputProps = { 
  className?: string;
  children: ReactNode;
}
type ButtonInputProps = {
  className?: string;
  children: ReactNode;

}
export function RootButtonInput({className ,children}: RootButtonInputProps){
  return(
    <div className={clsx('w-full h-full rounded-[5px] ',className)}>
      {children}
    </div>
  );

}

export function ButtonInput({className,children}: ButtonInputProps){

  return(
    <button className={clsx('w-full h-full text-sm m-auto  font-bold',className)}>
      {children}
    </button>
  );
  
}