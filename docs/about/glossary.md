---
id: glossary
title: Glossary
---

- **CRDTs**: [conflict-free replicated data types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) provide update operations that are designed for merging when devices synchronise

- **DDD:** [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) is a method for naming the business entities and their operation such that domain experts (not programmers) can understand them;
  this leads to better specifications, architecture, and implementation

- **distributed event-log:** each node in the system writes events to their own section of an overall fully distributed log;
  events can be freely replicated between nodes (since they are facts) and totally ordered based on node ID and logical timestamps

- **edge computing:** using the CPU, memory, and persistent storage of the edge device to run business logic — the contrary of “thin client” (which only renders the UI) or “cloud gateway” (which only performs local communication tasks at the bidding of a cloud service that does the data processing)

- **event sourcing:** the application does not store state, instead it stores a stream of events and computes the needed state at runtime by applying the events according to the local business logic

- **peer-to-peer:** interaction between neighbouring devices using some communication technology (like wifi, bluetooth, ultra-wide band); can also be extended to cover direct interactions between edge devices via the Internet
