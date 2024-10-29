# Runtime API Examples

The Forma bridge allows users to connect their wallet and one-click bridge over TIA from Celestia Mainnet to Forma. 

![Bridge Explanation](/src/bridge/logo/bridge%20image.png)

On the backend, TIA is bridged from Celestia to Stride via an IBC transfer. TIA on Stride is then bridged to Forma using Hyperlane in the following order after landing on Stride:

Stride Hyperlane contract is called, and TIA is locked in the contract.

Validators watch for these contract interactions and sign that the bridge request is valid.

Validators post signatures offline.

Relayers watch for validator signatures, and when quorum is met, submit the transaction and validator signatures to the Forma Hyperlane contract 

Forma Hyperlane contract validates the signatures, validates that quorum is met, and mints the amount of tokens being bridged to the recipient. Bridging out is the same flow, but in the reverse order.

Signer threshold for bridging is 4/10. Bridging out is 3/3 but the team is currently looking into updating it to 4/10.

Bridge transactions take on average 10 seconds to complete and the simple bridge UX allows users to quickly start using TIA on Forma. 

