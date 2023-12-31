import { Outlet } from "react-router-dom";
import Appbar from "../../common/Appbar";


const HODLayout = () => {
    return (<>
        <Appbar role="HOD" />
        <Outlet />
    </>);
}

export default HODLayout;