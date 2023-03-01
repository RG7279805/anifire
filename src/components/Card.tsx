// import React from "react";
// import { IEAnime } from "../types";
// import { useNavigate } from "react-router-dom";
// const Card = ({ animeInfo }: { animeInfo: IEAnime }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="w-64 h-120 rounded-md m-2 text-cyan-50"
//       style={{ backgroundColor: "#2a2c31" }}
//       onClick={() => {
//         console.log("CLICKED ON CARD");
//         navigate(`/episode/${animeInfo.animeId}`);
//       }}
//     >
//       <img
//         className="w-full h-80"
//         // style={{ backgroundImage:  }}
//         src={animeInfo.animeImg}
//       ></img>
//       <div className="flex justify-center ">{animeInfo.animeTitle}</div>
//     </div>
//   );
// };

import React from "react";
import { IEAnime, IAnimeDetail, IEResult } from "../types";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AnimeCard = ({ animeInfo }: { animeInfo: IEResult }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ backgroundColor: "ActiveBorder" }}
      className="w-72 m-2 h-140 hover:border-zinc-50 hover:border-4 focus:border-zinc-50 focus:border-4"
      onClick={() => {
        navigate(`/episode/${animeInfo.id}`);
      }}
    >
      <CardActionArea className="bg-slate-600 ">
        <CardMedia
          component="img"
          // height="140"
          image={animeInfo.image}
          alt="green iguana"
        />
        <CardContent className="">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-gray-50 text-center"
          >
            {animeInfo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AnimeCard;
