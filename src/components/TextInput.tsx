import { ReactNode } from "react";

type RootTextInputProps = { 
  children: ReactNode;
}

type TextInputProps = { 
  placeholder: string;
}
export function RootTextInput({children}: RootTextInputProps){
  return(
    <div className="w-full flex flex-row items-center gap-3 px-3 h-12 bg-colorinput rounded-[5px]">
        {children}
    </div>
  );
}



export function TextInput({placeholder}: TextInputProps){
  return(
    <input type="text" className="w-full bg-transparent text-sm placeholder:text-placeholdercolor placeholder:text-sm placeholder:font-normal h-full outline-none" placeholder={placeholder}/>
  );
}

