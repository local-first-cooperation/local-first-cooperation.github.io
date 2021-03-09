---
id: cooperation
title: Design Parts for Cooperation
sidebar_label: Design for Cooperation
---

Based on the [autonomous parts](autonomy.md) discussed in the previous section the point of local-first cooperation is that these parts shall facilitate cooperation between computing devices and their users.
The data models and communication protocols need to be designed with this in mind.

There are several established techniques for achieving this, like [conflict-free replicated data types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDT), or [event sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) with [time warp](https://dl.acm.org/doi/10.1145/62297.62392).
All these have a common basic working principle:
each autonomous part keeps a representation of pieces of information that is the basis of and separate from its own data model.
The pieces are used to transport information between devices, such that the recipient knows what it still needs and where the received pieces fit into its own knowledge.
A difference between CRDT and time warp is that a CRDT is constrained to information pieces that tolerate being applied out of order, whereas time warp may insert new information in the past and requires that the local data model be rebuilt when that happens.

Designing an application for local-first cooperation also has consequences in its user interface.
Both human and algorithmic consumers of the local data model will need to be aware of the current network connectivity in order to make best use of the system.
This is important so that the user can judge the age and thus the reliability of the information they base their decisions on, and it gives them an indication when they can expect their decisions to have an effect on other parts of the system.
