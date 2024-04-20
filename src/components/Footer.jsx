import '../App.css'
import GitHub from '../../assets/projectimg/GitHub.png';


function Footer() {
    return (
        <section>
            <div className="main-footer">
                <div className="container-sm subDiv">
                    <a href='https://github.com/juanthtgotaway'><img src={GitHub} className="logo"></img></a>
                </div>
            </div>
        </section>
    )
};

export default Footer;