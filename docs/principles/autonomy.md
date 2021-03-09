---
id: autonomy
title: Build Autonomous Parts
---

The ultimate goal of local-first cooperation is to obtain a system that is maximally useful, even under adverse conditions.
As long as one computing device is functioning, the apps on it shall be usable:
while new information from other devices cannot be received, the user can still view the stored data and register new information or interact with locally modelled workflows.
As soon as a second functioning edge device comes into communication range, information can flow between them and allow inter-device workflows to be used, for example for the collaboration between their users.

This is achieved by designing each part to assert its own autonomy, claim ownership of its local data, and function independently of everything else.
Such independence can only be achieved by using suitable communication protocols between the parts, meaning foremost between the computing devices.
From an application developer’s view it should always be possible to send data, where buffering is used in case the recipient can momentarily not be reached.
Similarly, reception of new data should be processed in an event-driven fashion, since the application developer cannot foresee when the transfer will occur — they can only describe how the data shall be interpreted.

The second part of this autonomy rests on the assumption of clearly defined data formats that are known to both the sender and the recipient.
Internal data models may change at any time, but externally transferred data have more longevity precisely due to the autonomy of the recipients:
it may well be that the information is interpreted at a much later point in time, when the software on the participating devices has undergone multiple version updates.

This is to say that the collaboration with other edge devices must not be required for useful function, but of course it lies in the nature of some application functions that they are less useful while there are no communication partners.

On the other hand, Edge Native applications are ultimately built for collaboration, they are not expected to be used without communication partners indefinitely. Therefore, such an application is coded with a focus on how information will be exchanged with other devices, collaboration is baked into it.

An Edge Native application is capable of but not constantly tied to communication.
