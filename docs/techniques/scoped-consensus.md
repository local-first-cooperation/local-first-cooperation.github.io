---
id: scoped-consensus
title: Employ Scoped Consensus only Where Required
sidebar_label: Scoped Consensus
---

Consensus is a very common mechanism that implicitly underlies almost all traditional and cloud native software: it is the ability to create a strongly consistent data model, e.g. in a relational database.
Creating consensus between computers is the act of asking a group of them to take a decision — for example on what the next database transaction shall be — and using an algorithm between them that ensures that all computers come to the same decision, modulo those that fail in the process.
From this description it is obvious that waiting for such a group decision breaks the autonomy demanded by local-first cooperation (not to mention it is impossible to create a consensus algorithm that successfully concludes under all circumstances, as proven by the [FLP result](<https://en.wikipedia.org/wiki/Consensus_(computer_science)#Solvability_results_for_some_agreement_problems>)).

There are use-cases, though, that require consensus:
consider having two rockets on Mars capable of intercepting and destroying an incoming meteorite, and an algorithm that needs to launch exactly one of those when armageddon looms (because the other rocket will be needed soon thereafter).
Or, in less dramatic terms, sending an invoice exactly once for the goods that just left the factory.
In these cases consensus needs to be used to decide which particular computing device shall perform the external effect of launching the rocket or sending the invoice — because having only a single on would be a single point of failure.

When consensus is needed in local-first cooperation, it is established only between those devices that need to agree on a single outcome, and only for those decisions that require it.
The result is then communicated as facts so that applications elsewhere may react to it in a fully autonomous fashion again, without spreading the need for consensus throughout the whole system.
