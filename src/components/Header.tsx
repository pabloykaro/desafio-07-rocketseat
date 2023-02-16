import ilustraOneImage from "../assets/ilustra-01.svg";
import ilustraTwoImage from "../assets/ilustra-02.svg";

import { ContentSearch } from "./ContentSearch";
import { ImageHeader } from "./ImageHeader";
import { Text } from "./Text";

export function Header(){
  return(
    <div className="w-full relative flex flex-col items-center bg-whitetemplate ">
      <ImageHeader styleRoot="top-0 left-0" img={ilustraOneImage}/>
      <ImageHeader styleRoot=" bottom-0 right-0" img={ilustraTwoImage}/>

      <div className="w-full flex gap-10 flex-col items-center z-50 max-w-4xl  my-24">
        <div className="w-full max-w-2xl flex flex-col items-center ">
        <Text 
        size="sm"
        className="text-redtemplate font-medium">
          FIND YOUR BLOCK
        </Text>
        <Text 
        size="2xl"
        className="text-black text-center font-bold mt-4">
          Encontre os <Text className="text-purpletemplate">melhores blocos</Text> de carnaval de 2023
        </Text>
        </div>
      <ContentSearch/>
      </div>
    </div>
  );
}
