import '../App.css'
import GitHub from '../../assets/projectimg/GitHub.png';
import BtCmpBdg from '../../assets/projectimg/BadgeBootcamp.png'

function Footer() {
    return (
        <section>
            <div className="main-footer">
                <div className="container-sm subDiv">
                    <a href='https://github.com/juanthtgotaway'><img src={GitHub} className="logo"></img></a>
                </div>
                <div className="container-sm subDiv">
                    <a href='https://www.credly.com/badges/ff70318d-5009-4d05-a27e-3873b9fe8b57/public_url'><img src={BtCmpBdg} className="logo"></img></a>
                </div>
            </div>
            
        </section>
    )
};

export default Footer;