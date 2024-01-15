# Dictionary<K,V>
- keys:K[] = []
- values: V[] = []
### Get(key:K):V | null
Procura a posição de key em this.keys e retorna o values nessa posição

### Add(key:K, value: V)
Verifica se keys já possui key, se sim substitui esse valor por key e substitui o values na mesma posição por value. Se não, adiciona key à keys e value a values.