import { IBase } from './IBase';

export interface IAssertion extends IBase {
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
