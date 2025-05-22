import { Link } from "react-router-dom";
export default function ReplyTable() {
    return (
        <div className="py-3">
            <div className="table-responsive rounded " >
                <table className="table table-striped table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Product No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Supplier Code</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Quotation Cost / Qty</th>
                            <th scope="col">Duration / Days</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>101</td>
                            <td>Pin</td>
                            <td>10001</td>
                            <td>Jhon Industries</td>
                            <td>97</td>
                            <td>90</td>
                            <td><Link to='/Reply_Details'>View</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>102</td>
                            <td>Pump</td>
                            <td>10002</td>
                            <td>Stark Industries</td>
                            <td>95</td>
                            <td>90</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>103</td>
                            <td>Nozzle</td>
                            <td>1003</td>
                            <td>Honda Industries</td>
                            <td>91</td>
                            <td>90</td>
                            <td><a href="#">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}