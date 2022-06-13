import { IBase } from './IBase';

export interface IAppMenu extends IBase {
  name: string;
  icon: string;
  url: string;
  subMenu: IAppMenu[];
}
