export interface Condition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Weather {
  timestamp: number;
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  id: number;
  name: string;
  conditions: Condition[];

  constructor(id?: number, name?: string) {
    this.id = id || undefined;
    this.name = name || undefined;
    this.timestamp = Date.now();
  }
}
