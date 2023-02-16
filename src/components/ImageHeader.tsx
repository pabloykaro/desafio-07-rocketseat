import clsx from "clsx";
import bgHeaderImg from "../assets/ilustra-01.svg";
type ImageHeaderProps = {
  img: string;
  styleRoot?: string;
}
export function ImageHeader({img, styleRoot}: ImageHeaderProps){
  return(
      <div className={clsx('absolute',styleRoot)}>
      <img
      className="z-40" 
      src={img}/>
      </div>
  );
}