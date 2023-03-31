import Layout from '../components/layout';
import Card from '../components/card';

function Home () {
    return (
        <Layout>
            <Card
            src="/images/gmapTable.png"
            alt="Image of a map app"
            link="https://gmapstableviewer.netlify.app"
            header="Google map tablizer"
            description="This app let you search for multiple search results for places/directions at once. Made with Google maps api and React"
            />
            <Card
            src="/images/myBank.png"
            alt="Image of a bank app"
            link="https://kei-mybank.netlify.app"
            header="My bank"
            description="[Temporaly slow. Please be patient]This app uses React, Node.js(Express), MongoDB, Firebase Authentication. It demonstrate my skill of creatig a secure app with RESTful API with MERN stack."
            />
            <Card
            link="#"
            src="/images/portfolio.png"
            alt="Image of a portfolio website"
            header="Portfolio"
            description="This responsive website is built with Next.js and Typescript to demonstrate my frontend skills."
            />
        </Layout>
    )
}

export default Home;