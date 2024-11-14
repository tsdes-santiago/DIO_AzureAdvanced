from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import nest_asyncio

app = FastAPI()

#mount static files
app.mount("/", StaticFiles(directory="/pages", html=True), name="pages")

nest_asyncio.apply()
