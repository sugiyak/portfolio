import Layout from '../components/layout';
import Card from '../components/card';
import Header from '@/components/header';

function Home() {
    return (
        <Layout>
            <Header />
            <Card
                src="/images/secondnote.png"
                alt="Image of SecondNote.ai app"
                link="https://secondnote.ai"
                header="SecondNote.ai"
                description="AI-powered transcription service that converts video and audio files into accurate transcripts and automatically generates meeting minutes."
                techUsed={["Next.js", "TypeScript", "Google Gemini API", "Supabase", "FFmpeg", "Tailwind CSS"]}
            />
            <Card
                src="/images/chopper.png"
                alt="Image of Chopper app"
                link="https://text-chopper.netlify.app"
                header="Chopper"
                description="Translation editor that parses long text using Sentence Boundary Detection and lets you edit your translation on a simple yet elegant interface."
                techUsed={["Next.js", "TypeScript", "shadcn/ui"]}
            />
            <Card
                src="/images/hooked_magazine.png"
                alt="Image of a magazine website"
                link="https://hooked-magazine.com"
                header="Cultural Magazine"
                description="Fully responsive magazine site featuring smooth animations and modern design."
                techUsed={["Next.js", "TypeScript", "SCSS", "Supabase"]}
            />
            <Card
                src="/images/gmapTable.png"
                alt="Image of a map app"
                link="https://gmapstableviewer.netlify.app"
                header="Mapper"
                description="Search for multiple places and directions simultaneously. Export results directly to Excel for easy data management."
                techUsed={["React", "Google Maps API", "CSS", "React Bootstrap"]}
            />
            <Card
                src="/images/myBank.png"
                alt="Image of a bank app"
                link="https://kei-mybank.netlify.app"
                header="MyBank"
                description="A secure banking application with RESTful API powered by the MERN stack. Built as a capstone project for MIT's web development certificate program."
                techUsed={["React", "Node.js (Express)", "MongoDB Atlas", "Firebase Authentication", "AWS EC2", "Nginx", "Docker"]}
            />
        </Layout>
    )
}

export default Home;