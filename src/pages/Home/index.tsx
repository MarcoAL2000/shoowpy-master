import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { Card } from "../../components/Card";

export const Home = () => {
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }}
            >

                <h2>Produtos em destaque</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Card
                        dados='Carol'
                    />

                </div>
            </div>
            <Footer />
        </>

    )
}
