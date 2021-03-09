---
id: accept-uncertainty
title: Accept Uncertainty when Making Decisions
sidebar_label: Accept Uncertainty
---

Next to the observation of environmental facts there is another important source of facts that local-first applications react to:
decisions taken by end-users or algorithms.
The decision to perform a workflow step, to take on a logistics mission, or to send a chat message is an important fact that is created locally, possibly affecting other devices elsewhere.

The most conspicuous difference between local-first cooperative applications and traditional applications built around transactional databases is that an autonomous edge device cannot hope to have access to a complete picture of the whole system.
Its state is always incomplete, missing facts from other devices that have not yet been received.
The strictly serialised transactional database on the other hand allows the application programmer to act with godlike overview, as if Laplace’s demon could also make changes to the world.
Because the latter superpower is bought at the price of introducing a well-known fallible _single point of failure_, local-first applications must instead confidently make decisions based on incomplete information.

Consequently, these decisions will sometimes turn out to have been incorrect, for example by noticing that two robots took the same mission and are now duplicating the effort.
The application recognises this mistake by observing the facts emitted by the other devices and will then take measures to correct it.
In other words, it is preferable to ask for forgiveness instead of being blocked waiting for permission.
