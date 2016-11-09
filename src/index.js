import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
//app.get('/', (req, res) => {
//  res.json({
//    hello: 'JS World',
//  });
//});

app.get('/', (req, res) => {
  try {
    var reg = new RegExp('[0-9_/]');
    var fio = req.query.fullname;
    //console.log('reg.test -> ', reg.test(fio));
    if (fio === '' || reg.test(fio)) {
      resFio = 'Invalid fullname';
    } else {
      fio = fio.trim();
      var arrFio = fio.split(/\s+/);
      const arrLength = arrFio.length;
      //console.log('arrLength -> ', arrLength);
      var resFio;
      switch(arrLength) {
        case 3:
          resFio = arrFio[2].charAt(0).toUpperCase() + arrFio[2].slice(1).toLowerCase() + ' '
                 + arrFio[0].charAt(0).toUpperCase() + '. '
                 + arrFio[1].charAt(0).toUpperCase() + '.';
          break;
        case 2:
          resFio = arrFio[1].charAt(0).toUpperCase() + arrFio[1].slice(1).toLowerCase() + ' '
                 + arrFio[0].charAt(0).toUpperCase() + '.';
          break;
        case 1:
          resFio = arrFio[0].charAt(0).toUpperCase() + arrFio[0].slice(1).toLowerCase();
          break;
        default:
          resFio = 'Invalid fullname';
      }
    }
    //console.log(fio, ' -> ', resFio);
    res.send(resFio);
  } catch (err) {
    //console.log('Invalid fullname ' + err);
    res.send('Invalid fullname');
  }

});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
