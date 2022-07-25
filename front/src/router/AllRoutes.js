import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPhone from "../pages/AddPhone";
import AllPhones from "../pages/AllPhones";
import EditPhone from "../pages/EditPhone";
import MorePhone from "../pages/MorePhone";

function AllRouter() {   
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<AllPhones />} />
                <Route path="/addPhone" element={<AddPhone />} />
                <Route path="/morePhone/:id" element={<MorePhone />} />
                <Route path="/editPhone/:id" element={<EditPhone />} />
            </Routes>
        </BrowserRouter >
    )
}
export default AllRouter