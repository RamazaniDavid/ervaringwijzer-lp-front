import { IBase } from './IBase';

export interface ICustomer extends IBase {
  name: string;
  slug: { current: string };
  logo: {
    asset: {
      url: string;
    };
    crop: object;
    hotspot: object;
  };
  description: string;
  url: string;
  className: string;
  style?: string;
  hoverStyle?: string;
}
