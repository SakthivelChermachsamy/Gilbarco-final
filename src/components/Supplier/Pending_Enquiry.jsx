import { Link } from "react-router-dom";
export default function Pending_Enquiry(){

    return (
        <div className="py-3 ">
            <div className="table-responsive">
            <table class="table table-striped table-bordered">
                <thead className="">
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">RFQ No</th>
                        <th scope="col">Description</th>
                        <th scope="col">Validate Date</th>
                        <th scope="col">Order Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>101</td>
                        <td>Pin</td>
                        <td>31/07/2025</td>
                        <td>90</td>
                        <td>Released To RFQ</td>
                        <td><Link to='/Supplier_Initial_Offer'>view</Link></td>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>102</td>
                        <td>Pump</td>
                        <td>31/07/2025</td>
                        <td>90</td>
                        <td>Released To RFQ</td>
                        <td><a href="#">view</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>103</td>
                        <td>Nozzle</td>
                        <td>31/07/2025</td>
                        <td>90</td>
                        <td>Released To RFQ</td>
                        <td><a href="#">view</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}