import "dotenv/config.js";
import app from "./src/app.js";
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;


app.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Servidor escutando em http://localhost:${port}`);
}); 