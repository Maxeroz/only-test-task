interface Achievement {
  year: string;
  description: string;
}

interface Category {
  category: string;
  achievements: Achievement[];
}

export type Events = Category[];
