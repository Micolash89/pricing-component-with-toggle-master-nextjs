export interface PrompsCardComponent {
  name: string;
  priceAnnually: number;
  priceMonthly: number;
  storage: string;
  users: string;
  send: string;
}

export type CardComponent = {
  name: string;
  priceAnnually: number;
  priceMonthly: number;
  storage: string;
  users: string;
  send: string;
};

export interface PromptsDescriptionCard {
  description: string;
  last:boolean;
}
