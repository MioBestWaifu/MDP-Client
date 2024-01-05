# Nomeação
- Métodos seguem o padrão C# de nomeação, a primeira letra de cada palavra é sempre maiuscula

# Notação
- Nas popriedades dos typescript, usar lista
# Interação com o servidor
## Local
- Dados mostrados ao usuário devem ser carregados de uma vez só, na page e distribuídos aos componentes, por razões de performance, exceto para navegação paginada, em que os dados são carregados por página, mas ainda assim no PageComponent.
- Interações do usuário são feitas pelo componente em que a interação ocorre, por razões de organização. Ex: o método de login é chamado no [LoginForms](/Docs/src/app/components/forms/LoginForms.md).