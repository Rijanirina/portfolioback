const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.get('/lirecv', (req, res) => {
  const filePath = path.join(__dirname, 'static/MonCV.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="MonCV.pdf"');
  res.sendFile(filePath);
});
app.get('/lireDiplomeLicence', async function (req, res) {
  const filePath = path.join(
    __dirname,
    'static/ATTESTATION_DE_DIPLOME_DE_LICENCE.pdf'
  );

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'inline; filename="ATTESTATION_DE_DIPLOME_DE_LICENCE.pdf"'
  );
  res.sendFile(filePath);
});
app.get('/lireDiplomeDelf', async function (req, res) {
  const filePath = path.join(
    __dirname,
    'static/ATTESTATION_DE_REUSSITE_DELF_B2.pdf'
  );

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'inline; filename="ATTESTATION_DE_REUSSITE_DELF_B2.pdf"'
  );
  res.sendFile(filePath);
});

app.get('/lireDiplomeBacc', async function (req, res) {
  const filePath = path.join(__dirname, 'static/BACC_Série_C.pdf');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="BACC_Série_C.pdf"');
  res.sendFile(filePath);
});
app.get('/lireCertificatDeScolariteM2', async function (req, res) {
  const filePath = path.join(
    __dirname,
    'static/CERTIFICAT_DE_SCOLARITE_MASTER_2.pdf'
  );

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'inline; filename="CERTIFICAT_DE_SCOLARITE_MASTER_2.pdf"'
  );
  res.sendFile(filePath);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
