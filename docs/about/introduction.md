---
id: introduction
title: Introduction
---

Imagine you want to build an application through which two people can work together on a document, for example a workflow.
Perhaps there is some “thing” that you want to work with as well, like a temperature sensor, unlocking a door, or supervising a machine in a factory.
So you start writing down how that workflow should evolve, you subscribe to data input streams from your connected devices, and you implement the logic for each step of the process.
Of course there’s a UI as well, so you pick up your favourite frontend tooling and create that.

Now imagine that you take the resulting application — its process logic and UI components — and deploy it directly on two phones and one Raspberry Pi, nothing else is involved.

This is the idea of local-first cooperation.
The only requirement for computing devices to work together is that they can exchange information with one another, be that over wifi, bluetooth, LAN, or ultra-wide band.
We have become used to putting everything into centrally managed places like the cloud or a local data centre, but that is not necessary, and it is not always helpful.

We now have tools like decentralised logs (chains of blocks, like blockchain but without the overhead of proof of work) or conflict-free replicated data types (CRDTs).
With these tools we can build collaborative apps and deploy them like SaaS solutions, but based on local devices instead of someone else’s server farm.
This has the advantage of much lower cost, since the end users supply and maintain the hardware — everybody looks after their smartphone!
It also uses existing computing power much more efficiently, the end users are already paying for the electricity that powers their device.

Besides lower operating cost, the system’s data is stored on the end users’ devices, shared only with other people for the purpose of working together;
this much improved privacy makes end users happy and frees us from having to provide corresponding storage capacity.
Another great boon to end users is that software built in this fashion will remain maximally useful independent of internet connectivity:
the only thing that needs to work for local data access is the user’s device, and the only thing needed for collaboration is communication with another user’s device.

> _If I hear something too good to be true, it ain’t.  —  Lt. Aldo Raine_

The advantages listed above come in large part from the comparison to an overly centralised usage of the cloud, but there are some real disadvantages as well.
Without central servers it becomes more difficult to maintain a consistent world view — in essence you can no longer make transactional changes across the whole system.
Instead, local-first cooperation implies working with possibly incomplete information and making decisions based on partial knowledge.
This is how we humans operate all the time, so we know that this is possible.

Another difficulty is that when operating a SaaS you are in control of the current version, you can centrally update your users according to your schedule, do A–B testing etc.
In local-first software the end user is in control of the application running on their hardware, they will update whenever they see fit.
This means that we need to keep data migration paths open for longer periods than today, a new app version may need to read not only the previous format but all formats of the past year or more.

## Where to go from here

If you want to see this in action, read code, and dive right in, then you can check out
[PushPin](https://automerge.github.io/pushpin/) (a full-fledged system built on the [automerge CRDT](https://github.com/automerge/automerge)),
or you can dip your toe in by reading how little it takes to make the [react-todo collaborative](https://github.com/actyx-contrib/todo-react/pull/1) based on
[ActyxOS](https://developer.actyx.com/docs/os/general/introduction).

The above is but a brief and incomplete summary of what local-first cooperation entails, please refer to [the principles](../principles/introduction.md) for all the details.
The following pages in this section place this software creation paradigm on the map relative to reactive, cloud native, edge computing, etc.
