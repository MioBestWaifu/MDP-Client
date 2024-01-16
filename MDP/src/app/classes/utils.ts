import { Artifact } from "../models/artifacts/artifact";
import { Dictionary } from "./dictionary";

export class Utils {
  static GroupArtifacts(groupBy: string, baseArtifacts: Artifact[]): Dictionary<string, Artifact[]> {
    const groupedArtifacts = new Dictionary<string,Artifact[]>();

    baseArtifacts.forEach(artifact => {
      const key = artifact[groupBy];
      
      if (typeof key !== 'string') {
        console.warn('Warning: key is not a string');
        return; 
      }
      
      if (!groupedArtifacts.Get(key)) {
        groupedArtifacts.Add(key, []);
      }
      const group = groupedArtifacts.Get(key);
        if (group !== null) {
          group.push(artifact);
        }
    });

    return groupedArtifacts;
  }

  static ResolveParams(params: Dictionary<string,string>): string {
    let queryParams = '?';
    const entries = Object.entries(params);

    if (entries.length > 0) {
      queryParams += `${entries[0][0]}=${entries[0][1]}`;

      for (let i = 1; i < entries.length; i++) {
        queryParams += `&${entries[i][0]}=${entries[i][1]}`;
      }
    }

    return queryParams;
  }
}