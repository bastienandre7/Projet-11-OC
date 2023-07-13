import React from 'react';
import './home.css';
import Header from '../../Components/Header/header';
import Banner from '../../Components/Banner/banner';
import Features from '../../Components/Features/features';
import Chat from '../../assets/features/icon-chat.png';
import Money from '../../assets/features/icon-money.png';
import Security from '../../assets/features/icon-security.png';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Features image={Chat} title={"You are our #1 priority"} 
                    texte={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes"} />
                    <Features image={Money} title={"More savings means higher rates"} 
                    texte={"The more you save with us, the higher your interest rate will be!"} />
                    <Features image={Security} title={"Security you can trust"} 
                    texte={"We use top of the line encryption to make sure your data and money is always safe."} />
                </section>
            </main>
        </>
    )
}

export default Home