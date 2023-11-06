import Layout from '../components/layout';
import Card from '../components/card';
import Header from '@/components/header';

function Home() {
    return (
        <Layout>
            <Header />
            <Card
                src="/images/chopper.png"
                alt="Image of Chopper app"
                link="https://text-chopper.netlify.app"
                header="Chopper"
                description="Translation editer that parse long text using Sentence Boundry Detection and let you edit your translation on simple yet elegent interface."
                techUsed={["Next.js", "Typescript", "shdcn"]}
            />
            <Card
                src="/images/hooked_magazine.png"
                alt="Image of a magazine website"
                link="https://hooked-magazine.com"
                header="Cultural magazine"
                description="Fully responsive Magazine site with some animations."
                techUsed={["Next.js", "Typescript", "SCSS", "Supabase"]}
            />
            <Card
                src="/images/gmapTable.png"
                alt="Image of a map app"
                link="https://gmapstableviewer.netlify.app"
                header="Mapper"
                description="Search for multiple search results for places/directions at once. Copy and paste results to excel."
                techUsed={["React", "Google Maps API", "CSS", "React Bootsrap"]}
            />
            <Card
                src="/images/myBank.png"
                alt="Image of a bank app"
                link="https://kei-mybank.netlify.app"
                header="My bank"
                description="A secure app with RESTful API powered by MERN stack. Made as capstone project in MIT web development certificate program."
                techUsed={["React", "Node.js(Express)", "MongoDB Altas", "Firebase Authentication", "AWS EC2", "Nginx", "Docker"]}
            />
        </Layout>
    )
}

export default Home;