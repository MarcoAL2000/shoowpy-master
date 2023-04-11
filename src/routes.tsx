import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Produto } from './pages/Produto'
import { Carrinho } from './pages/Carrinho'
import { Categoria } from './pages/Categorias'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/produto/:id'
                    element={<Produto />}
                />
                <Route
                    path='/categoria/:id'
                    element={<Categoria />}
                />
                <Route
                    path='/carrinho'
                    element={<Carrinho />}
                />
            </Routes>
        </BrowserRouter>
    )
}
