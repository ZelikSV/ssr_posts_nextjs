import { NextApiResponse } from "next";
import { IMessageNextApiRequest } from "../../types/models";

export default function echo(
  req: IMessageNextApiRequest,
  res: NextApiResponse
) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: req.query.message ?? "Default message",
    })
  );
}
