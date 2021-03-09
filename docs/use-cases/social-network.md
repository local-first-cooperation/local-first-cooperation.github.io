---
id: social-network
title: Social Network
---

- description:

  people in physical proximity to one another (in a village or quarter) exchanging gossip, news, sharing local events, trading goods, organising sports events, etc.; all content is owned by its respective creator and shown to others based on permissions (like encrypting so that only friends can decrypt); propagation model is like “word of mouth”, not like “giving everyone a megaphone” — I only get to see a post from China if it actually was shared in a long chain half around the world

- techniques:

  DDD, event sourcing, distributed event log, peer-to-peer

- types of data:

  all content created and owned locally, shown to others deliberately

- expected connectivity:

  everything between isolated device and real-time chat or video call

- stay responsive:

  the whole app operates on locally available state to give a consistent look and feel regardless of connectivity status — known content can always be viewed and new content can always be posted; of course live reactions only come in while communication is possible, but that is natural

- local communication:

  making such a social network practical will require some changes to our network infrastructure:
  our current DSL and wifi are designed to permit access from my home to cloud services, not to other homes;
  it is conceivable that local network APIs in iOS and Android may be used to exchange data between people’s phones directly, though, by just being close to each other

- accept uncertainty:

  everybody sees the current state of the world as far as it is known to their local device — the UX design should make it obvious when no external updates have been received for some time; much of the uncertainty is inherent to the application, though, in that other people’s state and activity is notoriously unknown until we hear from them

- assert autonomy:

  in this use-case the app should go beyond the technical view of clearly establishing communication protocols, it should implement the autonomy of the local user, their ownership and agency over the created data, and help them understand and control what happens with their data; there is no central authority that needs to be trusted, but there is also no central instance to which appeals can be made

- handle dynamics:

  since everybody brings their own CPU and memory, this system is inherently scalable, there is no central service that would need to respond to changing load; the system needs to foresee the frequent addition and removal of nodes from the peer graph, though

- tailor consistency:

  posting and commenting are activities that don’t need coordination because there are no constraints to be upheld (everybody has their own “write stream”), but for example trading goods is not possible in the transactional sense: the order of reactions to a seller’s post is only final once all relevant devices have contributed their updates, which in this open system cannot practically be asserted; the system OTOH does not need to provide certainty because people can just meet in real life and finalise the deal
