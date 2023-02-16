import { RootTextInput, TextInput } from "./TextInput";
import { MagnifyingGlass, MapPin } from "phosphor-react";
import { RootSelectInput, SelectInput } from "./SelectInput";
import { ButtonInput, RootButtonInput } from "./Button";
export function ContentSearch(){
  return(
    <div className="w-full flex flex-row items-center justify-center gap-6 bg-white rounded-[10px] ring-strokegray ring-1 p-10">
      <div className="w-72 h-12">
      <RootTextInput>
      <MagnifyingGlass className="text-redtemplate" size={24} />
      <TextInput placeholder="Pesquise por nome"/>
      </RootTextInput>
      </div>
      <div className="w-72 h-12">
      <RootSelectInput>
      <MapPin className="text-redtemplate" size={24} />
      <SelectInput/>
      </RootSelectInput>
      </div>
      <div className="w-36 h-12">
      <RootButtonInput className="bg-purpletemplate">
      <ButtonInput className="text-white">
      BUSCAR AGORA
      </ButtonInput>
      </RootButtonInput>
      </div>
    </div>
  );
}