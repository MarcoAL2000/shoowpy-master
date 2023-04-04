import React from 'react';
import { Menu } from '../../components/Menu';
import { Button, TBTr, THTh, THtr, Table, TextButton } from './styles';

export const Carrinho = () => {
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                    marginTop: 20,
                    marginBottom: 40
                }}
            >
                <h2>Carrinho de compras</h2>

                <Table>
                    <thead>
                        <THtr>
                            <THTh
                                style={{
                                    minWidth: 300
                                }}
                            >Nome do Produto</THTh>
                            <THTh>Quantidade</THTh>
                            <THTh>Vlr Unit.</THTh>
                            <THTh>Vlr Total.</THTh>
                            <THTh>Ações</THTh>
                        </THtr>
                    </thead>
                    <tbody>
                        <TBTr>
                            <td>Mouse</td>
                            <td>1</td>
                            <td>1,99</td>
                            <td>1,99</td>
                            <td>
                                <Button
                                    type='button'
                                >
                                    <TextButton>
                                        Lixo
                                    </TextButton>
                                </Button>
                            </td>
                        </TBTr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
