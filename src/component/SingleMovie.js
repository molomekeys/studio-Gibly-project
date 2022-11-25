import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SingleMovie(props) {
    const [isCardOpen, setCardOpen] = useState(false)
    function handleClick() {
        setCardOpen(prev => !prev)
    }
    let styleOpen = {
        position: isCardOpen && 'absolute', zIndex: isCardOpen && '100',
        width: isCardOpen && '100%', backgroundColor: isCardOpen && 'lightgray',
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
                    <p>{props.description}</p>
                    <img src={props.imageUrl} style={{ width: isCardOpen && '400px' }} />
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