import { useEffect, useState } from "react";
import MentorAndTeams from "./MentorAndTeams";

interface Mentor {
    id: number;
    name: string;
    teamNames: string[];
}

const MentorAndTeamsTables = () => {
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
        <div className="flex flex-wrap justify-start h-fit gap-24">
            {mentors.map((mentor) => (
                <MentorAndTeams key={mentor.id} name={mentor.name} teams={mentor.teamNames} />
            ))}
        </div>
    );
};

export default MentorAndTeamsTables;
