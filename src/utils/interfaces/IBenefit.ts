import { IBase } from './IBase';

export interface IBenefit extends IBase {
  title: string;
  icon: {
    asset: {
      url: string;
    };
    crop: object;
    hotspot: object;
  };
  description: string;
}
