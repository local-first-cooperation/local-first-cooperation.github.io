---
id: communicate-facts
title: Communicate Facts
---

Each computing device manages its own state, its own view of the relevant part of the world.
This state depends on the purpose and function of the applications it runs.
Since an application on some device shall be autonomous from other devices, the state managed by each device is an intimate detail that is protected, hidden from the outside.
Instead of communicating their state, cooperating devices communicate the facts that they learnt — either by recording information or by receiving them from other devices.
Facts are transmitted by recording events.
This allows every device to independently draw its own conclusions from the facts, to apply their own interpretation to the raw data.

It is important to note that decisions taken on one device are also facts from which conclusions will need to be drawn.
In this fashion, a local interpretation — local state — may be lifted to a fact:
if one device notes that it takes a job upon itself because it had no suitable communication peers to do otherwise, then that observation of loneliness becomes a fact that influences the further progress of the system.
What other devices make of that when they learn of this fact is a different question.
