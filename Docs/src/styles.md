# Styles.scss

## .verticalFlex
- display:flex;
- flex-direction: column;

## .appWrapper
Grid para envolver o aplicativo. Tem um slot para o [header](/Docs/src/app/components/structure/Header.md), um para a [navigation-bar](/Docs/src/app/components/structure/NavigationBar.md), e um para o router-outlet. Define a cor de fundo da aplicação. Não deve ser sobrescrita, exceto na [sign-page](/Docs/src/app/components/pages/SignPage.md) e [inital-setup-page](/Docs/src/app/components/pages/InitialSetupPage.md).

## .appWrapperPortrait
*Extends appWrapper*
Grid para envolver o aplicativo no mobile. Elimina o espaço para [navigation-bar](/Docs/src/app/components/structure/NavigationBar.md) e counteúdo adicional, redefinindo também a proporção do [header](/Docs/src/app/components/structure/Header.md) e do router-outlet.

## .pageWrapper
Grid para envolver uma page. Tem um slot para conteúdo principal na esquerda (centro da página) e um menor na direita para conteúdo secundário. 

## .pageWrapperPortrait
*Extends verticalFlex*
Flexbox para envolver uma page do mobile. 