---
id: landscape
title: Embedding in the software landscape
sidebar_label: Landscape
slug: /about/landscape
---

_Since about a decade we are seeing tremendous growth in the capabilities of mobile computing devices.
At the same time we are outfitting more and more things with computing capabilities and connecting them to the Internet.
Besides the undoubtedly useful global connectivity and the countless services that are provided thanks to it, we believe it is time to start making full use of the information technology that we hold in our hands and that exists around us.
We need to start using **local computing resources** to their full capability and employ IT for **cooperation between neighbours**._

This document does not yet have a final name itself and is related to a few other concepts:

- [local-first](https://www.inkandswitch.com/local-first.html), with a focus on agency and ownership of our data
- [offline](http://offlinefirst.org/) [first](https://developer.chrome.com/docs/apps/offline_apps/) as complementary to [cloud native](https://www.cncf.io/)
- [edge computing](https://en.wikipedia.org/wiki/Edge_computing), which aims at bringing computation and data closer to each other and where they are needed

After some introductory remarks, we formulate [principles](#local-first-cooperation-principles) for collaborative software that stays maximally useful under all operating conditions.
These principles are derived from the idea that to achieve cooperation it should be enough for two computing devices to be connected only to each other.
In this way they facilitate cooperation of their respective users.

## Relationship with other architectural building blocks

![landscape](landscape.svg)

The above diagram uses a small selection of use-cases, problem domains, technologies, and design principles to illustrate how local-first cooperation fits into the overall landscape.
Standalone applications still play an important role and will continue to be used for many years, built as monolithic deployment artifacts to ease operation and ideally using a modular software architecture to aid maintenance and extensibility.

All other classes of software benefit greatly from heeding the advice given in the [**Reactive Manifesto**](https://reactivemanifesto.org/), albeit for different reasons:

- **centralised applications** serve large numbers of people all over the globe, posing the challenge of keeping the service up and running and thus responsive to all those end-users who depend on it
- applications for **global collaboration** face the same challenges as far as the end-users are concerned, but solutions differ since the problem tends to be easier to partition (with wikipedia being a notable counterexample)
- **local collaboration** supports mission critical applications and therefore needs responsiveness, with the added twist of having to satisfy the end-users using locally available resources only — this changes the implementation of elasticity and resilience but not the need to adhere to these principles

Therefore it is not surprising that the local-first cooperation principles have a remarkable overlap with the [reactive principles](https://principles.reactive.foundation/).
The confluence between local-first and reactive principles is further elaborated in [this article](reactive-edge-native.html).

The main differentiation between **local-first cooperation** and **offline-first** — usually backed by a cloud native application — is that local-first cooperation explicitly demands that devices in close proximity shall be able to cooperate even when all central services are unreachable.
In contrast, [progressive web apps](https://en.wikipedia.org/wiki/Progressive_web_application) only provide the end-user with the ability to access locally stored information and use features that work on a single device, possibly buffering user inputs for later upload to the cloud backend: the collaborative aspects only work via central resources.

**Social networks** and **document services** are listed in the collaborative column even though many of them have been implemented in a centralised fashion in the past decade.
We hope that eventually all collaborative software will be resilient against the failure or unreachability of central services.
This can be implemented by cooperation between individual devices, or it can be done by replication and redundancy using **the cloud**.
In the latter case the service can be moved closer to users worldwide by placing the functionality on **the edge** of the Internet backbone.

In terms of concrete algorithms and data structures, it lies in the nature of collaborative software that inputs made in one location need to be transferred to other locations.
**Event streams** do this in a fashion to makes the transmitted information meaningful by itself and thus usable for secondary purposes while [**CRDTs**](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) work generically, shifting the focus to the document that is the target of the collaboration.
Either of these approaches benefit from [**FRP**](https://en.wikipedia.org/wiki/Functional_reactive_programming) in terms of declaring the local effects of learning about changes made elsewhere.

## Why this is important

One example is **industrial manufacturing:** we as humankind owe our invaluable advancements in living standard, common wealth, and medical abilities to the efficient and repeatable production of goods of all kinds, be that food, furniture, clothing, or medicine.
We can make industrial production even more efficient, less wasteful, and thus create more common wealth and human advancement by enlisting the help of IT on the factory shop-floor.
But for that to be successful, these IT systems need to be as reliable as the paper-based processes that they replace.
And they need to retain the distributed and resilient nature of our production plants — we must not make this backbone of our civilisation more brittle by centralising its decision-making processes.

Another example is **cooperation between humans:**
The cloud has enabled collaborative software that lets people from all over the world work together on shared documents, fuelling our creativity.
But it has also taken away agency and ownership of our data; when using these services we borrow our own data from a service provider who may cease to exist.
In order to preserve and archive those creative works we need to retain them on our own local devices.
And we want to be able to collaborate without the constraint of having a central cloud service available and reachable:
as long as two capable devices are connected, we want to allow their human users to benefit from their collaborative capabilities.

Other examples include swarm intelligence within a **fleet of autonomous vehicles**, or the daily interactions between people and **services or goods we buy**.
While there are some parts that are enabled by cloud computing, would it not be awesome to have the essential part — the local interaction — work independently of any centralised processing?
This way, what must always work will work as long as two things are nearby and ready to interact.
And in this way, we can give everyone control over their data, to be shared willingly where needed.

## Who should read this

This document should be read by everyone who creates IT applications through which humans and/or machines interact with one another.
Too much software today fails in unintuitive ways when cloud services are unavailable or slow to reach.
Even if you don’t agree with the goals, the below principles explain why not adhering to them creates software that is less robust and less useful than it could be.
