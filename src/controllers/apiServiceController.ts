import { Request, Response } from "express";
import { getConfigService } from "../services/cacheService";
import { filterDomainData } from "../utils";

export const getSupportedActions = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    console.log("queryyyy", query);
    const config = await getConfigService();
    const data = filterDomainData(
      config,
      query.domain as string,
      query.version as string, 
      "", 
      "supportedActions"
    );

    res.send({ data: data });
  } catch (e) {
    console.log("Error while fetching flows", e);
    res
      .status(400)
      .send({ error: true, message: "Error while fetching flows" });
  }
};
