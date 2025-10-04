interface MentorProps {
    name: string;
    teams: string[];
}

const MentorAndTeams = ({ name, teams }: MentorProps) => {
    return (
        <div className="flex flex-col ms-24 p-0 justify-center rounded-lg border border-black min-w-[250px] h-fit">
            <h2 className="py-2 px-12 text-white bg-[#4F0E94] rounded-t-lg text-xl">{name}</h2>
            {teams.map((team, idx) => (
                <p
                    key={idx}
                    className={`p-2 text-lg ${
                        idx === 0 || idx === teams.length - 1
                            ? "border border-x-0 border-black"
                            : ""
                    }`}
                >
                    {team}
                </p>
            ))}
        </div>
    );
};

export default MentorAndTeams;
