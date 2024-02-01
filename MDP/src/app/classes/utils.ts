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
      } else if (key instanceof Date){
        const year = key.getFullYear().toString();
        if (!groupedArtifacts.Get(year)) {
          groupedArtifacts.Add(year, []);
        }
        const group = groupedArtifacts.Get(year);
        if (group !== null) {
          group.push(artifact);
        }
      } else {
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
    if (property.toLocaleLowerCase() == "category")
      return "categories";
    else if (property.toLocaleLowerCase() == "demographic")
      return "targetDemographics";
    else if (property.toLocaleLowerCase() == "othername")
      return "otherNames";
    else if (property.toLocaleLowerCase() == "otherimgurl")
      return "otherImgUrls";
    else if (property.toLocaleLowerCase() == "year")
      return "releaseDate";
    else
      return property;
  }

  static GetContextualMaxWidth(context:string): number {
    let maxWidth = 0, viewportWidth = window.innerWidth;
    switch (context) {
      case 'homeArtifactsCollapsed':
        maxWidth = 0.76 * (viewportWidth);
        return maxWidth;
      case 'homeArtifactsExpanded':
        viewportWidth = window.innerWidth;
        maxWidth = 0.76 * (viewportWidth - 170);
        return maxWidth;
      case 'homeArtifactsCollapsedPortrait':
          maxWidth = 0.76 * (viewportWidth);
          return maxWidth;
      case 'homeArtifactsExpandedPortrait':
          viewportWidth = window.innerWidth;
          maxWidth = 0.76 * (viewportWidth - 170);
          return maxWidth;
    }

    return 0;
  }
}