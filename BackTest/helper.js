// donner des trucs en plus pour avoir un affichege bo

// Mise en page du nombre de lignes par page
function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

//Gère le cas ou rien n'est récupéré
function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}
module.exports = {
  getOffset,
  emptyOrRows,
};
