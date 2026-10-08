// ==========================================
//  PARTIDOS — edita aquí
//  status: "win" | "loss" | "upcoming"
//  team: "kaizen" | "factory" (opcional; si se omite, se considera "kaizen")
//  league: clave interna (sin espacios)
//  leagueName: nombre visible
//  leagueLogo: ruta a logo de liga (opcional)
// ==========================================

const matchesData = [
   {
    opponent: "Phantom Legacy JR", opponentLogo: "Logos/.png",
    ourScore: 0, opponentScore: 0, status: "upcoming",
    league: "Scrim", leagueName: "Scrim",
    leagueLogo: "", date: "00/10/2026"
  },
  {
    opponent: "Lunatics", opponentLogo: "Logos/.png",
    ourScore: 0, opponentScore: 0, status: "upcoming",
    league: "InvictusEU", leagueName: "InvictusEU",
    leagueLogo: "", date: "00/10/2026"
  },

  {
    opponent: "HVK", opponentLogo: "Logos/.png",
    ourScore: 4, opponentScore: 7, status: "loss",
    league: "InvictusEU", leagueName: "InvictusEU",
    leagueLogo: "", date: "04/10/2026"
  },
  
  {
    opponent: "R.O.V.E", opponentLogo: "Logos/.png",
    ourScore: 7, opponentScore: 2, status: "win",
    league: "Scrim", leagueName: "Scrim",
    leagueLogo: "", date: "22/09/2026"
  },
 
 {
    opponent: "Phantom Legacy", opponentLogo: "Logos/PHleg.webp",
    ourScore: 7, opponentScore: 3, status: "win",
    league: "Scrim", leagueName: "Scrim",
    leagueLogo: "", date: "21/09/2026"
  },

     {
    opponent: "Vora", opponentLogo: "Logos/yn.webp",
    ourScore: 7, opponentScore: 0, status: "win",
    league: "Scrim", leagueName: "Scrim",
    leagueLogo: "", date: "13/09/2026"
  },

   {
    opponent: "ZND (Final)", opponentLogo: "Logos/znd.webp",
    ourScore: 2, opponentScore: 3, status: "loss",
    league: "Ethenal EU", leagueName: "Ethenal EU ",
    leagueLogo: "Logos/ethlegue.webp", date: "22/08/2026"
  },

   {
    opponent: "Wars🇫🇷🇦🇪 (semiF)", opponentLogo: "Logos/wars.webp",
    ourScore: 2, opponentScore: 1, status: "win",
    league: "Ethenal EU", leagueName: "Ethenal EU ",
    leagueLogo: "Logos/ethlegue.webp", date: "17/08/2026"
  },

    {
    opponent: "Scrav🇪🇸 (quarterF)", opponentLogo: "Logos/scrav.webp",
    ourScore: 2, opponentScore: 0, status: "win",
    league: "Ethenal EU", leagueName: "Ethenal EU ",
    leagueLogo: "Logos/ethlegue.webp", date: "10/08/2026"
  },

    {
    opponent: "MafiaWars 🇮🇹🇵🇹 (j3)", opponentLogo: "Logos/mafia.webp",
    ourScore: 2, opponentScore: 0, status: "win",
    league: "Ethenal EU", leagueName: "Ethenal EU ",
    leagueLogo: "Logos/ethlegue.webp", date: "3/08/2026"
  },

       {
    opponent: "Ascenix", opponentLogo: "Logos/.png",
    ourScore: 7, opponentScore: 2, status: "win",
    league: "Scrim", leagueName: "Scrim",
    leagueLogo: "", date: "2/0/2026"
  },
   
    {
    opponent: "X5 🇫🇷 (j2)", opponentLogo: "Logos/X5.webp",
    ourScore: 2, opponentScore: 0, status: "win",
    league: "Ethenal EU", leagueName: "Ethenal EU ",
    leagueLogo: "Logos/ethlegue.webp", date: "27/07/2026"
  },
   
   {
    opponent: "YoungCracks🇪🇸 (j1)", opponentLogo: "Logos/yn.webp",
    ourScore: 1, opponentScore: 2, status: "loss",
    league: "Ethenal EU", leagueName: "Ethenal EU ",
    leagueLogo: "Logos/ethlegue.webp", date: "20/07/2026"
  },
   
];

