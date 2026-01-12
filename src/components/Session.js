import { getSession } from "../api";
import { useParams } from "react-router-dom";

export default function Session() {
  // Replace the placeholder catId and sessionId variables with a React Router Hook
  const { catID, sessionID } = useParams();

  const { name, desc, speaker } = getSession({ catID, sessionID });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
}