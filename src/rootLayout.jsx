
import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar";
import { Provider } from "react-redux";
import Store from "./store/store";
const RootLayout = ()=>{
    return (
        <>
        <Provider store = {Store}>
        <NavigationBar></NavigationBar>
        <main>
            <Outlet></Outlet>
        </main>
        </Provider>
        </>
    )
}

export default RootLayout;