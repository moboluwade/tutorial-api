const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://admin-moboluwade:XPCNBR2bGWyD9SrW@cluster0.aabnoph.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('DB connected')
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
