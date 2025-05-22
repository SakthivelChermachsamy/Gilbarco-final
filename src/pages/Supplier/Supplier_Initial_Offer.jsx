import { useRef, useEffect } from 'react';
import Nav from '../../components/Supplier/Nav'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Supplier_Initial_Offer() {
    const details = {
        quo_no: 1203,
        part_no: 3232,
        part_desc: "Casting Part",
        date: "15/05/2025",
        status: "New",
        vendorName: "ABC pvt",
        email: "abc@gmail.com",
        vendorcode: "10000123",
        period: "One Time",
        part_qty: 10,
        lead_time: 4,
        unit_rate: 100,
        material_cost: 30,
        process_cost: 30,
        overhead_cost: 25,
        packing_cost: 15,
    }
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
        <>
            <Nav />
            <div className="container pb-4">
                <div className="d-flex justify-content-center p-3 ">
                    <h3>Supplier Initial Offer</h3>
                </div>
                <div>
                    <form action="" className="row d-flex">
                        <div class="form-floating mb-3 col-lg-4 col-md-6 ps-1">
                            <input type="text" class="form-control h-25" id="floatingInput" placeholder="Quotation No" value={details.quo_no} disabled />
                            <label for="floatingInput" className="">Quotation No</label>
                        </div>
                        {/* <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                        <input type="text" class="form-control h-25" id="floatingInput" placeholder="Part No" value={details.part_no} disabled />
                        <label for="floatingInput" className="">Part No</label>
                    </div> */}
                        <div class="form-floating mb-3 col-lg-4 col-md-6 ps-1">
                            <input type="number" class="form-control" id="floatingInput" placeholder="" value={details.vendorcode} disabled />
                            <label for="floatingInput">Vendor name</label>
                        </div>
                        <div class="form-floating mb-3 col-lg-4 col-md-6 ps-1">
                            <input type="email" class="form-control" id="floatingInput" placeholder="" value={details.date} disabled />
                            <label for="floatingInput">Date</label>
                        </div>
                        <div class="form-floating mb-3 col-lg-4 col-md-6 ps-1">
                            <input type="text" class="form-control h-25" id="floatingInput" placeholder="" value={details.status} disabled />
                            <label for="floatingInput" className="">Status</label>
                        </div>
                        {/* <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                        <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.part_desc} disabled />
                        <label for="floatingInput">Part Description</label>
                    </div> */}
                        <div class="form-floating mb-3 col-lg-4 col-md-6 ps-1">
                            <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.vendorName} disabled />
                            <label for="floatingInput">Buyer Name</label>
                        </div>

                        <div class="form-floating mb-3 col-lg-4 col-md-6 ps-1">
                            <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.email} disabled />
                            <label for="floatingInput" className="">Buyer Email address</label>
                        </div>
                    </form>
                </div>
                <div >
                    <h4 className='text-primary'>Items</h4>
                </div>
                <div className="pb-3 text-center">
                    <div className="table-responsive">
                        <table class="table table-striped table-bordered">
                            <thead className="">
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Part No</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Period</th>
                                    <th scope="col">Validate Date</th>
                                    <th scope="col">Item Quatity</th>
                                    <th scope="col">Unit Rate</th>
                                    <th scope="col">Lead Time Days</th>
                                    <th scope="col">Total Cost</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{details.part_no}</td>
                                    <td>{details.part_desc}</td>
                                    <td>{details.period}</td>
                                    <td>{details.date}</td>
                                    <td>{details.part_qty}</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <div className='container d-flex flex-column align-items-center gap-2'>
                                                    <div class="input-group input-group-sm mb-1">
                                                        <input type="number" class="form-control" disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={39} />
                                                    </div>
                                                    <button
                                                        ref={toastBtnRef}
                                                        className="btn btn-primary" style={{ fontSize: 10 + "px" }}
                                                    >
                                                        Cost Break Up
                                                    </button>
                                                </div>
                                                <div className="toast-container position-fixed top-50 start-50 translate-middle">
                                                    <div
                                                        ref={toastRef}
                                                        className="toast"
                                                        role="alert"
                                                        aria-live="assertive"
                                                        aria-atomic="true"
                                                    >
                                                        <div className="toast-header">
                                                            <strong className="me-auto">Cost Break Up</strong>
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
                                                                    <label htmlFor="supplierName" className="form-label">Material Cost</label>
                                                                    <input type="number" className="form-control" id="vendorId" min='0' placeholder='Unit Cost' />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="supplierName" className="form-label">Process Cost</label>
                                                                    <input type="number" className="form-control" id="supplierName" min='0' placeholder='Unit Cost' />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="supplierName" className="form-label">Overheads & Margin</label>
                                                                    <input type="number" className="form-control" id="supplierName" min='0' placeholder='Unit Cost' />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="supplierName" className="form-label">Packing & Forwarding</label>
                                                                    <input type="number" className="form-control" id="supplierName" min='0' placeholder='Unit Cost' />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="supplierName" className="form-label text-primary">Total Cost</label>
                                                                    <input type="number" className="form-control" id="supplierName" min='0' placeholder='Unit Cost' />
                                                                </div>
                                                                <div className='d-flex justify-content-around'>
                                                                    <button type="submit" className="btn btn-primary">Add</button>
                                                                    <button type="reset" className="btn ">Cancel</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td><div class="input-group input-group-sm mb-1">
                                        <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={90} />
                                    </div>
                                    </td>
                                    <td>
                                        <div class="input-group input-group-sm mb-1">
                                            <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={39} />
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center col-lg-7 col-md-12 d-flex flex-column align-items-center'>
                        <h4>
                            General Terms
                        </h4>
                        <div className='d-flex justify-content-evenly gap-3 me-3 mb-3'>
                            <div class="dropdown ">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MSME
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">MSME Approved</a></li>
                                    <li><a class="dropdown-item" href="#">Not MSME Approved</a></li>
                                </ul>
                            </div>
                            <div class="dropdown ">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Payment
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Aginst Delivery 100%</a></li>
                                    <li><a class="dropdown-item" href="#">30 Days From Recipt</a></li>
                                    <li><a class="dropdown-item" href="#">50% On Delivery , Balance 30D</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Delivery
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">As Per The Agreed Lead Time</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Freight
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">GVR Scope</a></li>
                                    <li><a class="dropdown-item" href="#">Supplier Scope</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-floating mb-3 ps-1 w-50">
                            <textarea type="email" class="form-control" style={{ height: "120px" }} id="floatingInput" placeholder="" />
                            <label for="floatingInput" className="">Remarks</label>
                        </div>
                    </div>
                    <div className=' my-3 col-lg-5 col-md-12 d-flex flex-column justify-content-between'>
                        <div className='d-flex gap-3'>
                            <div class="input-group mb-3">
                                <span class="input-group-text ">Tooling Cost</span>
                                <input type="text" class="form-control" aria-label="Rupees" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">No.of Shots</span>
                                <input type="text" class="form-control" aria-label="Ruprees" />
                            </div>
                        </div>
                        {/* <div className='d-flex gap-3'>
                        <h4>Attached Files</h4>
                        <button type="button" class="btn btn-primary">View</button>
                    </div>
                    <div>
                        <h5>
                            Breakup Attachment
                        </h5>

                    </div> */}

                        <div className="border p-3 mb-4 rounded">
                            <h5 className="mb-3">Attachments</h5>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="breakupAttachment" className="form-label fw-semibold">
                                            Breakup Attachment
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="breakupAttachment"
                                        />
                                        <div className="form-text">Uploaded breakup details document</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="drawingAttachment" className="form-label fw-semibold row">
                                            Drawing
                                        </label>
                                        {/* <input
                                        type="file"
                                        className="form-control"
                                        id="drawingAttachment"
                                        accept=".pdf,.dwg,.dxf,.jpg,.png"
                                        disabled
                                    /> */}
                                        <button type="button" class="btn btn-primary">Part Drawing</button>
                                        <div className="form-text">Uploaded drawing file </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <button type="button" class="btn btn-warning w-25 ">Back</button>
                            <button type="button" class="btn btn-success w-25 ">Draft</button>

                        </div>

                    </div>


                </div>



            </div>
        </>
    );
}