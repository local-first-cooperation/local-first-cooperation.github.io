---
id: collaborative-documents
title: Collaborative documents
---

- description:

  working together on documents of various description (text, presentation, spreadsheet, and organised collections thereof) in the context of a group of people, e.g. a private project; editors see their changes disseminated to their peers depending on how well they are connected, e.g. for real-time collaboration in the same wifi, or synchronised at some later time whenever the changes have travelled to another party; all content is owned by the individuals, the system may provide proof of authorship for each change

- techniques:

  CRDTs, distributed event log, DDD, peer-to-peer, dweb

- types of data:

  all changes are created on local devices and controlled by their author, but also disseminated and applied on other (invited) devices

- expected connectivity:

  anything between sporadic sync and live connection, driven by end user purpose

- stay responsive:

  everything works locally, so it feels like a local application with the addition that someone else may edit at the same time, as far as connectivity permits

- local communication:

  this cooperation can work solely based on physical proximity and communication over bluetooth, wifi, etc.;
  for longer distances we can employ the services of the Internet, but we could in theory also send a memory stick by postal service

- accept uncertainty:

  local changes are done based on the currently known state of the document and sent to the server asynchronously for incorporation into the overall state — possibly incomplete states are shown to the user while editing, but that is fine as intermediate revisions are later accessible in the version history and undesirable reconciliations can be fixed; this process is intuitive to the user through good UX design

- assert autonomy:

  collaboration, also between different app versions, requires well-defined data dissemination protocols, which can be CRDT δ-state, semantically meaningful events, or anything in between; each device with all apps on it is by design autonomous from the rest of the world

- handle dynamics:

  provided new devices are added to a collaboration group (e.g. by sending them some needed cryptographic keys) they can start contributing without any further setup, no resources need to be scaled up, each device brings the necessary CPU and memory to the table

- tailor consistency:

  without central place to coordinate anything the system can at best provide the guarantee that no updates are lost — added paragraphs in a document may end up in a different order than someone saw while editing, for example; since the full change history, if needed with causality information, is available on all devices, users will be able to fix possibly incorrect merges by shuffling things around in the document; this is what allows the system to be 100% locally available
