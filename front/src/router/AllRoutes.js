import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPhones from "../pages/AllPhones";
import EditPhone from "../pages/EditPhone";
import MorePhone from "../pages/MorePhone";
import AddPhone from "../pages/AddPhone";


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