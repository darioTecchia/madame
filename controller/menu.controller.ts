import { NextApiRequest, NextApiResponse } from "next";
import { Menu } from "../models/Menu";

type MenuController = {
  getAll: Function,
  getById: Function,
  find: Function,
  create: Function,
  update: Function,
  delete: Function
};

let menuController: MenuController = {
  getAll: (req: NextApiRequest, res: NextApiResponse<[Menu]>) => {
    res
      .status(200)
      .send([
        {
          title: 'ciao'
        }
      ])
  },
  getById: () => { },
  find: () => { },
  create: () => { },
  update: () => { },
  delete: () => { }
}

export default menuController;