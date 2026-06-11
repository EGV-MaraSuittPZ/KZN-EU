// ==========================================
//  PARTIDOS — edita aquí
//  status: "win" | "loss" | "upcoming"
//  league: clave interna (sin espacios)
//  leagueName: nombre visible
//  leagueLogo: ruta a logo de liga (opcional)
// ==========================================

const matchesData = [
   {
    opponent: "Euskal", opponentLogo: "Logos/euskal.png",
    ourScore: 7, opponentScore: 5, status: "win",
    league: "kom", leagueName: "King of Master",
    leagueLogo: "kom.png", date: "16 MAY, 2026"
  },
  {
    opponent: "ProdigiFive", opponentLogo: "Logos/p5.png",
    ourScore: 0, opponentScore: 2, status: "loss",
    league: "esp", leagueName: "Competición Española",
    leagueLogo: "competicion_española.png", date: "17 MAY, 2026"
  },
  {
    opponent: "S.O.T", opponentLogo: "Logos/sot.png",
    ourScore: 7, opponentScore: 5, status: "win",
    league: "esp", leagueName: "Competición Española",
    leagueLogo: "competicion_española.png", date: "9 MAY, 2026"
  },
  {
    opponent: "(FW)ProdigiFive", opponentLogo: "Logos/p5.png",
    ourScore: 0, opponentScore: 7, status: "loss",
    league: "esp", leagueName: "Competición Española",
    leagueLogo: "competicion_española.png", date: "1 MAY, 2026"
  },
  {
    opponent: "SCRAV", opponentLogo: "Logos/scrav.png",
    ourScore: 7, opponentScore: 4, status: "win",
    league: "esp", leagueName: "Competición Española",
    leagueLogo: "competicion_española.png", date: "25 ABR, 2026"
  },
  {
    opponent: "YoungCracks", opponentLogo: "Logos/yn.png",
    ourScore: 8, opponentScore: 6, status: "win",
    league: "esp", leagueName: "Competición Española",
    leagueLogo: "competicion_española.png", date: "19 ABR, 2026"
  },
  {
    opponent: "UDR", opponentLogo: "Logos/udr.png",
    ourScore: 7, opponentScore: 0, status: "win",
    league: "esp", leagueName: "Competición Española",
    leagueLogo: "competicion_española.png", date: "12 ABR, 2026"
  },
];
