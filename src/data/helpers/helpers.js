import npcMapper from "data/mappers/npcMapper";

const getMappedData = (nameOfData, mapper) => {
  var mappedObject = { name: nameOfData };
  var rows = mapper.split(".");
  var rowCol = [];
  rows.forEach((row) => {
    rowCol.push(row.split(","));
  });
  var headers = rowCol[0];
  headers.forEach((header, column) => {
    mappedObject[header] = rowCol.map(cell => {
        return cell[column];
    });
    mappedObject[header].shift();
    
  });
  console.log(mappedObject);
  return mappedObject;
};

var getClass = {
  getAdept: () => {
    return getMappedData("adept", npcMapper.adept);
  },
  getAristocrat: () => {
    return getMappedData("aristocrat", npcMapper.aristocrat);
  },
  getBarbarian: () => {
    return getMappedData("barbarian", npcMapper.barbarian);
  },
  getBard: () => {
    return getMappedData("bard", npcMapper.bard);
  },
};

export default getClass;
