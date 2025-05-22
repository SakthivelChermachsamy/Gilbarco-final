export default function Quotations(){
    return (
        <div className="py-3 ">
            <div className="table-responsive">
            <table class="table table-striped table-bordered">
                <thead className="">
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Product No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Validate Date</th>
                        <th scope="col">Total Quatity</th>
                        <th scope="col">Document</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>101</td>
                        <td>Pin</td>
                        <td>31/07/2025</td>
                        <td>90</td>
                        <td><a href="#">view</a></td>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>102</td>
                        <td>Pump</td>
                        <td>31/07/2025</td>
                        <td>90</td>
                        <td><a href="#">view</a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>103</td>
                        <td>Nozzle</td>
                        <td>31/07/2025</td>
                        <td>90</td>
                        <td><a href="#">view</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}