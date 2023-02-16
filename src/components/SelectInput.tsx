import { ReactNode } from "react";

type RootSelectInputProps = { 
  children: ReactNode;
}
type SelectInputProps = {}

export function RootSelectInput({children}: RootSelectInputProps){
  return(
    <div className="w-full flex flex-row items-center gap-3 px-3 h-12 bg-colorinput rounded-[5px]">
        {children}
    </div>
  );
}



export function SelectInput(){
  return(
    <select className="w-full text-sm h-full text-placeholdercolor font-normal bg-transparent outline-none ">
      <option id="selected-city" disabled selected>Selecione uma cidade:</option>
      <option>Pacajus</option>
      <option>Fortaleza</option>
      <option>Eusebio</option>
      <option>Itaitinga</option>
      <option>Horizonte</option>
      <option>São Paulo</option>
      <option>Rio de Janeiro</option>
    </select>
  );
}

