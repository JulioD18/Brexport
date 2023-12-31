import axios from "axios";
import { Request, Response } from "express";
import { Team } from "../models/team";
import { Venue } from "../models/venue";
import { TStat } from "../models/tstats";
import dotenv from "dotenv";
dotenv.config();

enum League {
  "Premier League" = 39,
  "La Liga" = 140,
  "Bundesliga" = 78,
  "Serie A" = 135,
  "Ligue 1" = 61,
  "MLS" = 253,
}

const url = "https://api-football-v1.p.rapidapi.com/v3/teams";

/**
 * Get and insert the teams from 'https://v3.football.api-sports.io/teams'
 *
 * @param req
 * @param res
 * @param next
 * @returns {Response}
 */
export const putTeamsFromAPI = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const { league, season } = req.query as {
      league?: string;
      season?: string;
    };
    if (!league || !season || !Object.keys(League).includes(league)) {
      return res.status(400).json("Bad request");
    }

    const leagueId: any = League[league as keyof typeof League];

    const options = {
      method: "GET",
      url: `${url}`,
      params: { league: leagueId, season },
      headers: {
        "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
        "X-RapidAPI-Host": process.env.X_RapidAPI_Host || "",
      },
    };

    const response = await axios.request(options);
    const teamsVenues = response.data.response;

    console.log(response);
    console.log(teamsVenues);

    //Declare all the variables that we need to insert in the database
    let teamId: number,
      teamName: string,
      code: string,
      country: string,
      founded: number,
      national: boolean,
      logo: string;
    let venueId: number,
      venueName: string,
      address: string,
      city: string,
      capacity: number,
      surface: string,
      image: string;

    for (const tv of teamsVenues) {
      const { team, venue } = tv;

      // Getting team data
      teamId = team.id;
      teamName = team.name;
      code = team.code;
      country = team.country;
      founded = team.founded;
      national = team.national;
      logo = team.logo;

      // Getting venue data
      venueId = venue.id;
      venueName = venue.name;
      address = venue.address;
      city = venue.city;
      capacity = venue.capacity;
      surface = venue.surface;
      image = venue.image;

      // Inserting the team
      await Team.create({
        id: teamId,
        name: teamName,
        code,
        country,
        founded,
        national,
        logo,
        LeagueId: leagueId,
      });

      // Inserting the venue
      await Venue.create({
        id: venueId,
        name: venueName,
        address,
        city,
        capacity,
        surface,
        image,
        TeamId: teamId,
      });
    }

    return res
      .status(200)
      .json(`Teams from ${league} have been succesfully created!`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getTeams = async (req: Request, res: Response, next: Function) => {
  try {
    const { league } = req.query as { league?: string };

    if (!league || !Object.keys(League).includes(league)) {
      return res.status(400).json("Bad request");
    }

    const leagueId: any = League[league as keyof typeof League];

    const teams = await Team.findAll({
      where: { LeagueId: leagueId },
      attributes: ["id", "name", "code", "country", "founded"],
    });

    return res.status(200).json(teams);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getTeamStatsAPI = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const { team, season, league } = req.query as {
      team?: string;
      season?: string;
      league?: string;
    };

    if (!team || !season || !league) {
      return res.status(400).json("Bad request");
    }

    const options = {
      method: "GET",
      url: `${url}/statistics`,
      params: { team, season, league },
      headers: {
        "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
        "X-RapidAPI-Host": process.env.X_RapidAPI_Host || "",
      },
    };

    const response = await axios.request(options);
    const teamStats = response.data.response;

    await TStat.create({
      league,
      season,
      team,
      games: teamStats.fixtures.played,
      wins: teamStats.fixtures.wins,
      loses: teamStats.fixtures.loses,
      draws: teamStats.fixtures.draws,
      goals: teamStats.goals,
      lineups: teamStats.lineups,
      cards: teamStats.cards,
    });

    return res.status(200).json(teamStats);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getTeamStats = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const { team, league } = req.query as {
      team?: string;
      league?: string;
    };

    if (!team || !league) {
      return res.status(400).json("Bad request");
    }

    const teamStats = await TStat.findAll({
      where: { team, league },
      attributes: [
        "season",
        "games",
        "wins",
        "loses",
        "draws",
        "goals",
        "lineups",
        "cards",
      ],
    });

    return res.status(200).json(teamStats);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
