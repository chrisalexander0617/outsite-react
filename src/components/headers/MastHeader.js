import React from 'react';

function MastHeader(props){
    const styles = {
        background:`url(${props.bgImg})`,
        height:'400px',
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'100vw'
    }
    return (
        <>
            <header style={styles}>
            </header>
        </>
    )
}

export default MastHeader 