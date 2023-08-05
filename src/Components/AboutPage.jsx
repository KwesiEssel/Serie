import Logo from './Logo.png';


const user = {
    name: 'Hedy Lamarr',
    imageSize: 40,
};
const  AboutPage = () => {
    return (
        <>
            <img className="avatar"
                 src={Logo}
                 alt={'Photo of ' + user.name}
                 style={{ width: `${user.imageSize}px`, height: `${user.imageSize}px` }} // Hier setzen wir die Bildgröße
            />
        </>
    );
}

export default AboutPage