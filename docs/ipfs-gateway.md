---
id: ipfs-gateway
title: Running your own IPFS gateway
---

In principle, this website should be accessible via one of the existing public IPFS gateways,
but in our testing this has proven unreliable (the symptom is a “gateway timeout”).
A better way — also in terms of doing it _local-first_ — is to access this website on your local machine instead.
All this takes is a running IPFS daemon.

## Installing IPFS

Please refer to the installation instructions on installing [IPFS Desktop](https://docs.ipfs.io/install/ipfs-desktop/)
or [IPFS command line](https://docs.ipfs.io/install/command-line/) for your operating system.
If you use the latter, make sure to run

```bash
ipfs init
ipfs daemon
```

The second one will start the IPFS node that you need to keep running in order to access the website.

## Accessing the website

Once your IPFS daemon is running you can access data on IPFS using HTTP on `localhost:8080`.
Since this site is built with [`docusaurus`](https://docusaurus.io/) it needs to live at the root of its webserver.
Luckily, the IPFS daemon supports this by resolving content identifiers (which is a hash of the file contents you want to access) from the used hostname.
The link on the [front page](/) therefore points to a URL like

    http://bafybeifjnre4ztf5xnemdnobnzyvvpftgypuvymhjgkzm4l233ixlc4ujm.ipfs.localhost:8080/

If you want to make sure to keep this site’s files around even when the IPFS daemon performs its internal garbage collection, you should pin the hash from the URL
(`bafybeifjnre4ztf5xnemdnobnzyvvpftgypuvymhjgkzm4l233ixlc4ujm` in this case).
Once this is done, you can access the whole site without needing access to the internet.
