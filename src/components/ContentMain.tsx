import { ButtonInput, RootButtonInput } from "./Button";
import { Card } from "./Card";
import { Text } from "./Text";
import BlocosCarnavel from "../mocks/blocos.json";
export function ContentMain(){
  return (
    <div className="w-full max-w-7xl  pb-2 flex flex-col items-center justify-center ">
      <div className="w-full px-12 flex justify-between items-center flex-row ">
        <Text size="xl" className="font-bold">Blocos recomendados</Text>
        <div className="w-48 flex flex-row rounded-[6px] ring-1 ring-strokegray flex-nowrap gap-1 h-12 p-2">
        <RootButtonInput className="bg-purpletemplate">
          <ButtonInput className="text-white">
              LISTA
          </ButtonInput>
      </RootButtonInput>
      <RootButtonInput className="bg-white">
          <ButtonInput className="text-purpletemplate">
              MAPA
          </ButtonInput>
      </RootButtonInput>
        </div>
      </div>
      <div className="w-full justify-center flex flex-row flex-wrap gap-4 mt-10">
        {
          BlocosCarnavel.map((item) =>  <Card props={item}/>)
        }
      </div>
    </div> 
  );
}