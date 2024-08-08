import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";

function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("members.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);
  return (
    <div className="my-32">
      <div className="text-center w-1/2 mx-auto space-y-5">
        <h5 className="text-xl text-red-400 font-bold">Team</h5>
        <h3 className="text-4xl font-bold">Meet Our Team</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default Team;
