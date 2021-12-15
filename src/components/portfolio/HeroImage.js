import './../../css/portfolio/HeroImage.css'

const HeroImage = ({ heading, text }) => {
    return (
        <div className='hero-img'>
            <div className='heading'>
                <h1>{heading}</h1>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default HeroImage
