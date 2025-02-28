interface Achievement {
  year: string;
  description: string;
}

export interface TimelineProps {
  achievements: Achievement[];
  activeCircle: number;
  totalEvents: number;
  onPrev: () => void;
  onNext: () => void;
}
