---
id: overview
title: Use-cases
sidebar_label: Overview
---

## What fits local-first cooperation

The following use-cases benefit greatly from local-first cooperation:

- [collaborative document editing and workspaces](../use-cases/collaborative-documents.md)
- [factory automation](../use-cases/factory-automation.md)
- [games in local area network](../use-cases/games-in-lan.md)
- [hospital](../use-cases/hospital.md)
- [local information providers](../use-cases/local-information.md)
- [field workers in remote locations](../use-cases/field-workers.md)
- [smart home equipment](../use-cases/smart-home.md)
- [social network for the neighbourhood](../use-cases/social-network.md)

Each of these use-cases lists some useful techniques for that context, here’s [the glossary](glossary.md).

## What doesn’t

The use-cases below do not benefit from local-first cooperation.
We show them here to give you a better intuition of the scope of this paradigm.

- **online gaming platform:** since online games require constant connection and there needs to be a single source of truth for the virtual world, this is best implemented in cloud-native fashion

- **commodities exchange:** settling transactions between offers and bids intrinsically requires consensus and is best implemented as a single processing loop with hot stand-by

- **online shop and order fulfilment:** the relevant data belong to the store owner, it is a classical client–server setup with clearly distinguished roles, best implemented in cloud-native fashion

- **real-time data analytics for IoT:** there is a part that fits greatly, namely showing the current status of devices in the neighbourhood;
  the larger case of analysing vast volumes from millions of devices and applying machine learning is better implemented in cloud-native fashion, though, using the economies of scale provided there

- **video or photo editing:** this is a classical case for standalone programs running on a single computer — only the resulting files are shared with others afterwards

- **low-level machine control:** this is best done in hard real-time languages on specialised hardware, no data agency or ownership issues arise at this level (the next level up [fits very well](factory-automation.md), though)

- **crypto currency wallets:** all transactions require acknowledgement by the global (and in this sense central!) blockchain, crypto currencies currently don’t work offline

## Where the jury is not yet in

The following cases may benefit from local-first cooperation in principle, but it remains to be proven in practice to present a clear-cut case.

- **video streaming platform:** peer-to-peer dissemination of popular content would be extremely efficient, but digital rights handling presents a challenge

- **video conferencing:** conceptually it makes a lot of sense to interact directly with one another;
  this would be easily possible with the early internet’s promise of _end-to-end connectivity_;
  conference calls with more than a handful participants need sophisticated video stream dissemination, though, since sending all streams separately to everyone wastes too much upload bandwidth
