import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const token = await loginService(req.body);
    return res.json({ token: token });
  } catch (e: any) {
    console.error(e);
    return res
      .status(e.statusCode ?? 500)
      .json({ error: e.message ?? "Error login" });
  }
};

export { createLoginController };
