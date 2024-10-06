import express from 'express';
import cors from 'cors';
import 'dotenv';
import multer from 'multer';

const app = express();
const upload = multer();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single("upfile"), function (req, res)
{
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
