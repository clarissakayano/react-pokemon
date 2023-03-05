export const unslugify = (slug: string): string =>
  slug
    .split('-')
    .map((item) => `${item[0].toLocaleUpperCase()}${item.substring(1)}`)
    .join(' ');

// special-attack  - separa em "-"
// ['special', 'attack']
// ['Special', 'Attack'] - 1ª letra maiúscula
// Special Attack - Depois junta tudo
