import * as ackeeTracker from "ackee-tracker";

export const ackee = ackeeTracker.create("https://ackee.josetorronteras.es", {
  detailed: false,
  ignoreLocalhost: true,
});

export const EVENTS = {
  SOCIAL_CLICK: "f0072e90-bc1b-45d3-af54-6e29d32a5ca8",
  PROJECT_CLICK: "6a29731e-8d1b-46d2-8f13-611fd14b887b",
  CODE_COPY: "1dc738be-70bd-4922-9be2-4a27253333d3",
};
