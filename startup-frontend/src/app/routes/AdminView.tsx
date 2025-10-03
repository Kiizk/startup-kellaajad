import ShortcutBar from "../../features/admin/ShortcutBar";
import MentorAndTeamsTables from "../../features/admin/MentorAndTeamsTables";
import AddMentorAndTeamsButton from "../../features/admin/AddMentorAndTeamsButton";

const AdminView = () => {
    return (
        <div className="flex h-screen">
            <div className="flex-shrink-0 overflow-y-auto">
                <ShortcutBar />
            </div>
            <div className="w-px bg-black self-stretch" />
            <div className="flex-grow">
                <AddMentorAndTeamsButton />
                <MentorAndTeamsTables />
            </div>
        </div>
    )
}

export default AdminView