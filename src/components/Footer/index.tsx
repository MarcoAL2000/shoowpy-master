import { FooterContainer, FooterNome } from "./style";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
export const Footer = () => {
    return (
        <>
        <FooterContainer>


                <FooterNome
                    className="text-center"
                >Densenvolvido por Marco Antonio - {new Date().getFullYear()}</FooterNome>
                         <div
                    className="d-flex justify-content-center"
                >
                    <FaTwitter style={{ margin: 10 }} color='#FFFF' />
                    <FaInstagram style={{ margin: 10 }} color='#FFFF' />
                    <FaFacebook style={{ margin: 10 }} color='#FFFF' />
                </div>
                </FooterContainer>
        </>
    )
}
