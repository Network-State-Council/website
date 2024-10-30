import { countryData } from '../data/countries';
import { kebabCase, normalize } from "@sil/case"

const formaturlSegment = (str:string):string=>{
  return kebabCase(normalize(str));
}

export function generateRoutes() {
  const routes: string[] = ['/'];

  Object.entries(countryData).forEach(([continent, continentData]) => {

    const continentPath = formaturlSegment(continent);
    routes.push(`/${continentPath}`);

    continentData.countries.forEach((country) => {
      const countryPath = formaturlSegment(country.name);
      routes.push(`/${continentPath}/${countryPath}`);

      country.cities.forEach((city) => {
        const cityPath = formaturlSegment(city);
        routes.push(`/${continentPath}/${countryPath}/${cityPath}`);
      });
    });
  });

  return routes;
}
