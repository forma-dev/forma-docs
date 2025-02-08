---
aside: false
---

# FAQ

[[toc]]

## What is Forma?
Forma is a blockchain purpose-built for onchain creations, built on Astria with Celestia underneath. We have implemented custom EVM precompiles that imbue NFTs with expressivity and enable novel use cases.

Astria published a detailed [article](https://www.astria.org/blog/how-forma-uses-the-astria-stack) on how Forma uses Astria and why Forma not just another EVM.

## Who can build on Forma?
Anyone! We will be launching Forma with fully onchain metadata that is readable and actionable from any smart contract. 

This allows for creations to be natively:

* Composable
* Dynamic
* Interactive
* Modular

## What is the native token of Forma?
Forma will also be the first rollup on Celestia with TIA as the native gas token and currency.

## How do I withdraw my TIA back to Celestia?
Visit the [Forma Bridge](https://bridge.forma.art/), click "Withdraw" and then fill out all fields to withdraw your TIA to Stride. From there, you can use your Cosmos wallet, or one of our bridge partners listed below, to transfer your TIA from Stride to Celestia. 

For example on Keplr, you would find your TIA on the Stride network in your available balance, select send, select the toggle to select IBC Transfer and then select Celestia.

In the future, we plan to enable direct withdraws to Celestia.

You can also use one of our various [bridge partners.](bridge/how-to-use#alternate-bridge-options)

## How do I bridge my $TIA to Forma?
Utilizing the [Forma Bridge](https://bridge.forma.art/)

To deposit funds to Forma:
1. Make sure you are on the "Deposit" tab, connect your Celestia wallet and then enter the amount you wish to bridge.
2. Either connect your EVM wallet, such as Metamask, or enter in a EVM address in the "Recipient Address" field. This will be the address the TIA will be sent to on Forma.
3. Select "Deposit", review your transaction details and then select "Deposit".
4. Approve the transaction in your wallet and your TIA should be deposited to your EVM wallet in around ~15 seconds.

Now your funds are deposited on Forma!

You can also use one of our various [bridge partners.](bridge/how-to-use#alternate-bridge-options)

## How do I add the Forma network to my wallet?
Network details and connecting to Forma can be found [here.](learn/chain-info#connecting-to-forma)

## What is Modularium?
[Modularium](http://modularium.art) is the inaugural art fair of onchain creations on Forma, curated by Aura. The art released on Modularium will be the very first NFTs on the Forma chain.

We will be using this event to showcase the chains unique features.

Artists retain 90% of sales all sales while Forma makes 10%.

## How do I cancel a stuck Metamask transaction?
Sometimes wallets inaccurately calculate gas and tx fees and it can lead to a stuck transaction. 

To cancel these transactions on Metamask:

Method 1:

1. Click the "Cancel" button on your oldest transaction (TX).
2. Click the edit button to edit the "Estimated Fee"
3. Click on "Advanced".
4. Set the "Max base fee" to 50 and make sure the "Priority Fee" is also 50. These fees MUST be more than 18 or they will always fail. 
5. Click Save.
6. Submit TX.


Method 2:

1. Enable Customize transaction nonce in the advanced settings of your MetaMask wallet. Make sure Advanced gas controls are also switched on, as this will allow you to manipulate the gas you pay and make sure your cancellation transaction is processed before the original you want to cancel. 

2. Send a new transaction. In the new transaction, you can send 0 TIA TO yourself, meaning your MetaMask public address. Fill in 'Custom Nonce' with the same nonce as the OLDEST transaction that is still pending. You can find this information on the [explorer](https://explorer.forma.art/).

3. Now hit 'Edit' next to 'Gas Fee'. To make sure your cancellation request is picked up as a priority, and before the original, you will need to pay more for gas.

Set your gas limit comparable to or slightly higher than your original transaction, and your max priority fee to at least 10% higher (in gwei) than the GAS FEE from the original transaction that is pending (e.g. if that transaction had a gas fee of 30 Gwei, please set the MAX PRIORITY FEE in the replacement/cancellation transaction to 33-35 Gwei). You can also see your gas fee in your previous transaction on the explorer. A safe guess for a Gwei fee would be 100. You can check your gas fee on the blockchain explorer to compare and ensure you are using enough. 

Please note that we do not officially support Metamask as a product. We are merely providing you MetaMask's own support information. For official support please visit the Metamask help center.

## How do I claim a Forma role?
If you own at least 1 NFT from Modularium.art, you are eligible to claim a role.

- Navigate to the [Forma Discord.](https://discord.gg/P6tEY8d7De)
- Go to the ⁠🔑│apello-verify channel, click the Link Wallet button.
- Connect your wallet and select the Forma network in the network options.
- Connect your Discord
- There is no need to click the VERIFY button on the web page. Clicking VERIFY on the web page just brings you to the Bot creators Discord and is not part of the process of getting a role on the Forma Discord. 
- Now that you have connected your wallet and Discord, navigate back to the ⁠🔑│apello-verify channel and click the VERIFY button.
- Wait for 1 minute delay.
- You now have your roles! You can click your username inside of the Forma Discord and verify your roles.

## How to I unwrap wTIA?
There are two options for unwrapping wTIA:

Unwrap wTIA through Relay
1. Navigate to the [Forma Relay Bridge](https://relay.link/forma)
2. Connect wallet
3. Select "Forma" and "wTIA" and then select "Forma" "TIA"
4. Unwrap

Unwrap wTIA through Modularium:
1. Head to https://modularium.art/
2. Connect your wallet that has wTIA
3. Click your avatar in the top right of the navigation
4. Click "UNWRAP ALL" beside your wTIA balance.

## Does Forma have a token?
At this time there is no planned token. Forma utilizes TIA as the network gas token and main currency.