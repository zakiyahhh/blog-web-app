import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaDiscord } from 'react-icons/fa'
import './footer.css'

function FooterIcon({ icon }) {
    const Icon = icon
    return (
        <div className='icon-wrapper'>
            <Icon />
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className='social-wrapper'>
                    <FooterIcon icon={FaFacebookF} />
                    <FooterIcon icon={FaTwitter} />
                    <FooterIcon icon={FaInstagram} />
                    <FooterIcon icon={FaTelegram} />
                    <FooterIcon icon={FaDiscord} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright o 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer