const { default: Request } = require('../request');

export const makeDiagno = (userSymptoms) => {
  console.log('make diagno Request body', userSymptoms);
  return Request.post('/diagno', userSymptoms);
};
