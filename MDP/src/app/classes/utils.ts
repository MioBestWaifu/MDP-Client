import { Artifact } from "../models/artifacts/artifact";
import { Dictionary } from "./dictionary";

export class Utils {
  static GroupArtifacts(groupBy: string, baseArtifacts: Artifact[]): Dictionary<string, Artifact[]> {
    const groupedArtifacts = new Dictionary<string,Artifact[]>();
    groupBy = Utils.ResolveArtifactProperty(groupBy);
    baseArtifacts.forEach(artifact => {
      const key = artifact[groupBy];
      
      if (typeof key == 'string') {
        if (!groupedArtifacts.Get(key)) {
          groupedArtifacts.Add(key, []);
        }
        const group = groupedArtifacts.Get(key);
          if (group !== null) {
            group.push(artifact);
        }
      } else if (Array.isArray(key) && typeof key[0] == 'string'){
        key.forEach(k => {
          if (!groupedArtifacts.Get(k)) {
            groupedArtifacts.Add(k, []);
          }
          const group = groupedArtifacts.Get(k);
          if (group !== null) {
            group.push(artifact);
          }
        });
      }
      else {
        console.warn('Warning: key is not a string');
        return; 
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

  static ResolveArtifactProperty(property:string): string {
    if (property == "category")
      return "categories";
    else if (property == "targetDemographic")
      return "targetDemographics";
    else if (property == "otherName")
      return "otherNames";
    else if (property == "otherImgUrl")
      return "otherImgUrls";
    else
      return property;
  }
}