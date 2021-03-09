---
id: foresee-network-dynamics
title: Foresee Dynamic Changes in the Network Neighbourhood
sidebar_label: Foresee Dynamic Changes
---

For mobile devices it is self-evident that their network environment dynamically changes whenever it is physically moved to a new location. But even for stationary computing devices around us with fixed network connections we acknowledge that the environment is dynamic — more dynamic than a deployment of (virtual) servers in a data center: local devices are attached to other purposes besides running the applications, they may be attached to a machine or robot, or they may be mounted in a vehicle. A smartphone may be used as an edge device, but it is at the same time bound to the human carrying it around and supplying it with electrical power.

It is therefore part of a local device’s nature that it is not 100% fixed on performing its cooperative duties, it may be switched off together with the machine it is attached to or run out of power, or its user may prioritise other apps for some time. Therefore, a local device should be considered loosely connected at all times, apps on other devices cannot assume that a particular device will always be available within their network environment.

This is true also on a larger scale in terms of changes to the deployment of local devices. While a data center is typically planned up front and deployed with a clear understanding of the parts running within it, local devices are physically tangible and therefore more spontaneously rearranged. The whole system is more flexible, it becomes possible to add or remove pieces with less effort. This is enabled on the software level by always assuming a dynamic network neighbourhood and reacting to changes.
