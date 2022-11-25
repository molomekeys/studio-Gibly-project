import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SingleMovie(props) {
    const [isCardOpen, setCardOpen] = useState(false)
    function handleClick(e) {


        setCardOpen(prev => !prev);
        isCardOpen ? window.scrollTo({ top: 0 }) : window.scrollTo({ top: 0 });
    }
    let styleOpen = {
        position: isCardOpen && 'absolute', zIndex: isCardOpen && '100',
        width: isCardOpen && '100%', backgroundColor: isCardOpen && 'rgba(255,255,245,1)',
        justifySelf: isCardOpen && 'self-start', left: isCardOpen && '0', top: isCardOpen && '0',
    }

    return (
        <motion.div className='singleMovie' onClick={handleClick} style={styleOpen}>
            {isCardOpen && <div className='cardFullDisplay' >
                <>
                    <h2>{props.title}</h2>
                    <h3>{props.origineTitle}</h3>
                </>
                <div className='columnContainer'>
                    <div>
                        <p style={{ paddingBottom: '30px' }}>{props.description}</p>
                        <h4>Produced by : {props.producer} on {props.releasedDate}</h4>
                    </div>
                    <img src={props.imageUrl} style={{ width: isCardOpen && '400px', height: isCardOpen && '500px' }} />
                </div>
                <div>

                    <img src={props.coverImg} style={{
                        width: '100%',
                        height: 'auto', marginTop: '30px'
                    }} />
                </div>
            </div>}
            {isCardOpen ? '' : <>
                <img src={props.imageUrl} style={{ width: isCardOpen && '200px' }} />
                <div>
                    <h3>{props.title}</h3>
                    <small>{props.righting} / 100</small>
                </div>
                <smal>{props.origineTitle}</smal>
            </>}
        </motion.div>
    )
}