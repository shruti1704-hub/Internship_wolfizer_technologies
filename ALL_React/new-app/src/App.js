import 'bulma/css/bulma.css';
import ProfileCard from './profileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';



function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital assistance</p>
                </div>
            </section>
            
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard 
                            title='Alexa' 
                            handle='@alexa99' 
                            image={AlexaImage} 
                            description='Alexa created by Amazon'/>
                        </div>

                        <div className='column is-3'>
                            <ProfileCard 
                            title='Cortano' 
                            handle='@cortano11' 
                            image={CortanaImage}
                            description='Cortano is created by Microsoft' />
                        </div>

                        <div className='column is-3'>
                            <ProfileCard 
                            title='Siri' 
                            handle='@siri101' 
                            image={SiriImage} 
                            description='Siri is created by Apple'/>
                        </div>
                    </div>
                </section>
            </div>




        </div>
    );
}

export default App;