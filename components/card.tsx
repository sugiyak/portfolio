import cardStyles from "../styles/card.module.css"
import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  link: string;
  header: string;
  description: string;
  };

export default function Card(props: CardProps) {
  const imageStyle = {
    borderRadius: "1rem",
  };
    return (
      
      <div className={cardStyles.cardContainer}>
        <a href={props.link} className={cardStyles.siteLink}>
            <div className="siteImage">
            <Image
            src={props.src}
            alt={props.alt}
            height="200"
            width="350"
            style={imageStyle}
            />
            </div>
            <h2 className={cardStyles.siteHeader}>{props.header}</h2>
            <div className={cardStyles.siteDescription}>{props.description}</div>
        </a>
      </div> 
    )
  }