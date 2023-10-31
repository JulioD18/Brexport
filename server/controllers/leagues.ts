import axios from "axios";
import { Request, Response } from "express";
import { League } from "../models/league";
import dotenv from "dotenv";
dotenv.config();

const url = "https://api-football-v1.p.rapidapi.com/v3/leagues";

export const getLeagues = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const { limit, offset } = (req.query as {
    limit?: number;
    offset?: number;
  }) || { limit: 100, offset: 0 };

  try {
    const leagues = await League.findAll({
      limit: limit,
      offset: offset,
    });

    return res.status(200).json(leagues);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/**
 * Get and insert the teams from 'https://v3.football.api-sports.io/teams'
 *
 * @param req
 * @param res
 * @param next
 * @returns {Response}
 */
export const putLeaguesFromAPI = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const options = {
      method: "GET",
      url: url,
      headers: {
        "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
        "X-RapidAPI-Host": process.env.X_RapidAPI_Host || "",
      },
    };

    const response = await axios.request(options);
    const leagues = response.data.response;

    let id: number,
      name: string,
      type: string,
      leagueCountry: string,
      leagueSeasons: number[],
      logo: string;

    for (const leag of leagues) {
      leagueSeasons = [];

      const league = leag.league;
      const country = leag.country;
      const seasons = leag.seasons;

      id = league.id;
      name = league.name;
      type = league.type;
      logo = league.logo;

      leagueCountry = country.name;

      for (const season of seasons) {
        leagueSeasons.push(season.year);
      }

      await League.create({
        id,
        name,
        type,
        country: leagueCountry,
        seasons: leagueSeasons,
        logo,
      });
    }

    return res.status(200).json("All leagues have been added!");
  } catch (error) {
    return res.status(500).json(error);
  }
};
