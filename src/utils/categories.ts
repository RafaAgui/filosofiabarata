const DISPLAY_OVERRIDES: Record<string, string> = {
  'ética': 'Ética',
};

const HIDDEN = new Set(['Uncategorized']);

export function parseCategories(categorias: string): string[] {
  return categorias
    .split(',')
    .map((c) => {
      const trimmed = c.trim();
      return DISPLAY_OVERRIDES[trimmed] ?? trimmed;
    })
    .filter((c) => !HIDDEN.has(c));
}

export function categoryToSlug(category: string): string {
  return category
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\./g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

export function slugToCategory(slug: string, allCategories: string[]): string | undefined {
  return allCategories.find((c) => categoryToSlug(c) === slug);
}
