import cardStyles from "../styles/card.module.css"
import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  link: string;
  header: string;
  description: string;
  techUsed: Array<string>;
  };

export default function Card(props: CardProps) {
  const imageStyle = {
    borderRadius: "1rem",
  };
    return (
      <a href={props.link} className={cardStyles.siteLink}>
        <div className={cardStyles.cardContainer}>

          <div className={cardStyles.cardInner}>
            
            <div className={cardStyles.cardFront}>
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
            </div>

            <div className={cardStyles.cardBack}>
                <h2 className={cardStyles.techUsed}>Language & Tools</h2>
                <div className={cardStyles.techList}>
                    <ul>
                      {props.techUsed.map((tech, index)=>{
                          return (
                            <li key={index}>{tech}</li>
                          )
                      })}
                    </ul>
                </div>
            </div>

          </div>

        </div> 

      </a>
    )
  }