import DefaultTemplate from "./templates/default-template.js";
import ScrimsTemplate from "./templates/scrims-template.js";

export default function Event({ event, template = "default" }) {
  return (
    <>
      {template === "2" ? (
        <ScrimsTemplate event={event} />
      ) : (
        <DefaultTemplate event={event} />
      )}
    </>
  );
}
