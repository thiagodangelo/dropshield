# DropShield

DropShield is a tool to prevent other merchants from copying the product sales pages of your online store hosted on Cartpanda. In addition, it also prevents the triggering of fake purchases on the Facebook Pixel installed on your store.

In order to do so, it uses jQuery and disable-devtool libs. jQuery is already used in any Cartpanda store by default and is not loaded by DropShield. On the other hand, disable-devtool is not enabled by default. Therefore, it is automatically loaded by DropShield, so you don't need to worry about loading it.

To use it, just copy this line below and paste it at "Loja Online > Configuracoes > Scripts Adicionais > Loja > Head" on your Cartpanda store.

`<script src="https://cdn.jsdelivr.net/gh/thiagodangelo/dropshield@main/dropshield.min.js"></script>`

Hope it helps you!

## Warning

DropShield has only been tested with Cartpanda's Lift theme, so we can't guarantee compatibility with other themes.
