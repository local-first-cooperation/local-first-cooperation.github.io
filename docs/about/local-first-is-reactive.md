---
id: local-first-is-reactive
title: Local-First is Reactive
---

While the [local-first cooperation principles](principles/index.html) are not the same as the [reactive principles](https://principles.reactive.foundation), there is large inherent overlap.
In fact, adhering to local-first cooperation likely results in a reactive application.
We demonstrate this by going through the reactive principles in the following.

## Stay Responsive

This first reactive principle is intrinsic to local-first software by design: the whole point is to offer always-on access to information by storing it on the local device.
The focus on local autonomy allows the application to offer full editing capabilities to its end-users, regardless of current connectivity to other nodes or the cloud.
A local-first cooperative application always responds to its users as long as there is a local computing device to run it.

## Accept Uncertainty

This reactive principle has been made part of the canon of local-first cooperation principles since uncertainty is a fundamental property of a local view onto the world:
observation is always limited and we need to make do with the knowledge we have.

## Embrace Failure

Computers, network, and business logic will all fail.
This insight is incorporated in the reactive principles by demanding that application authors respect this fact instead of fighting against it (which would be a losing proposition).
Local-first cooperation covers this aspect by making it obvious that the code running on one edge device cannot rely and be dependent on anything else, it needs to be able to function even in isolation.
In contrast to the cloud, where code needs to foresee the replacement and provisioning of resources, local-first cooperation relies on the end-user who holds the edge device in their hands to make sure that it is up and running.

## Assert Autonomy

Autonomy is even more pronounced in local-first cooperation than it is in the reactive principles.
The reason to demand it is the same, it is the operating environment that leaves even less room for compromises — in the cloud it may mostly work to couple two services more closely than needed because the cloud mostly works.

## Tailor Consistency

This reactive principle has been renamed to scoped consensus for local-first cooperation, which means the same thing.
As for autonomy, the operational model for local-first applications is even more demanding in terms of how unreliable the network is and how long it may take to reach consensus.

## Decouple Time

The cooperation between local devices is greatly simplified by avoiding synchronous coupling: it is much better to transmit events, to be acted upon when they arrive at their destination.
This also helps to gracefully deal with offline situations and later synchronisation.

## Decouple Space

This is another reactive principle that is baked into the core of local-first cooperation.
It is the norm that information is recorded in one place and acted upon in another, as is demanded by autonomy: the recording device cannot decide that another shall act.

## Handle Dynamics

This principle has a different meaning for cloud-native than it does for local-first applications.
In the cloud it means scaling the available resources up or down to match current demand, while in local-first it means adapting the resource usage of the business logic to the locally available resources.
The scalability implied by the cloud-native view is in part inherently solved in local-first cooperation: since every end-users brings their own device, computation and storage naturally scales with system usage.
An aspect that is not solved automatically is the required communication bandwidth if the business problem is not scoped such that the number of relevant participants remains small enough.
