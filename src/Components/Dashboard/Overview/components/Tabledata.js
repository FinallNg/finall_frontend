import './table.css';
// import {BiCart} from "react-icons/bi";
// import {FiFeather}from "react-icons/fi"

// Example of a data array that
// you might receive from an API
const data = [
{ receiver: "Tesco Market", type :"shopping", date: "13 DEC 2020", amount: "$75.67" },
{ receiver: "Forgio Restaurant", type:"Food", date: "07 Dec 2020", amount: "$19.50" },
{ receiver: "ElectronMen Market", type:"shopping", date: "14 DEC 2020", amount: "$250.00" },
{ receiver: "ElectronMen Market", type:"shopping", date: "14 DEC 2020", amount: "$250.00" },
{ receiver: "Tesco Market", type:"shopping", date: "13 DEC 2020", amount: "$75.67" },                                
]

function Tabledata() {
return (
	<div className="Tabledata">
	<table>
		<tr>
		<th>Receiver</th>
          <th>Type</th>
          <th>Date</th>
          <th>Amount</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.receiver}</td>
			<td>{val.type}</td>
			<td>{val.date}</td>
			<td>{val.amount}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Tabledata;
