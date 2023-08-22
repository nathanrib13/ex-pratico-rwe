import Container from "./style";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"



const Dashboard = () => {

    return (
        <Container>
            <Header />
            <section>
                <div>

                </div>
                <div>
                    <h2>ALL CONTACTS</h2>
                    <button > + New Contact</button>
                </div>

            </section>
            <Footer />
        </Container>
    );
};

export default Dashboard;