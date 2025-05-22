import Pending_Enquiry from "../../components/Supplier/Pending_Enquiry";
import Supplier_RFQ_List from "../../components/Supplier/Supplier_RFQ_List";
import Nav from '../../components/Supplier/Nav'
export default function Vendor_Home() {
    return (
        <>
        <Nav/>
        <div className='container px-6'>
            <div className=''>
                <div className='p-4 '>
                    <h4>Pending Enquiry</h4>
                    <Pending_Enquiry/>
                </div>
            </div>
            <div className=' '>
                <div className='px-4 pb-4'>
                    <h4>RFQ List</h4>
                    <Supplier_RFQ_List/>
                </div>
            </div>
        </div>
        </>
    );
}