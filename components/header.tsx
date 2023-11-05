import headerStyles from "../styles/header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <article className={headerStyles.intro}>
            <h1>Kei Sugiyama</h1>
            <p>Hi, I am Kei Sugiyama, a certifiled fullstack engeneer. I have been working as a translator/marketing writer for the past 8 years and look forward to
                bringing my language and marketing skills to my new career as a software developer. I graduated from MIT’s full stack web development certificate program and have a background in
                full stack development. I enjoys making websites that can make meaningful contributions to people’s lives.</p>
        </article>
    )
}