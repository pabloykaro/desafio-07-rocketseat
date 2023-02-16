import { MapPin } from "phosphor-react";
import imgOne from "../assets/img-01.jpeg";
import { Text } from "./Text";

interface CardProps {
  props: {
    img: string;
    title: string;
    subtitle: string;
    location: string;
  }
}

export function Card({props}: CardProps){
  return(
    <div className="w-96 pb-4 rounded-[10px] overflow-hidden ring-1 ring-strokegray">
      <figure>
        <img className="h-36 w-full object-cover" src={props.img}/>
        <figcaption className="flex flex-col gap-4 w-full pl-4 pt-4">
         <Text size="md" className="font-bold leading-tight">
          {props.title}
         </Text>
         <Text size="sm" className="font-normal text-black/75 leading-snug">
          {props.subtitle}
         </Text>
          <div className="flex gap-2 flex-row items-center">
          <MapPin className="text-redtemplate" size={24} />
          <Text size="sm" className="font-normal text-black/75 leading-snug">
            {props.location}
         </Text>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}