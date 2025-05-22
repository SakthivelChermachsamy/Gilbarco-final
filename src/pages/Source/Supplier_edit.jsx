import { useRef, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import SupplierList from '../../components/Source/SupplierList';
import Nav from '../../components/Source/Nav';
export default function SupplierEdit() {
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
            <Nav/>
            <div className="container d-flex justify-content-around p-4">
                <h4>Edit Suppliers</h4>
                {/* <button className="btn btn-primary">New Supplier</button> */}
                <div className=" ">
                    <button
                        ref={toastBtnRef}
                        className="btn btn-primary"
                    >
                        Add Supplier
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
                                <strong className="me-auto">New Supplier</strong>
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
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="d-flex justify-content-end " role="search ">
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className='container'>
                <SupplierList />
            </div>
        </div>
    );
}