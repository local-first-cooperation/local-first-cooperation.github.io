---
id: field-workers
title: Field Workers
---

- description:

  workers on a cargo ship or an oil rig, farmers in rural areas, development aid workers, military personnel in remote locations all benefit from a computing infrastructure that helps them locally;
  basic functions like recording observations, communicating them and about them, handing off processes and their data to another device or person

- techniques:

  DDD, event sourcing, edge computing, peer-to-peer, distributed event log

- types of data:

  generated at various places by sensors, machines, humans; may be controlled by the business in whose context the data arise, otherwise controlled by their creator

- expected connectivity:

  only local connectivity needed for parties working together, passing data along with physical objects and processes

- stay responsive:

  the local process must always be working, non-local failures are not tolerable (reduce resilience);
  it needs to feel like a local standalone app with the addition of seeing data from other sources and sharing data with them;
  this is achieved by keeping needed process data on the local device and allowing read/write interaction at all times, then synchronising with other devices whenever possible

- local communication:

  communication is necessary only between participants in a given process, e.g. a human collecting buffered data from a field sensor and annotating it with contextual information;
  these are close to each other which allows direct communication links to be used;
  when needed to communicate over longer distances, like providing an asynchronous overview to an observer elsewhere, events are relayed from one participant to the next (could in important cases also use satellite links when affordable)

- accept uncertainty:

  if the interaction model is “as if it were pure humans” then there is no issue: the same potential for conflicts and the same mitigation or compensation strategies apply; otherwise it may be extremely costly to establish consensus in an environment where communication is only sporadically possible

- assert autonomy:

  the key to staying responsive on local devices is to allow local decisions based on incomplete but understandable knowledge: stick to well-documented data formats when publishing events, prefer sending events over sending state to allow other devices to derive the state they need

- handle dynamics:

  the basic principle is to outfit each participant with a computing device that is capable of handling the locally needed processes, this way the system is inherently scalable to any number of participants

- tailor consistency:

  the system is already useful when it does not provide decisions but only records them, and for this no coordination is needed;
  it is very helpful to record causality information, though, so that the interpretation of recorded data can reconstitute the local state that was present when the event was written
