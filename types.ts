export enum AgeType {
  YUVARA = 'Yuvara',
  UMBARA = 'Umbara',
  PILLARA = 'Pillara',
  FINARA = 'Finara',
  HELIORA = 'Heliora',
  COSARA = 'Cosara'
}

export interface TimelineEvent {
  year: string;
  suffix: string;
  description: string;
  age: AgeType;
  tags?: string[];
}

export interface AgeConfig {
  id: AgeType;
  label: string;
  yearRange: string;
  color: string;
  description: string;
}