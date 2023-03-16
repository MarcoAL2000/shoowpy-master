import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    LeftContainer,
    NavbarContainer,
    NavbarExtendContainer,
    NavbarLink,
    NavbarLinkExtend,
    NavInnerContainer,
    OpenLinkButton,
    RightContainer
} from './styles'

interface interfData {
    id: number,
    categoria: string,

}

export const Menu = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [dataMenu, setMenu] = useState<Array<interfData>>([]);

    useEffect(() => {

        axios.get('http://localhost:3001/categorias')
        .then((response) => {
            setMenu(response.data)
        })
        .catch((erro) => {
            console.log(erro)
        })

    }, [])

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavInnerContainer>
                <LeftContainer>

                    <OpenLinkButton
                        onClick={() => {
                            setExtendNavbar((atual) => !atual)
                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinkButton>

                    <NavbarLinkExtend
                        to='/'
                    >
                        Shoowpy
                    </NavbarLinkExtend>

                    <NavbarLink to='/'>Home</NavbarLink>
                    {
                        dataMenu.map((menu) => (
                            <NavbarLink
                                key={menu.id}
                                to='/'
                            >
                                {
                                    menu.categoria
                                }
                            </NavbarLink>
                        ))

                    }
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkExtend to='/'>
                        Carrinho
                    </NavbarLinkExtend>
                </RightContainer>
            </NavInnerContainer>

            {
                extendNavbar && (
                    <NavbarExtendContainer>
                        {
                            dataMenu.map((menu) => (
                                <NavbarLinkExtend
                                    key={menu.id}
                                    to='/'
                                >
                                    {
                                        menu.categoria
                                    }
                                </NavbarLinkExtend>
                            ))
                        }
                    </NavbarExtendContainer>
                )

            }

        </NavbarContainer>

    )
}
