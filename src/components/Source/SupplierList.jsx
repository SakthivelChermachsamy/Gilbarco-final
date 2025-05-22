
import { useRef, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
export default function SupplierList() {
    const toastRef = useRef(null);
        const toastBtnRef = useRef(null);
    
        useEffect(() => {
            if (toastRef.current && toastBtnRef.current) {
                const toast = new bootstrap.Toast(toastRef.current);
                toastBtnRef.current.addEventListener('click', () => {
                    toast.show();
                });
    
                return () => {
                    toastBtnRef.current?.removeEventListener('click', () => {
                        toast.show();
                    });
                };
            }
        }, []);
    return (
        <div>
            <div className="py-3">
                <div className="table-responsive rounded " >
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Vendor Id</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>10001</td>
                                <td>Jhon Industries</td>
                                <td>Pin</td>
                                <td>jhonindustries@gmail.com</td>
                                <td>1234567890</td>
                                {/* <td className="d-flex justify-content-center"><button className="btn btn-warning ">Edit</button></td> */}
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            ref={toastBtnRef}
                                            className="btn btn-warning"
                                        >
                                            Edit
                                        </button>

                                        <div className="toast-container position-fixed top-50 start-50 translate-middle">
                                            <div
                                                ref={toastRef}
                                                className="toast"
                                                role="alert"
                                                aria-live="assertive"
                                                aria-atomic="true"
                                            >
                                                <div className="toast-header">
                                                    <strong className="me-auto">Update Supplier Details</strong>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="toast"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="toast-body">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label htmlFor="supplierName" className="form-label">Vendor Id</label>
                                                            <input type="text" className="form-control" id="vendorId" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="supplierName" className="form-label">Supplier Name</label>
                                                            <input type="text" className="form-control" id="supplierName" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="supplierName" className="form-label">Supplier Location</label>
                                                            <input type="text" className="form-control" id="supplierLocation" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="supplierName" className="form-label">Supplier Category</label>
                                                            <input type="text" className="form-control" id="supplierCategory" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="supplierEmail" className="form-label">Email</label>
                                                            <input type="email" className="form-control" id="supplierEmail" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="supplierPhone" className="form-label">Phone</label>
                                                            <input type="tel" className="form-control" id="supplierPhone" />
                                                        </div>
                                                        <div className='d-flex justify-content-around'>
                                                        <button type="submit" className="btn btn-success">Submit</button>
                                                        <button type="delete" className="btn btn-danger">Delete Supplier</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>10002</td>
                                <td>Stark Industries</td>
                                <td>Pump</td>
                                <td>StarkIndustries@gmail.com</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>1003</td>
                                <td>Honda Industries</td>
                                <td>Nozzle</td>
                                <td>91</td>
                                <td>90</td>
                                <td><a href="#">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}