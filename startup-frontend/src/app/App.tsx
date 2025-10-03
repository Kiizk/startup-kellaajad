import '../styles/App.css'
import HeaderTitle from "../components/header/HeaderTitle";

import AdminView from "./routes/AdminView";
import AddMentorAndTeamsButton from "../features/admin/AddMentorAndTeamsButton";

function App() {

    return (

        <>
            <div className={"bg-[#4F0E94] w-full m-0 max-w mb-10"}>
                <HeaderTitle/>
            </div>
            <AdminView />
        </>

    )
}

export default App
