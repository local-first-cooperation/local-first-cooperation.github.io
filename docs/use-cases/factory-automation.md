---
id: factory-automation
title: Factory Automation
---

- description:

  humans, machines, and material collaborating and being orchestrated to reduce waste and increase productivity; production order released by ERP system, setup personnel picking it up and preparing the machine (automatic digital setup plus manual mechanical setup — insert right tool), logistics robot delivers input material from warehouse or previous step to line, line personnel operates machine and monitors quality, logistics robot picks up finished goods and brings them to shipping area; all this is coordinated based on workflows driven collaboratively by the involved participants, no central control desired ( → resilience)

- techniques:

  DDD, event sourcing, edge computing, peer-to-peer, distributed event log

- types of data:

  generated at various places within the factory, controlled (and paid for) by the factory owner

- expected connectivity:

  only local connectivity needed for parties working together, passing data along with physical goods and processes

- stay responsive:

  the local process must always be working, non-local failures are not tolerable (reduce resilience), which is achieved by keeping needed process data on the local device and allowing read/write interaction at all times, then synchronising with other devices whenever possible

- local communication:

  communication is necessary only between participants in shop-floor processes, e.g. humans and machines working together at a workstation or on a production order;
  these are close to each other which allows direct communication links to be used;
  when needed to communicate over longer distances, like summoning a logistics robot, events are relayed from one participant to the next (can be optimised by installing wifi)

- accept uncertainty:

  acting on incomplete local knowledge means strict constraints cannot be enforced by the system, but the real world often provides synchronisation (each workpiece only exists once!); conflicts are resolved by compensating action, e.g. logistics robots prefer to start a mission and abort it if taken by another one rather than pessimistically not doing anything — the factory must keep running

- assert autonomy:

  the key to staying responsive on local devices is to allow local decisions based on incomplete but understandable knowledge: stick to well-documented data formats when publishing events, prefer sending events over sending state to allow other devices to derive the state they need

- handle dynamics:

  the basic principle is to outfit each participant with a computing device that is capable of handling the locally needed processes, this way the system is inherently scalable to any number of participants — provided communication infrastructure that can handle the volume of all processes within a given region (e.g. factory hall)

- tailor consistency:

  almost all decisions taken on the factory shop-floor are local or can be compensated later, so consensus is rarely necessary: logistics robots bid for each transport mission, deterministic algorithm picks a winner, network partition may send two of them, but one will be second and abort
