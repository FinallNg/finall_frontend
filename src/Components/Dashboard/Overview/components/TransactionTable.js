import "./table.css"

function TransactionTable(){
  return(
    <div className="TransactionTable">
      <table>
        <tr>
          <th>Receiver</th>
          <th>Type</th>
          <th>Date</th>
          <th>amount</th>
       
        </tr>
        <tr>
          <td>Tesco Market</td>
          <td>Shopping</td>
          <td>13 Dec 2020</td>
          <td>$75.67</td>
        </tr>
        <tr>                                           
          <td>Forgio Restaurant</td>
          <td>Food</td>
          <td>07 DEc 2020</td>
          <td>$19.50</td>
        </tr>
        <tr>
          <td>ElectroMen Market</td>
          <td>Shopping</td>
          <td>14 Dec 2020</td>
          <td>$250.00</td>
        </tr>
        <tr>
        <td>ElectroMen Market</td>
          <td>Shopping</td>
          <td>14 Dec 2020</td>
          <td>$250.00</td>
          </tr>
          <tr>
          <td>Tesco Market</td>
          <td>Shopping</td>
          <td>13 Dec 2020</td>
          <td>$75.67</td>
          </tr>
      </table>
    </div>
  );
}
export default TransactionTable