import { useState } from "react";
import AddMentorModal from "./AddMentorModal";

const AddMentorAndTeamsButton = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="p-3 rounded-full bg-[#4F0E94] hover:bg-[#5A199E] text-white ms-24 mb-8"
                onClick={() => setShowModal(true)}
            >
                Lisa Juhendaja ja tiimid
            </button>

            {showModal && <AddMentorModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default AddMentorAndTeamsButton;
