import { useEffect, useState } from "react";

interface Mentor {
    id: number;
    name: string;
    teamNames: string[];
}

const ShortcutBar = () => {
    const [mentors, setMentors] = useState<Mentor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const adminId = 1;

        fetch(`http://localhost:8080/mentors/admin/${adminId}`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setMentors(data))
            .catch((error) => console.error("Error fetching mentors:", error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading mentors...</p>;

    return (
        <div className={"flex flex-col justify-start gap-8 w-fit ps-8 pe-20 text-lg max-w-64"}>
            {mentors.map((mentor) => (
                <div key={mentor.id} className="flex flex-col justify-center">
                    <p className={"mb-2 font-semibold whitespace-nowrap"}>{mentor.name}</p>
                    {mentor.teamNames.map((team, index) => (
                        <p key={index}>{team}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ShortcutBar;
