---
id: information-flow
title: Design the Flow of Information
sidebar_label: Flow of Information
---

Cooperation is crucially enabled by the flow of information, and we know from personal experience that the quality of the cooperation vitally depends on the quality and suitability of the received information.
Local-first applications are therefore designed foremost in terms of the information flows they ingest and emit.
A complete system of many applications running on a network of edge devices will need to be designed primarily on this level as well, taking applications of known behaviour and composing them into a larger whole.

To this end, local-first cooperation puts emphasis not only on the design but also on the documentation and formal description of its information flows.
Strictly described and enforced communication protocols are necessary to ensure the successful collaboration between the different autonomous pieces.
This autonomy is not only meant in an operational sense but also in the organisational sense of collaboration between applications written by different authors.

Formal methods are more established in terms of data structure with schema languages like [JSON schema](https://json-schema.org/).
In terms of communication structure this is still an active field of research on so-called behavioural types like [session types](http://groups.inf.ed.ac.uk/abcd/session-implementations.html).
