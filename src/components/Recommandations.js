import '../styles/Banner.css'

function Recommandations() {
    
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if(!isSpring) {
        return <div className='recommandation'>C'est le printemps ☀️</div>
    } else {
        return <div className='recommandation'>C'est pas le printemps ⚡️</div>
    }
}

export default Recommandations