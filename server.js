// ============================================================
//  API DE PLAYLIST  -  Relacionando Musicas e Artistas
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete os TODOs.
// ============================================================
const express = require("express");
const app = express();
const PORT = 3000 ;

app.use(express.json());
app.use(express.static("public")); 
// ---- LISTA 1: artistas (cada um tem um id) ----
const artistas = [
  { id: 1, nome: "Diante do trono", pais: "Brasil"},
  { id: 2, nome: "Fhop music", pais: "Brasil"},
  { id: 3, nome: "Davi Sacer", pais: "Brasil"},
  { id: 4, nome: "Fernandinho", pais: "Brasil"},
];

// ---- LISTA 2: musicas (guardam so o artistaId, nao o nome) ----
const musicas = [
  { id: 1, titulo: "Coração igual ao teu", artista id: "1", duracao: "345 segundos" },
  { id: 2, titulo: "Tu és", artista id: "2", duracao: "483 segundos" },
  { id: 3, titulo: "Restitui", artista id: "3", duracao: "257 segundos" },
  { id: 4, titulo: "Nada além do sangue", artista id: "4", duracao:"473 segundos" },
  { id: 1, titulo: "Único", artista id: "2", duracao: "456 segundos" },
  { id: 1, titulo: "Preciso de ti", artista id: "1", duracao: "381 segundos" },
]

// 1) LISTAR ARTISTAS

  // TODO: responder a lista de artistas com res.status(200).json(...)
app.get("/artistas", (req, res) => {
  res.status(200).json(artistas);
});

// 2) LISTAR MUSICAS  (juntando cada musica com o seu artista)
app.get("/musicas", (req, res) => {
  const resultado = musicas.map((m) => {
    const artista = artistas.find((a) => a.id === m.artistaId);
    return{
      titulo: m.titulo,
      duracao: m.duracao,
      artistas: artista ? artista.nome : "Desconhecido",
      pais: astista ? artista.pais : "-",
    };
  });
  res.status(200).json(resultado);
});

app.get("/artistas/:id/musicas", (req, res) => {
  const id = number(req.params.id);
  const doArtista = musicas.filter((m) => m.artistaId === id);
  res.status(200).json(doArtista);
});

app.listen(PORT, () => {
  console.log(`Playlist no ar: https://localhost:${PORT}`);
});
  // TODO: use map para percorrer 'musicas'.
  //       para cada musica, use find em 'artistas' para achar
  //       aquele cujo id === m.artistaId.
  //       devolva um objeto com: titulo, duracao, artista (nome) e pais.
  //       lembre: find pode devolver undefined -> trate com ? :



