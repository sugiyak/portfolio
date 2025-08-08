import headerStyles from "../styles/header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <article className={headerStyles.intro}>
            <h1>Kei Sugiyama</h1>
            <p>Hi, I am Kei Sugiyama, a Technical Localization Specialist and full-stack developer with 10+ years of experience in gaming and technical translation. 
                Currently working as an AI Data Editor, I evaluate AI model responses and develop localization workflows. I combine my expertise in 
                cross-cultural communication with programming skills gained from MIT&apos;s full-stack web development certificate program to create meaningful digital solutions.</p>
        </article>
    )
}