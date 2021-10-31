import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/dashboard')
            .then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Machine Learning Model</td>
                        <td className='income'>R$ 50000.00</td>
                        <td>Sale</td>
                        <td>16/02/1998</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td className='withdraw'>- R$ 60.00</td>
                        <td>Food</td>
                        <td>23/02/1998</td>
                    </tr>
                    <tr>
                        <td>Machine Learning Model</td>
                        <td>R$ 50000.00</td>
                        <td>Sale</td>
                        <td>16/02/1998</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}