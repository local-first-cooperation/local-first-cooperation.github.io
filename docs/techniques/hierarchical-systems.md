---
id: hierarchical-systems
title: Hierarchical Systems to Cover Space and Time
sidebar_label: Hierarchical Systems
---

Given the principles of [local communication](../principles/communicate-locally.md) and [autonomy](../principles/autonomy.md), the reach of any single device is limited both in space and time.
It cannot directly communicate with other devices that are too far away, and the facts it records will be lost and forgotten once the device ceases to function.

These limitations can be overcome again by cooperation, by forming larger structures of multiple devices that achieve something unattainable by any single device.
For communication, the devices may form a mesh network with appropriate routing strategies like hierarchical overlay networks.
For durable storage, the devices may form a content-addressed storage network like [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) or [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System).
Combine these with the ability to physically move devices around, e.g. between Earth and Mars, and the distances that can be covered in space and time become literally astronomical.

Besides these infrastructure concerns, cooperation on large tasks requires the responsibilities to be split up, because no single device can perform all necessary computations.
Take as an example a fully automated manufacturing plant with thousands of individual machines, robots, vehicles, sensors, etc.
The function of allocating vehicles to transport goods between the machines and the warehouse is a complex task that cannot practically be performed by each logistics vehicles individually.
It is therefore necessary to install a hierarchy, where a group of devices keep an eye on the overall material flows within the factory and partition the problem into vehicle groups and their associated traffic routes.
Each vehicle then only needs to respond to a limited subset of material requests and coordinate with a limited subset of other vehicles to get their part of the job done.
