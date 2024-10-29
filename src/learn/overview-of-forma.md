# Overview

Forma is the first live sovereign rollup. It is powered by the Astria Stack, with Celestia underneath. Forma is EVM compatible, decentralized and permissionless, and anyone can use it for building onchain.
![Forma Banner](images/Twitter%20Cover%20(6).png)
Out the box, Forma launched with a suite of custom precompiles tailored to optimize NFT minting and distribution.

Forma currently operates on its own instance of the Astria Sequencing Layer (forma-net). It consists of four Astria sequencer nodes which use CometBFT for consensus. The forma-net Sequencer Relayer submits blobs to Celestia mainnet and uses TIA as its gas token. Forma will migrate to Astria mainnet once it is live. 

Forma uses the Astria Stack, with modifications to Astria-geth to create forma-geth. These changes include custom EVM precompiles for handling onchain metadata, facilitating cheap minting and gas fees for the best collector experience. 

