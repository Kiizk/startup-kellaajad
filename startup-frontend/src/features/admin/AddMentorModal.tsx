import { useState } from "react";

const EyeIcon = ({ open, className = "w-5 h-5" }) => (
    open ? (
        // open eye (visible)
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
    ) : (
        // closed eye (hidden)
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18"/>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10.58 10.58A3 3 0 0113.42 13.42"/>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9.88 5.26C11.28 5.09 12.64 5 14 5c4.477 0 8.268 2.943 9.542 7-0.57 1.816-1.62 3.4-2.99 4.6M6.2 6.2C4.9 7.4 3.8 9 3.23 10.8"/>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 1l22 22"/>
        </svg>
    )
);

const AddMentorModal = ({ onClose }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [teams, setTeams] = useState([""]); // start with one empty field
    const [showPassword, setShowPassword] = useState(false);

    const handleTeamChange = (index, value) => {
        const newTeams = [...teams];
        newTeams[index] = value;
        setTeams(newTeams);
    };

    const addTeamField = () => setTeams([...teams, ""]);

    const removeTeamField = (index) => setTeams(teams.filter((_, i) => i !== index));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dto = {
            name: name,
            password: password,
            adminId: 1, // replace with real logged-in admin ID later
            teamNames: teams.filter((t) => t.trim() !== "")
        };

        try {
            const res = await fetch("http://localhost:8080/mentors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dto)
            });

            if (res.ok) {
                console.log("Mentor created successfully!");
                onClose();
            } else {
                console.error("Failed to create mentor", await res.text());
                alert("Failed to create mentor");
            }
        } catch (err) {
            console.error(err);
            alert("Server connection error");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-center">Lisa Juhendaja ja Tiimid</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Juhendaja nimi */}
                    <input
                        type="text"
                        placeholder="Juhendaja nimi"
                        className="border p-2 w-full rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    {/* Parool */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Parool"
                            className="border p-2 w-full rounded pr-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-label="Mentor password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-pressed={showPassword}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-1"
                        >
                            <EyeIcon open={showPassword} />
                        </button>
                    </div>

                    {/* Tiimid */}
                    <div>
                        <label className="block font-medium mb-2">Tiimid:</label>
                        {teams.map((team, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder={`Tiim ${index + 1}`}
                                    className="border p-2 rounded w-full"
                                    value={team}
                                    onChange={(e) => handleTeamChange(index, e.target.value)}
                                />
                                {teams.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeTeamField(index)}
                                        className="bg-red-500 text-white rounded px-2 hover:bg-red-600"
                                        aria-label={`Remove team ${index + 1}`}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addTeamField}
                            className="text-[#4F0E94] font-medium mt-2 hover:underline"
                        >
                            Lisa tiim +
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Loobu
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#4F0E94] text-white rounded hover:bg-[#5A199E]"
                        >
                            Salvesta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMentorModal;
