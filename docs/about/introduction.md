---
id: introduction
title: Introduction
---

Humankind is the most resilient higher life form on this planet, which stems from two main characteristics: highly adaptive and tenacious individuals who are capable of complex and abstract cooperation. Our usage of computers has added to our capabilities but has also made us more vulnerable by centralisation, creating single points of failure. As we are mirroring our societies’ high-level cooperation in computer networks, we also need to mirror our natural resilience in our software designs to take the next step forward, otherwise we will fail. This resilience needs to be woven into the fabric of all our digital interactions, from manufacturing of goods over healthcare, economic services, and public authority to social networks.

We call this design goal local-first cooperation, complementing cloud native architecture where the need for resilience outweighs the economies of scale. We derive some core principles on which such software systems are built:

- require only local communication for local interactions — going via a central message exchange always adds potential for failure
- allow each part to act autonomously, with decisions being taken on the local computing device
- construct the parts for cooperation between them, solve larger problems using multiple devices working together
- accept uncertainty and make decisions based on local but possibly incomplete information
- expect dynamic changes in the network of neighbouring and cooperating parts

Upon this basis we build more complex interactions, forming hierarchical behaviour and covering longer distances in space and time. We connect such local applications with centralised services like global blockchains or the cloud, but these connections cannot be required for local interactions that must always work.

Some further restrictions follow from the principles, most notably that we can only employ consensus (i.e. have a strongly consistent data model) when we can afford the latency and fallibility that come with it. The principles also give guidance in terms of software architecture, namely that data structures need to support evolution since we store facts for a long time, and that the flow of information is a primary design target. Finally, implementing autonomous parts is fostered by communicating events rather than state; this allows each part to independently derive and structure the information it needs.
