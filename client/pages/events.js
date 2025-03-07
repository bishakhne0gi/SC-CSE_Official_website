import styles from '../styles/Event.module.css';
import Event from '../component/Event';
import Navbar from '../component/Navbar';

import { eventsData } from '../assets/data';
const events = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className={styles.events_container}>

                    <div className={styles.events_header}>
                        Events
                    </div>


                    <div className={styles.each_events_wrap}>
                        <div className={styles.events_cards}>
                            {eventsData.map((eventsData, idx) => (
                                <Event
                                    key={idx}
                                    img={eventsData.img}
                                    heading={eventsData.heading}
                                    content={eventsData.content}
                                    date={eventsData.date}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events;


