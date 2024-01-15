# Utils
## static GroupArtifacts (groupBy:string,baseArtifacts:Artifact[]): Dictionary
Agrupa baseArtifacts em um dicionário com base em groupBy \(mídia, categoria, etc\). Usa as propriedades da própria classe [Artifact](/Docs/src/app/models/artifacts/Artifact.md) para isso.

## static ResolveParams(params:Dictionary):string
Concatena params em uma query params de url valida. Começa com uma string = "?". Depois, concatena nessa string o par de key e value na posição 0 do params no modelo "key=value". Depois, faz um loop pelos pares de key e value do params, começando pela posição 1, concatenado os pares na string anterior no modelo "&key[i]=value[i]".