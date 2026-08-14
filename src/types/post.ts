// Tipos para los posts basados en el schema de src/content/config.ts
export interface Post {
  title: string;
  date: string;
  updated?: string;
  description?: string;
  tags?: string[];
}