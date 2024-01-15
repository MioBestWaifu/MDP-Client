# Styles.scss
*imports [Variables](/Docs/src/Variables.md)*
## .verticalFlex
- display:flex;
- flex-direction: column;

## .appWrapper
Grid para envolver o aplicativo. Tem um slot para o [header](/Docs/src/app/components/structure/Header.md), um para a [navigation-bar](/Docs/src/app/components/structure/NavigationBar.md), e um para o router-outlet. Define a cor de fundo da aplicação. Não deve ser sobrescrita, exceto na [sign-page](/Docs/src/app/components/pages/SignPage.md) e [inital-setup-page](/Docs/src/app/components/pages/InitialSetupPage.md).
- display: grid
- grid-template-rows: 120px auto
- grid-template-columsn: 250px auto
- background-color: $mediumBackgroundColor
## .appWrapperPortrait
*Extends appWrapper*
Grid para envolver o aplicativo no mobile. Estabelece 0px como espaço para [navigation-bar](/Docs/src/app/components/structure/NavigationBar.md) e counteúdo adicional, redefinindo também a proporção do [header](/Docs/src/app/components/structure/Header.md) e do router-outlet.
- grid-template-rows: 80px auto
- grig-template-columns: 0px auto
## .contentWrapper
Grid para envolver o conteúdo de uma page. Tem um slot para conteúdo principal na esquerda (centro da página) e um menor na direita para conteúdo secundário. 
- display: grid
- grid-template-columns: 8fr 2fr
## .contentWrapperPortrait
*Extends verticalFlex*
Flexbox para envolver o conteúdo de uma page do mobile.

## .roundedImage
- border-radius: 50%

## .twoRowsGrid
- display: grid
- grid-template-rows: auto auto;

## .twoColumnsGrid
- display: grid
- grid-template-columns: auto auto;

## .centerInternalText
- text-align: center
- vertical-align: middle

## p, i, label, div
- font-family: $standardFont
- font-size: $mediumFontSize
- color: $mediumOutlineColor

## input

## mdp-artifact-card, mdp-interest-card, mdp-review-card, mdp-vertical-folder, mdp-horizontal-folder, mdp-rate-control, mdp-search-bar, mdp-search-filter
- display: block