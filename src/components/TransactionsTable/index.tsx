import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api"

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
    
    return (
    <Container>
       <table>
           <thead>
            <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de Website</td>
                    <td className="deposit">R$ 12.000,00 </td>
                    <td>Desenvolvimento</td>
                    <td>16/08/2021</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw">- R$ 1.350,00 </td>
                    <td>Casa</td>
                    <td>16/08/2021</td>
                </tr>
            </tbody>
       </table>
    </Container>
    );
}